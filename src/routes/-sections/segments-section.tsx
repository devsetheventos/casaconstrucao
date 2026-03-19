import {
  Box,
  Center,
  Flex,
  Icon,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaCouch, FaHome, FaPaintBrush } from "react-icons/fa";
import { HOME_SEGMENTS_SECTION } from "@/constants/home-segments";
import { motion } from "framer-motion";

const SEGMENT_ICONS: Record<string, IconType> = {
  Construção: FaHome,
  Interiores: FaCouch,
  "Design e Detalhes": FaPaintBrush,
};

function SegmentImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
      minH={{ base: "200px", md: "280px", lg: "0" }}
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <motion.div
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={src}
            alt={alt}
            w="full"
            h="full"
            objectFit="cover"
            pointerEvents="none"
          />
        </motion.div>

        <motion.div
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
            display: "flex",
            alignItems: "flex-end",
            padding: "1.25rem",
          }}
        >
          <motion.div
            variants={{
              initial: { opacity: 0, y: 15, filter: "blur(4px)" },
              hover: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text
              color="white"
              fontWeight="medium"
              fontSize={{ base: "sm", md: "md" }}
              letterSpacing="wide"
            >
              {alt}
            </Text>
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}

function SegmentInfoCard({
  title,
  topics,
}: {
  title: string;
  topics: string[];
}) {
  const SegmentIcon = SEGMENT_ICONS[title] ?? FaHome;

  return (
    <Stack
      flex="1"
      borderRadius="2xl"
      border="1px solid #3A3A3A"
      bg="#F3F3F3"
      backgroundImage="url('/noise.svg'), linear-gradient(#F3F3F3, #F3F3F3)"
      backgroundRepeat="repeat, no-repeat"
      backgroundSize="256px 256px, cover"
      backgroundBlendMode="overlay, normal"
      color="#1E1E1E"
      px={{ base: 5, md: 6 }}
      py={{ base: 6, md: 8 }}
      justify="center"
      align="center"
      textAlign="center"
    >
      <Stack align="center" gap="3" mb="3">
        <Center boxSize="56px" borderRadius="md" bg="#1E1E1E" color="#EEEEEE" flexShrink={0}>
          <Icon as={SegmentIcon} boxSize="28px" />
        </Center>
        <Text
          fontFamily="'Blauer Nue', sans-serif"
          fontSize={{ base: "xl", md: "3xl" }}
          lineHeight="1.1"
        >
          {title}
        </Text>
      </Stack>
      <Stack gap="1" align="center">
        {topics.map((topic) => (
          <Text
            key={topic}
            textStyle="body.md"
            color="#444444"
            fontSize={{ base: "md", md: "xl" }}
          >
            {topic}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
}

export function SegmentsSection() {
  const [first, second, third] = HOME_SEGMENTS_SECTION.segments;

  return (
    <Box
      w="full"
      layerStyle="section.default"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 20 }}
    >
      <Box
        w="full"
        maxW="1400px"
        mx="auto"
        bg="#EEEEEE"
        backgroundImage="url('/noise.svg'), linear-gradient(#EEEEEE, #EEEEEE)"
        backgroundBlendMode="overlay, normal"
        borderRadius="3xl"
        border="1px solid #3A3A3A"
        px={{ base: 4, md: 8, lg: 10 }}
        py={{ base: 6, md: 12 }}
      >
        <Stack gap={{ base: 8, md: 12 }}>
          <Text
            textAlign="center"
            fontFamily="'Blauer Nue', sans-serif"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="#1E1E1E"
          >
            {HOME_SEGMENTS_SECTION.heading}
          </Text>

          <Stack gap={{ base: 4, md: 5 }}>
            {/* Segmento 1: imagem | card */}
            <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 4, md: 5 }} align="stretch">
              <SegmentImage src={first.imageSrc} alt={first.imageAlt} />
              <SegmentInfoCard title={first.title} topics={first.topics} />
            </Flex>

            {/* Segmento 2: card | imagem (invertido) */}
            <Flex direction={{ base: "column", lg: "row-reverse" }} gap={{ base: 4, md: 5 }} align="stretch">
              <SegmentImage src={second.imageSrc} alt={second.imageAlt} />
              <SegmentInfoCard title={second.title} topics={second.topics} />
            </Flex>

            {/* Segmento 3: imagem | card */}
            <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 4, md: 5 }} align="stretch">
              <SegmentImage src={third.imageSrc} alt={third.imageAlt} />
              <SegmentInfoCard title={third.title} topics={third.topics} />
            </Flex>
          </Stack>

          <Text
            textAlign="center"
            color="#4A4A4A"
            fontFamily="'Blauer Nue', sans-serif"
            fontSize={{ base: "xl", md: "3xl" }}
            maxW="980px"
            mx="auto"
            lineHeight="1.15"
          >
            {HOME_SEGMENTS_SECTION.description}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
