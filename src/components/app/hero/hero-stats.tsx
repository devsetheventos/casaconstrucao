import { Text, Stack } from "@chakra-ui/react";
import { useReducedMotion } from "framer-motion";
import { MotionBox } from "@/motion/chakra-motion";
import { fadeUp, staggerContainer } from "@/motion/presets";

const STATS = [
  { value: "200+", label: "Expositores" },
  { value: "15k+", label: "Visitantes esperados" },
  { value: "4", label: "Dias de evento" },
  { value: "10+", label: "Segmentos" },
];

export function HeroStats() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionBox
      initial="hidden"
      animate="show"
      variants={staggerContainer(reduceMotion)}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-evenly"
      w="full"
      mx="auto"
      mt={{ base: 12, md: 24 }}
      py={{ base: 4, md: 4 }}
      px={{ base: 4, md: 4 }}
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius={{ base: "xl", md: "full" }}
      gap={{ base: 6, md: 4 }}
    >
      {STATS.map((stat) => (
        <MotionBox
          key={stat.label}
          variants={fadeUp(reduceMotion)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Stack gap="0" align="center" textAlign="center">
            <Text
              textStyle="numeric"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="300"
              lineHeight={1.1}
              textAlign="center"
            >
              {stat.value}
            </Text>
            <Text
              textAlign="center"
              textStyle="label"
              mt="1"
              color="#9A9A9A"
              lineHeight={1.1}
            >
              {stat.label}
            </Text>
          </Stack>
        </MotionBox>
      ))}
    </MotionBox>
  );
}
