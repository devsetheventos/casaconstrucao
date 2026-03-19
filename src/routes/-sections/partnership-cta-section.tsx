import {
  Badge,
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import { HOME_PARTNERSHIP_CTAS } from "@/constants/home-partnership-ctas";
import { GradientSection } from "@/components/ui/gradient-section";
import { openExternalLink } from "@/lib/openExternalLink";

const VARIANT_STYLE = {
  red: {
    color: "red" as const,
    customColor: "#C93A3D",
    rotateDeg: -10,
    originX: "18%",
    originY: "14%",
    ellipseW: 132,
    ellipseH: 120,
    bgScale: 1.5,
    accent: "#D24447",
    buttonBg: "#D24447",
    buttonHover: "#A83639",
    border: "rgba(210,68,71,0.4)",
  },
  blue: {
    color: "blue" as const,
    customColor: "#4A58E2",
    rotateDeg: -18,
    originX: "86%",
    originY: "8%",
    ellipseW: 200,
    ellipseH: 80,
    bgScale: 1.52,
    accent: "#8C96FF",
    buttonBg: "#4450D2",
    buttonHover: "#3640A8",
    border: "rgba(68,80,210,0.45)",
  },
};

const LOGO_SIZE_MAP = {
  "leiincentivo.svg": { h: { base: "38px", md: "100px" } },
  "ministericultura.svg": { h: { base: "32px", md: "63px" } },
  "governobrasil.svg": { h: { base: "34px", md: "90px" } },
} as const;

export function PartnershipCtaSection() {
  return (
    <Box
      as="section"
      layerStyle="section.default"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 20 }}
    >
      <Stack w="full" maxW="1400px" mx="auto" gap="5">
        {HOME_PARTNERSHIP_CTAS.map((item) => {
          const style = VARIANT_STYLE[item.variant];
          return (
            <GradientSection
              key={item.id}
              color={style.color}
              customColor={style.customColor}
              rotateDeg={style.rotateDeg}
              originX={style.originX}
              originY={style.originY}
              ellipseW={style.ellipseW}
              ellipseH={style.ellipseH}
              bgScale={style.bgScale}
              noise
              borderRadius="2xl"
              border={`1px solid ${style.border}`}
              px={{ base: 5, md: 8 }}
              py={{ base: 6, md: 8 }}
            >
              <Stack
                gap="5"
                maxW="900px"
                mx="auto"
                align="center"
                textAlign="center"
              >
                <Badge
                  w="fit-content"
                  bg="rgba(255,255,255,0.14)"
                  color="#EEEEEE"
                  border="1px solid rgba(255,255,255,0.26)"
                  borderRadius="full"
                  px="4"
                  py="1.5"
                  fontSize="sm"
                  letterSpacing="wider"
                  textTransform="uppercase"
                >
                  {item.tag}
                </Badge>

                <Text
                  textStyle="h1"
                  fontSize={{ base: "2xl", md: "5xl" }}
                  lineHeight={{ base: "1.25", md: "1.03" }}
                  color="#EEEEEE"
                >
                  {item.titleStart}{" "}
                  <Text
                    as="span"
                    fontFamily="'Libre Baskerville', Georgia, serif"
                    fontStyle="italic"
                    color={style.accent}
                  >
                    {item.titleAccent}
                  </Text>
                </Text>

                <Text
                  textStyle="body.lg"
                  fontSize={{ base: "md", md: "xl" }}
                  color="#E1E1E1"
                  maxW="760px"
                >
                  {item.description}
                </Text>

                <Stack gap="2" align="center">
                  {item.highlights.map((highlight) => (
                    <HStack
                      key={highlight}
                      gap="2"
                      align="center"
                      justify="center"
                    >
                      <Icon as={LuCheck} color={style.accent} boxSize="5" />
                      <Text
                        textStyle="body.md"
                        color="#E1E1E1"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {highlight}
                      </Text>
                    </HStack>
                  ))}
                </Stack>

                <HStack gap="2" flexWrap="wrap" justify="center">
                  {item.supportLabels.map((label) => (
                    <Badge
                      key={label}
                      bg="rgba(0,0,0,0.22)"
                      color="#E1E1E1"
                      border="1px solid rgba(255,255,255,0.18)"
                      borderRadius="full"
                      px="4"
                      py="1.5"
                      fontSize="xs"
                      letterSpacing="wider"
                      textTransform="uppercase"
                    >
                      {label}
                    </Badge>
                  ))}
                </HStack>

                {item.logos && item.logos.length > 0 ? (
                  <HStack
                    gap={{ base: 3, md: 8 }}
                    flexWrap="wrap"
                    justify="center"
                    w="full"
                    py="4"
                  >
                    {item.logos.map((logo) =>
                      (() => {
                        const fileName = logo
                          .split("/")
                          .pop() as keyof typeof LOGO_SIZE_MAP;
                        const logoSize = LOGO_SIZE_MAP[fileName] ?? {
                          h: { base: "34px", md: "46px" },
                        };
                        return (
                          <Image
                            key={logo}
                            src={logo}
                            alt="Logo institucional"
                            h={logoSize.h}
                            w="auto"
                            objectFit="contain"
                            opacity="0.95"
                          />
                        );
                      })(),
                    )}
                  </HStack>
                ) : null}

                <Button
                  w={{ base: "full", md: "fit-content" }}
                  size="lg"
                  borderRadius="full"
                  px="8"
                  bg={style.buttonBg}
                  color="#EEEEEE"
                  _hover={{ bg: style.buttonHover }}
                  fontFamily="'Blauer Nue', sans-serif"
                  fontSize={{ base: "md", md: "lg" }}
                  onClick={() => openExternalLink(item.contactUrl)}
                >
                  {item.buttonLabel}
                  <LuArrowRight />
                </Button>
              </Stack>
            </GradientSection>
          );
        })}
      </Stack>
    </Box>
  );
}
