import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { GradientSection } from "@/components/ui/gradient-section";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedNumber({ value }: { value: string }) {
  return (
    <Box position="relative" display="inline-block" overflow="hidden" h="1em" lineHeight="1">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: "100%", filter: "blur(4px)", opacity: 0 }}
          animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
          exit={{ y: "-100%", filter: "blur(4px)", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
          style={{ display: "inline-block", position: "absolute", left: 0, right: 0 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
      {/* Hidden span just to dictate the width/height of the container */}
      <span style={{ visibility: "hidden" }}>{value}</span>
    </Box>
  );
}

export function HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isReady: false,
  });

  useEffect(() => {
    // Data alvo: 9 de Julho de 2026 às 09:00:00 (Brasília)
    const targetDate = new Date("2026-07-09T09:00:00-03:00").getTime();

    const updateTimer = () => {
      const difference = targetDate - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isReady: true,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isReady: true,
        });
      }
    };

    updateTimer(); // Calcula imediatamente
    const interval = setInterval(updateTimer, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    <GradientSection
      w="full"
      maxW="1400px"
      mx="auto"
      mt="4"
      color="green"
      rotateDeg={-10}
      originX="0"
      originY="50%"
      ellipseW={100}
      ellipseH={30}
      noise
      borderRadius="3xl"
      border="1px solid rgba(255, 255, 255, 0.03)"
      py={{ base: 8, md: 10 }}
      px="6"
    >
      <Flex
        direction="row"
        align="center"
        justify="center"
        gap={{ base: 3, md: 10 }}
        position="relative"
        zIndex="1"
        transition="opacity 0.6s ease-in-out"
        opacity={timeLeft.isReady ? 1 : 0}
      >
        {/* Dias */}
        <Stack gap="0" align="center">
          <Box
            {...{ textStyle: "numeric" }}
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="300"
            lineHeight="1"
            letterSpacing="widest"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            <AnimatedNumber value={pad(timeLeft.days)} />
          </Box>
          <Text textStyle="label" mt="2" color="#EEEEEE" fontSize={{ base: "xs", md: "sm" }}>
            Dias
          </Text>
        </Stack>

        {/* Vertical divider */}
        <Box
          h={{ base: "40px", md: "70px" }}
          w="1px"
          bg="rgba(255,255,255,0.15)"
          flexShrink={0}
          mb={{ base: "20px", md: "32px" }}
        />

        {/* Horas */}
        <Stack gap="0" align="center">
          <Box
            {...{ textStyle: "numeric" }}
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="300"
            lineHeight="1"
            letterSpacing="widest"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            <AnimatedNumber value={pad(timeLeft.hours)} />
          </Box>
          <Text textStyle="label" mt="2" color="#EEEEEE" fontSize={{ base: "xs", md: "sm" }}>
            Horas
          </Text>
        </Stack>

        {/* Colon separator */}
        <Text
          fontSize={{ base: "3xl", md: "6xl" }}
          color="rgba(255,255,255,0.2)"
          lineHeight="1"
          mb={{ base: "22px", md: "38px" }}
          flexShrink={0}
        >
          :
        </Text>

        {/* Minutos */}
        <Stack gap="0" align="center">
          <Box
            {...{ textStyle: "numeric" }}
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="300"
            lineHeight="1"
            letterSpacing="widest"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            <AnimatedNumber value={pad(timeLeft.minutes)} />
          </Box>
          <Text textStyle="label" mt="2" color="#EEEEEE" fontSize={{ base: "xs", md: "sm" }}>
            Min
          </Text>
        </Stack>

        {/* Colon separator */}
        <Text
          fontSize={{ base: "3xl", md: "6xl" }}
          color="rgba(255,255,255,0.2)"
          lineHeight="1"
          mb={{ base: "22px", md: "38px" }}
          flexShrink={0}
        >
          :
        </Text>

        {/* Segundos */}
        <Stack gap="0" align="center">
          <Box
            {...{ textStyle: "numeric" }}
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="300"
            lineHeight="1"
            letterSpacing="widest"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            <AnimatedNumber value={pad(timeLeft.seconds)} />
          </Box>
          <Text textStyle="label" mt="2" color="#EEEEEE" fontSize={{ base: "xs", md: "sm" }}>
            Seg
          </Text>
        </Stack>
      </Flex>
    </GradientSection>
  );
}
