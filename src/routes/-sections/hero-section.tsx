import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { LuArrowDown } from "react-icons/lu";
import { HeroStats } from "@/components/app/hero/hero-stats";
import { HeroCountdown } from "@/components/app/hero/hero-countdown";
import { HeroInfoStrip } from "@/components/app/hero/hero-info-strip";
import { GradientSection } from "@/components/ui/gradient-section";
import { MotionBox } from "@/motion/chakra-motion";
import { fade, fadeUp, pressableTransition, staggerContainer } from "@/motion/presets";
import { useReducedMotion } from "framer-motion";

export function HeroSection() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  return (
    <Box
      as="section"
      bg="bg.canvas"
      pt={{ base: "72px", md: "100px" }}
      px={{ base: 4, md: 8 }}
    >
      <Stack gap="4" w="full" maxW="1400px" mx="auto">
        <GradientSection
          color="green"
          rotateDeg={-30}
          originX="40%"
          originY="9%"
          ellipseW={100}
          ellipseH={75}
          noise
          borderRadius="3xl"
          border="1px solid rgba(255, 255, 255, 0.05)"
          py={{ base: 8, md: 24 }}
          px={{ base: 4, md: 10 }}
        >
          <MotionBox initial="hidden" animate="show" variants={staggerContainer(reduceMotion)}>
            <Flex direction="column" align="center" justify="center" textAlign="center">
              <MotionBox variants={fadeUp(reduceMotion)}>
                <Image
                  src="/svg/icon-light.svg"
                  alt="Casa Construção Logo"
                  h={{ base: "48px", md: "100px" }}
                  w="auto"
                  mb={{ base: 3, md: 6 }}
                />
              </MotionBox>
              <MotionBox variants={fadeUp(reduceMotion)}>
                <Image
                  src="/svg/logo-full-light.svg"
                  alt="Casa Construção Logo"
                  h={{ base: "48px", md: "160px" }}
                  w="auto"
                  maxW="100%"
                  mb={{ base: 3, md: 6 }}
                />
              </MotionBox>

              <MotionBox variants={fade(reduceMotion)}>
                <Text
                  letterSpacing="wider"
                  fontWeight="200"
                  fontSize={{ base: "xs", md: "lg" }}
                  mb={{ base: 5, md: 8 }}
                  color="whiteAlpha.700"
                >
                  Construção | Acabamentos | Mobiliário | Decoração
                </Text>
              </MotionBox>

              <MotionBox variants={fadeUp(reduceMotion)}>
                <Box position="relative" mb={{ base: 7, md: 12 }}>
                  <Heading letterSpacing={"tighter"} fontSize={{ base: "5xl", md: "7xl" }} lineHeight="1.1">
                    Do
                    <Text
                      as="span"
                      textStyle="accent"
                      fontSize="inherit"
                      color="fg.default"
                    >
                      {` `}
                      construir
                    </Text>
                    {` `}
                    ao
                    <Text
                      as="span"
                      textStyle="accent"
                      fontSize="inherit"
                      color="fg.default"
                    >
                      {` `}
                      morar
                    </Text>
                  </Heading>

                  <Box
                    position="absolute"
                    bottom={{ base: "-4px", md: "-8px" }}
                    left="15%"
                    right="0"
                    h="2px"
                    bg="linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"
                  />
                </Box>
              </MotionBox>

              <MotionBox
                variants={fadeUp(reduceMotion)}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={pressableTransition(reduceMotion)}
                display={{ base: "block", md: "inline-block" }}
                w={{ base: "full", md: "auto" }}
              >
                <Button
                  onClick={() => navigate({ to: "/" })}
                  w={{ base: "full", md: "fit-content" }}
                  size="lg"
                  bg="brand.red"
                  color="fg.default"
                  fontFamily="'Blauer Nue', sans-serif"
                  fontWeight="500"
                  fontSize="md"
                  px="8"
                  h="12"
                  borderRadius="full"
                  _hover={{ bg: "red.600" }}
                  transition="background 0.2s"
                >
                  Descubra por que visitar{" "}
                  <LuArrowDown style={{ marginLeft: "8px" }} />
                </Button>
              </MotionBox>

              <MotionBox variants={fadeUp(reduceMotion)}>
                <HeroStats />
              </MotionBox>
            </Flex>
          </MotionBox>
        </GradientSection>

        {/* Countdown Box */}
        <HeroCountdown />

        {/* Info Strip */}
        <HeroInfoStrip />
      </Stack>
    </Box>
  );
}
