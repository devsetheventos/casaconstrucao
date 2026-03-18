import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { HOME_GALLERY_SECTION } from "@/constants/home-gallery";

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <Box
      h="full"
      minH={{ base: "130px", md: "180px" }}
      borderRadius="2xl"
      border="1px solid rgba(255, 255, 255, 0.18)"
      bg="#F7F7F7"
      backgroundImage="url('/noise.svg'), linear-gradient(#F7F7F7, #F7F7F7)"
      backgroundRepeat="repeat, no-repeat"
      backgroundSize="256px 256px, cover"
      backgroundBlendMode="overlay, normal"
      position="relative"
      overflow="hidden"
    >
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%) rotate(-30deg)"
        fontSize={{ base: "lg", md: "2xl" }}
        fontFamily="'Blauer Nue', sans-serif"
        fontWeight="700"
        letterSpacing="widest"
        color="rgba(30,30,30,0.12)"
        whiteSpace="nowrap"
        pointerEvents="none"
      >
        PLACEHOLDER IMAGEM
      </Text>
      <Text
        position="absolute"
        bottom="3"
        left="4"
        textStyle="label"
        color="rgba(30,30,30,0.45)"
      >
        {label}
      </Text>
    </Box>
  );
}

export function GallerySection() {
  return (
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} py="20">
      <Box
        w="full"
        maxW="1400px"
        mx="auto"
        borderRadius="3xl"
        border="1px solid rgba(255,255,255,0.08)"
        bg="#1E1E1E"
        backgroundImage="url('/noise.svg'), linear-gradient(#1E1E1E, #1E1E1E)"
        backgroundRepeat="repeat, no-repeat"
        backgroundSize="256px 256px, cover"
        backgroundBlendMode="overlay, normal"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 10 }}
      >
        <Stack gap={{ base: 6, md: 8 }}>
          <Stack gap="2" align="center">
            <Text textStyle="h1" fontSize={{ base: "4xl", md: "6xl" }}>
              {HOME_GALLERY_SECTION.heading}
            </Text>
            <Text textStyle="h3" color="#9A9A9A" textAlign="center">
              {HOME_GALLERY_SECTION.subtitle}
            </Text>
          </Stack>

          <Grid
            templateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" }}
            gridAutoRows={{ base: "130px", md: "180px" }}
            gap={{ base: 3, md: 4 }}
          >
            {HOME_GALLERY_SECTION.items.map((item) => (
              <GridItem
                key={item.id}
                colSpan={{ base: item.colSpan > 1 ? 2 : 1, md: item.colSpan }}
                rowSpan={{ base: 1, md: item.rowSpan }}
              >
                <GalleryPlaceholder label={item.label} />
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
