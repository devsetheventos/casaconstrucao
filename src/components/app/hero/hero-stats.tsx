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
      flexDirection="row"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      alignItems="center"
      justifyContent="space-evenly"
      w="full"
      mx="auto"
      mt={{ base: 8, md: 24 }}
      py={{ base: 4, md: 8 }}
      px={{ base: 4, md: 24 }}
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius={{ base: "xl", md: "full" }}
      gap={{ base: 0, md: 12 }}
    >
      {STATS.map((stat) => (
        <MotionBox
          key={stat.label}
          variants={fadeUp(reduceMotion)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          w={{ base: "50%", md: "auto" }}
          py={{ base: 4, md: 0 }}
        >
          <Stack gap="0" align="center" textAlign="center">
            <Text
              textStyle="numeric"
              fontSize={{ base: "3xl", md: "5xl" }}
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
