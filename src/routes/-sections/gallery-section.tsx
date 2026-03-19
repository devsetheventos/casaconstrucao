import { Box, Grid, GridItem, Stack, Text, Image } from "@chakra-ui/react";
import { HOME_GALLERY_SECTION } from "@/constants/home-gallery";
import { motion } from "framer-motion";

export function GallerySection() {
  return (
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} py={{ base: 10, md: 20 }}>
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
            templateColumns={{ base: "1fr", md: "repeat(4, minmax(0, 1fr))" }}
            gridAutoRows={{ base: "260px", md: "200px", lg: "240px" }}
            gap={{ base: 4, md: 6 }}
          >
            {HOME_GALLERY_SECTION.items.map((item) => (
              <GridItem
                key={item.id}
                colSpan={{ base: 1, md: item.colSpan }}
                rowSpan={{ base: 1, md: item.rowSpan }}
                position="relative"
                overflow="hidden"
                borderRadius="xl"
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
                      src={item.src}
                      alt={item.alt}
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
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "1.25rem"
                    }}
                  >
                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 15, filter: "blur(4px)" },
                        hover: { opacity: 1, y: 0, filter: "blur(0px)" },
                      }}
                      transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Text color="white" fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
                        {item.alt}
                      </Text>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
