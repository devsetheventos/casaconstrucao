import { HStack, Stack, Text, Box, Image } from "@chakra-ui/react";
import { useReducedMotion } from "framer-motion";
import { MotionBox } from "@/motion/chakra-motion";
import { fadeUp, staggerContainer } from "@/motion/presets";

export function HeroInfoStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer(reduceMotion)}
    >
      <HStack
        justify="center"
        align="center"
        w="full"
        gap={{ base: 6, md: 24 }}
        mt="4"
        py={{ base: 6, md: 8 }}
        px="4"
        flexWrap="wrap"
      >
        <MotionBox variants={fadeUp(reduceMotion)}>
          <HStack gap="3">
            <Box color="#EEEEEE">
              <Image
                src="/svg/calendar.svg"
                alt="Ícone de Calendário"
                boxSize={{ base: "40px", md: "56px" }}
                objectFit="contain"
              />
            </Box>
            <Stack gap="0" align="flex-start" justify="center">
              <Text
                textStyle="label"
                color="#EEEEEE"
                lineHeight="1"
                fontSize={{ base: "xs", md: "md" }}
              >
                9 a 12
              </Text>
              <Text
                textStyle="h4"
                fontWeight="400"
                lineHeight="1"
                fontSize={{ base: "xl", md: "3xl" }}
              >
                JULHO
              </Text>
            </Stack>
          </HStack>
        </MotionBox>

        <MotionBox variants={fadeUp(reduceMotion)}>
          <HStack gap="3">
            <Box color="#EEEEEE">
              <Image
                src="/svg/blumenau.svg"
                alt="Ícone de Blumenau"
                boxSize={{ base: "40px", md: "56px" }}
                objectFit="contain"
              />
            </Box>
            <Text
              textStyle="h3"
              fontWeight="300"
              textTransform="uppercase"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Blumenau
            </Text>
          </HStack>
        </MotionBox>

        <MotionBox variants={fadeUp(reduceMotion)}>
          <HStack gap="3">
            <Box color="#EEEEEE">
              <Image
                src="/svg/vilagermanica.svg"
                alt="Ícone da Vila Germânica"
                boxSize={{ base: "40px", md: "56px" }}
                objectFit="contain"
              />
            </Box>
            <Stack gap="0" align="flex-start" justify="center">
              <Text
                textStyle="label"
                color="#EEEEEE"
                lineHeight="1"
                fontSize={{ base: "xs", md: "sm" }}
              >
                Parque Vila
              </Text>
              <Text
                textStyle="h3"
                fontWeight="300"
                lineHeight="1"
                fontSize={{ base: "2xl", md: "4xl" }}
              >
                Germânica
              </Text>
            </Stack>
          </HStack>
        </MotionBox>
      </HStack>
    </MotionBox>
  );
}
