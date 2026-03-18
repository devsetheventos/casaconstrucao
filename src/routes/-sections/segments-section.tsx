import { Box, Center, Grid, GridItem, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaCouch, FaHome, FaPaintBrush } from "react-icons/fa";
import { HOME_SEGMENTS_SECTION } from "@/constants/home-segments";

const SEGMENT_ICONS: Record<string, IconType> = {
  Construção: FaHome,
  Interiores: FaCouch,
  "Design e Detalhes": FaPaintBrush,
};

function SegmentImagePlaceholder({ title }: { title: string }) {
  return (
    <Center
      h="full"
      minH={{ base: "240px", md: "280px" }}
      borderRadius="2xl"
      border="1px solid #3A3A3A"
      bg="repeating-linear-gradient(135deg, #1F2225 0px, #1F2225 20px, #171A1D 20px, #171A1D 40px)"
      position="relative"
      overflow="hidden"
    >
      <Text
        position="absolute"
        transform="rotate(-30deg)"
        fontWeight="700"
        letterSpacing="wider"
        color="rgba(238,238,238,0.18)"
        fontSize={{ base: "lg", md: "2xl" }}
        whiteSpace="nowrap"
      >
        PLACEHOLDER IMAGEM
      </Text>
      <Text textStyle="label" color="#E1E1E1">
        {title}
      </Text>
    </Center>
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
      h="full"
      minH={{ base: "240px", md: "280px" }}
      borderRadius="2xl"
      border="1px solid #3A3A3A"
      bg="#F3F3F3"
      backgroundImage="url('/noise.svg'), linear-gradient(#F3F3F3, #F3F3F3)"
      backgroundRepeat="repeat, no-repeat"
      backgroundSize="256px 256px, cover"
      backgroundBlendMode="overlay, normal"
      color="#1E1E1E"
      px={{ base: 4, md: 5 }}
      py={{ base: 4, md: 5 }}
      justify="center"
    >
      <HStack align="center" gap="3" mb="2">
        <Center boxSize="42px" borderRadius="md" bg="#1E1E1E" color="#EEEEEE">
          <Icon as={SegmentIcon} boxSize="22px" />
        </Center>
        <Text fontFamily="'Blauer Nue', sans-serif" fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.1">
          {title}
        </Text>
      </HStack>
      <Stack gap="1.5" pl={{ base: "2", md: "1" }}>
        {topics.map((topic) => (
          <Text key={topic} textStyle="body.md" color="#444444" fontSize={{ base: "md", md: "lg" }}>
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
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} py="20">
      <Box
        w="full"
        maxW="1400px"
        mx="auto"
        bg="#EEEEEE"
        backgroundImage="url('/noise.svg'), linear-gradient(#EEEEEE, #EEEEEE)"
        backgroundRepeat="repeat, no-repeat"
        backgroundSize="256px 256px, cover"
        backgroundBlendMode="overlay, normal"
        borderRadius="3xl"
        border="1px solid #3A3A3A"
        px={{ base: 4, md: 8, lg: 10 }}
        py={{ base: 8, md: 12 }}
      >
        <Stack gap={{ base: 6, md: 8 }}>
          <Text textAlign="center" fontFamily="'Blauer Nue', sans-serif" fontSize={{ base: "3xl", md: "5xl" }} color="#1E1E1E">
            {HOME_SEGMENTS_SECTION.heading}
          </Text>

          <Grid templateColumns={{ base: "1fr", lg: "1.3fr 1fr" }} gap={{ base: 4, md: 5 }}>
            <GridItem>
              <SegmentImagePlaceholder title={first.title} />
            </GridItem>
            <GridItem>
              <SegmentInfoCard title={first.title} topics={first.topics} />
            </GridItem>
            <GridItem>
              <SegmentInfoCard title={second.title} topics={second.topics} />
            </GridItem>
            <GridItem>
              <SegmentImagePlaceholder title={second.title} />
            </GridItem>
            <GridItem>
              <SegmentImagePlaceholder title={third.title} />
            </GridItem>
            <GridItem>
              <SegmentInfoCard title={third.title} topics={third.topics} />
            </GridItem>
          </Grid>

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
