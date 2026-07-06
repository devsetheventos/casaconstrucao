import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
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
};

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
                  color="fg.default"
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

                <Heading
                  as="h2"
                  textStyle="h1"
                  fontSize={{ base: "2xl", md: "5xl" }}
                  lineHeight={{ base: "1.25", md: "1.03" }}
                  color="fg.default"
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
                </Heading>

                <Text
                  textStyle="body.lg"
                  fontSize={{ base: "md", md: "xl" }}
                  color="fg.muted"
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
                        color="fg.muted"
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
                      color="fg.muted"
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

                <Button
                  w={{ base: "full", md: "fit-content" }}
                  size="lg"
                  borderRadius="full"
                  px="8"
                  bg={style.buttonBg}
                  color="fg.default"
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
