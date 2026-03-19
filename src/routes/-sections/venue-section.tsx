import { Badge, Box, Button, Heading, HStack, Stack, Table, Text } from "@chakra-ui/react";
import { LuClock3 } from "react-icons/lu";
import { HOME_VENUE_SECTION } from "@/constants/home-venue";
import { openExternalLink } from "@/lib/openExternalLink";

function MapEmbed({ src }: { src: string }) {
  return (
    <Box
      h={{ base: "220px", md: "290px" }}
      borderRadius="2xl"
      border="1px solid"
      borderColor="border.default"
      overflow="hidden"
    >
      <iframe
        src={src}
        title="Mapa Parque Vila Germânica"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </Box>
  );
}

export function VenueSection() {
  return (
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} py={{ base: 10, md: 20 }}>
      <Box
        w="full"
        maxW="1400px"
        mx="auto"
        bg="bg.paper"
        backgroundImage="url('/noise.svg'), linear-gradient(var(--chakra-colors-bg-paper), var(--chakra-colors-bg-paper))"
        backgroundRepeat="repeat, no-repeat"
        backgroundSize="256px 256px, cover"
        backgroundBlendMode="overlay, normal"
        borderRadius="3xl"
        border="1px solid"
        borderColor="border.default"
        px={{ base: 4, md: 6, lg: 8 }}
        py={{ base: 6, md: 8 }}
      >
        <Stack gap="6">
          <Text textStyle="label.accent" textAlign="center">
            {HOME_VENUE_SECTION.sectionLabel}
          </Text>

          <HStack align="stretch" gap={{ base: 4, md: 6 }} flexDirection={{ base: "column", md: "row" }}>
            <Box flex={{ md: 1.1 }}>
              <MapEmbed src={HOME_VENUE_SECTION.mapEmbedUrl} />
            </Box>

            <Stack flex={{ md: 1.6 }} justify="center" gap="3">
                <Text textStyle="h3" color="fg.inkMuted">
                {HOME_VENUE_SECTION.cityEdition}
                <Text as="span" fontFamily="'Libre Baskerville', Georgia, serif" fontStyle="italic">
                  {" "}- {HOME_VENUE_SECTION.dateRange}
                </Text>
              </Text>

              <Heading
                as="h2"
                textStyle="h1"
                color="fg.ink"
                fontSize={{ base: "2xl", md: "4xl" }}
                lineHeight={{ base: "1.2", md: "1.05" }}
              >
                {HOME_VENUE_SECTION.venueName}
              </Heading>
              <Text textStyle="h2" color="fg.ink" fontSize={{ base: "xl", md: "3xl" }}>
                {HOME_VENUE_SECTION.sector}
              </Text>
              <Text textStyle="body.lg" color="fg.inkMuted" fontSize={{ base: "sm", md: "lg" }}>
                {HOME_VENUE_SECTION.address}
              </Text>

              <Button
                w={{ base: "full", md: "fit-content" }}
                size="lg"
                px={{ base: 8, md: 12 }}
                borderRadius="full"
                bg="brand.green"
                color="fg.default"
                fontFamily="'Blauer Nue', sans-serif"
                fontSize={{ base: "md", md: "lg" }}
                _hover={{ bg: "brand.greenLight" }}
                onClick={() => openExternalLink(HOME_VENUE_SECTION.mapUrl)}
              >
                {HOME_VENUE_SECTION.mapLabel}
              </Button>
            </Stack>
          </HStack>

          <Stack
            border="1px solid"
            borderColor="border.default"
            borderRadius="2xl"
            px={{ base: 4, md: 6 }}
            py={{ base: 5, md: 6 }}
            gap="4"
            bg="rgba(255,255,255,0.42)"
            backdropFilter="blur(4px)"
          >
            <HStack justify="space-between" align="center">
              <Text textStyle="h1" color="fg.ink" fontSize={{ base: "2xl", md: "4xl" }}>
                {HOME_VENUE_SECTION.scheduleTitle}
              </Text>
              <Badge
                bg="fg.ink"
                color="bg.paper"
                px="3"
                py="1"
                borderRadius="full"
                fontSize="xs"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                <LuClock3 />
                Funcionamento
              </Badge>
            </HStack>

            <Table.Root
              variant="line"
              size={{ base: "sm", md: "lg" }}
              bg="bg.paper"
              color="fg.ink"
              border="1px solid"
              borderColor="border.default"
              borderRadius="xl"
              overflow="hidden"
              css={{
                "& thead th": {
                  borderColor: "var(--chakra-colors-border-default)",
                  bg: "transparent",
                },
                "& tbody td": {
                  borderColor: "rgba(58,58,58,0.2)",
                },
              }}
            >
              <Table.Body>
                {HOME_VENUE_SECTION.schedule.map((item) => (
                  <Table.Row key={item.day} bg="transparent" _hover={{ bg: "rgba(30,30,30,0.06)" }}>
                    <Table.Cell color="fg.inkSubtle" fontFamily="'Blauer Nue', sans-serif" fontSize={{ base: "md", md: "xl" }}>
                      {item.day}
                    </Table.Cell>
                    <Table.Cell
                      textAlign="right"
                      color="fg.ink"
                      fontFamily="'Libre Baskerville', Georgia, serif"
                      fontStyle="italic"
                      fontSize={{ base: "md", md: "xl" }}
                    >
                      {item.hours}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
