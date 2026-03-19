import { Center, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  LuBadgeHelp,
  LuHandshake,
  LuLayers,
  LuSearch,
  LuShoppingCart,
} from "react-icons/lu";
import {
  HOME_BENEFITS_SECTION,
  type BenefitIconKey,
} from "@/constants/home-benefits";
import { GradientSection } from "@/components/ui/gradient-section";
import { useReducedMotion } from "framer-motion";
import { MotionBox } from "@/motion/chakra-motion";
import { fadeUp, pressableTransition } from "@/motion/presets";
import { SectionReveal } from "@/motion/section-reveal";

const ICONS: Record<BenefitIconKey, IconType> = {
  search: LuSearch,
  handshake: LuHandshake,
  layers: LuLayers,
  help: LuBadgeHelp,
  cart: LuShoppingCart,
};

export function BenefitsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Flex
      as="section"
      layerStyle="section.default"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 20 }}
      justify="center"
    >
      <GradientSection
        color={"red"}
        rotateDeg={-8}
        originX="12%"
        originY="12%"
        ellipseW={5}
        ellipseH={100}
        maxW="1400px"
        w="full"
        noise
        borderRadius="3xl"
        border="1px solid rgba(255, 255, 255, 0.08)"
        py={{ base: 8, md: 14 }}
        px={{ base: 4, md: 8, lg: 10 }}
      >
        <SectionReveal>
          <Stack w="full" maxW="1400px" mx="auto" gap={{ base: 8, md: 10 }}>
            <MotionBox variants={fadeUp(reduceMotion)}>
              <Stack align="center" textAlign="center" gap="3">
                <Heading
                  as="h2"
                  fontFamily="'Blauer Nue', sans-serif"
                  fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                  fontWeight="600"
                  lineHeight={{ base: "1.2", md: "1.1" }}
                  letterSpacing="tight"
                  color="#EEEEEE"
                  maxW="1100px"
                >
                  {HOME_BENEFITS_SECTION.headingStart}{" "}
                  <Text
                    as="span"
                    fontFamily="'Libre Baskerville', Georgia, serif"
                    fontStyle="italic"
                    bg="#D24447"
                    color="#EEEEEE"
                    px={{ base: "2", md: "3" }}
                    py="1"
                  >
                    {HOME_BENEFITS_SECTION.headingAccent}
                  </Text>
                </Heading>
                <Text textStyle="h3" color="#9A9A9A" fontWeight="500">
                  {HOME_BENEFITS_SECTION.subtitle}
                </Text>
              </Stack>
            </MotionBox>

            <Stack gap="6">
              {HOME_BENEFITS_SECTION.items.map((item) => {
                const ItemIcon = ICONS[item.icon];
                return (
                  <MotionBox
                    key={item.title}
                    variants={fadeUp(reduceMotion)}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    transition={pressableTransition(reduceMotion)}
                  >
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      align={{ base: "center", md: "center" }}
                      textAlign={{ base: "center", md: "left" }}
                      gap={{ base: 3, md: 5 }}
                      px={{ base: 4, md: 6 }}
                      py={{ base: 5, md: 5 }}
                      border="1px solid rgba(238, 238, 238, 0.1)"
                      borderRadius="2xl"
                      bg="rgba(30, 30, 30, 0.55)"
                      backdropFilter="blur(2px)"
                    >
                      <Center
                        flexShrink={0}
                        boxSize={{ base: "52px", md: "64px" }}
                        borderRadius="lg"
                        bg="#EEEEEE"
                        color="#1E1E1E"
                        display="flex"
                      >
                        <Icon
                          as={ItemIcon}
                          boxSize={{ base: "26px", md: "34px" }}
                        />
                      </Center>
                      <Stack gap="1.5">
                        <Text
                          fontFamily="'Blauer Nue', sans-serif"
                          fontSize={{ base: "xl", md: "4xl" }}
                          lineHeight={{ base: "1.25", md: "1" }}
                          color="#EEEEEE"
                        >
                          {item.title}
                        </Text>
                        <Text
                          textStyle="body.lg"
                          color="#9A9A9A"
                          lineHeight={{ base: "1.5", md: "1" }}
                          fontSize={{ base: "sm", md: "2xl" }}
                        >
                          {item.description}
                        </Text>
                      </Stack>
                    </Stack>
                  </MotionBox>
                );
              })}
            </Stack>

            <MotionBox variants={fadeUp(reduceMotion)}>
              <Heading
                as="h3"
                textAlign="center"
                fontFamily="'Blauer Nue', sans-serif"
                fontWeight="500"
                fontSize={{ base: "3xl", md: "6xl" }}
                lineHeight="1.1"
                color="#EEEEEE"
              >
                {HOME_BENEFITS_SECTION.footerStart}{" "}
                <Text
                  as="span"
                  fontFamily="'Libre Baskerville', Georgia, serif"
                  fontStyle="italic"
                >
                  {HOME_BENEFITS_SECTION.footerAccent}
                </Text>
              </Heading>
            </MotionBox>
          </Stack>
        </SectionReveal>
      </GradientSection>
    </Flex>
  );
}
