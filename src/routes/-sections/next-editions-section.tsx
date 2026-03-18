import { Badge, Box, Button, Center, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { LuBuilding2, LuCalendarDays, LuMapPin } from "react-icons/lu";
import { HOME_NEXT_EDITIONS_SECTION, type HomeNextEditionInfoItem } from "@/constants/home-next-editions";
import { openExternalLink } from "@/lib/openExternalLink";
import { useReducedMotion } from "framer-motion";
import { MotionBox } from "@/motion/chakra-motion";
import { fadeLeft, fadeRight, fadeUp, pressableTransition } from "@/motion/presets";
import { SectionReveal } from "@/motion/section-reveal";

const INFO_ICONS: Record<HomeNextEditionInfoItem["icon"], IconType> = {
  calendar: LuCalendarDays,
  city: LuMapPin,
  venue: LuBuilding2,
};

function NextEditionMap({ src }: { src: string }) {
  return (
    <Box
      h={{ base: "220px", md: "260px" }}
      borderRadius="2xl"
      border="1px solid rgba(238,238,238,0.35)"
      overflow="hidden"
    >
      <iframe
        src={src}
        title="Mapa Expoville Joinville"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </Box>
  );
}

export function NextEditionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} py="20">
      <Box w="full" maxW="1400px" mx="auto">
        <SectionReveal>
          <Stack gap="6">
            <MotionBox variants={fadeUp(reduceMotion)}>
              <Heading as="h2" textStyle="h1" textAlign="center">
                {HOME_NEXT_EDITIONS_SECTION.heading}
              </Heading>
            </MotionBox>

            <MotionBox variants={fadeUp(reduceMotion)}>
              <HStack align="center" justify="center" gap="4">
                <Box flex="1" maxW="220px" h="1px" bg="rgba(238,238,238,0.35)" />
                <Text
                  fontFamily="'Libre Baskerville', Georgia, serif"
                  fontStyle="italic"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  color="fg.default"
                >
                  {HOME_NEXT_EDITIONS_SECTION.cityHighlight}
                </Text>
                <Box flex="1" maxW="220px" h="1px" bg="rgba(238,238,238,0.35)" />
              </HStack>
            </MotionBox>

            <MotionBox variants={fadeUp(reduceMotion)}>
              <Stack
                border="1px solid rgba(238,238,238,0.07)"
                borderRadius="3xl"
                bg="bg.canvas"
                backgroundImage="url('/noise.svg'), linear-gradient(var(--chakra-colors-bg-canvas), var(--chakra-colors-bg-canvas))"
                backgroundRepeat="repeat, no-repeat"
                backgroundSize="256px 256px, cover"
                backgroundBlendMode="overlay, normal"
                px={{ base: 4, md: 6, lg: 8 }}
                py={{ base: 6, md: 8 }}
                gap="6"
              >
                <HStack gap={{ base: 3, md: 4 }} flexWrap="wrap" justify="center">
                  {HOME_NEXT_EDITIONS_SECTION.topInfo.map((item) => {
                    const ItemIcon = INFO_ICONS[item.icon];
                    return (
                      <MotionBox
                        key={item.label}
                        variants={fadeUp(reduceMotion)}
                        whileHover={reduceMotion ? undefined : { y: -2 }}
                        transition={pressableTransition(reduceMotion)}
                      >
                        <HStack
                          gap="3"
                          px={{ base: 3, md: 4 }}
                          py={{ base: 2, md: 2.5 }}
                          borderRadius="full"
                          border="1px solid rgba(238,238,238,0.2)"
                          bg="rgba(255,255,255,0.04)"
                        >
                          <Center
                            boxSize={{ base: "30px", md: "36px" }}
                            borderRadius="full"
                            bg="bg.paper"
                            color="fg.ink"
                          >
                            <Icon as={ItemIcon} boxSize={{ base: "16px", md: "19px" }} />
                          </Center>
                          <Text
                            textStyle="label"
                            color="fg.default"
                            fontSize={{ base: "xs", md: "sm" }}
                          >
                            {item.label}
                          </Text>
                        </HStack>
                      </MotionBox>
                    );
                  })}
                </HStack>

                <HStack
                  align="stretch"
                  gap={{ base: 4, md: 6 }}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <MotionBox flex={{ md: 1.05 }} variants={fadeRight(reduceMotion)}>
                    <NextEditionMap src={HOME_NEXT_EDITIONS_SECTION.mapEmbedUrl} />
                  </MotionBox>

                  <MotionBox
                    flex={{ md: 1.55 }}
                    variants={fadeLeft(reduceMotion)}
                    display="flex"
                  >
                    <Stack justify="center" gap="3" w="full">
                      <HStack gap="2" flexWrap="wrap" color="fg.subtle">
                        <Text textStyle="h3" color="fg.subtle">
                          {HOME_NEXT_EDITIONS_SECTION.editionLabel}
                        </Text>
                        <Text
                          textStyle="h3"
                          color="fg.subtle"
                          fontFamily="'Libre Baskerville', Georgia, serif"
                          fontStyle="italic"
                        >
                          - {HOME_NEXT_EDITIONS_SECTION.dateRange}
                        </Text>
                      </HStack>

                      <Heading
                        as="h3"
                        textStyle="h1"
                        lineHeight="1.05"
                        textTransform="uppercase"
                      >
                        {HOME_NEXT_EDITIONS_SECTION.venueName}
                      </Heading>

                      <Badge
                        w="fit-content"
                        bg="rgba(104,126,98,0.28)"
                        color="fg.muted"
                        border="1px solid rgba(104,126,98,0.5)"
                        borderRadius="full"
                        px="4"
                        py="1.5"
                        fontSize="sm"
                        letterSpacing="wider"
                      >
                        {HOME_NEXT_EDITIONS_SECTION.sector}
                      </Badge>

                      <Text textStyle="body.lg" color="fg.subtle">
                        {HOME_NEXT_EDITIONS_SECTION.address}
                      </Text>

                      <MotionBox
                        whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                        transition={pressableTransition(reduceMotion)}
                        display="inline-block"
                        w="fit-content"
                      >
                        <Button
                          w="fit-content"
                          size="lg"
                          px={{ base: 8, md: 12 }}
                          borderRadius="full"
                          bg="bg.paper"
                          color="fg.ink"
                          fontFamily="'Blauer Nue', sans-serif"
                          fontSize={{ base: "md", md: "lg" }}
                          _hover={{ bg: "bg.paperSoft" }}
                          onClick={() => openExternalLink(HOME_NEXT_EDITIONS_SECTION.mapUrl)}
                        >
                          {HOME_NEXT_EDITIONS_SECTION.mapLabel}
                        </Button>
                      </MotionBox>
                    </Stack>
                  </MotionBox>
                </HStack>
              </Stack>
            </MotionBox>
          </Stack>
        </SectionReveal>
      </Box>
    </Box>
  );
}
