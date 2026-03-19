import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HOME_VISIT_PLANNER_SECTION } from "@/constants/home-visit-planner";
import { GradientSection } from "@/components/ui/gradient-section";
import { openExternalLink } from "@/lib/openExternalLink";

function PlannerInfoBlock({
  iconSrc,
  label,
  title,
  details,
}: {
  iconSrc: string;
  label: string;
  title: string;
  details: string;
}) {
  return (
    <HStack align="start" gap={{ base: 3, md: 4 }}>
      <Center
        boxSize={{ base: "52px", md: "64px" }}
        borderRadius="xl"
        bg="rgba(0,0,0,0.25)"
        border="1px solid rgba(255,255,255,0.12)"
        flexShrink={0}
      >
        <Image src={iconSrc} alt="" boxSize={{ base: "28px", md: "34px" }} />
      </Center>
      <Stack gap="0.5">
        <Text
          textStyle="h3"
          color="rgba(238,238,238,0.72)"
          fontSize={{ base: "xl", md: "3xl" }}
        >
          {label}
        </Text>
        <Text
          textStyle="h2"
          color="#EEEEEE"
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight="1.05"
        >
          {title}
        </Text>
        <Text
          textStyle="body.md"
          color="rgba(238,238,238,0.84)"
          fontSize={{ base: "sm", md: "lg" }}
        >
          {details}
        </Text>
      </Stack>
    </HStack>
  );
}

export function VisitPlannerSection() {
  const content = HOME_VISIT_PLANNER_SECTION;

  return (
    <Box
      as="section"
      layerStyle="section.default"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 20 }}
    >
      <GradientSection
        color="red"
        customColor="#A1272E"
        rotateDeg={-14}
        originX="12%"
        originY="14%"
        ellipseW={132}
        ellipseH={100}
        bgScale={1.55}
        noise
        borderRadius="3xl"
        border="1px solid rgba(238,238,238,0.22)"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 10 }}
        maxW="1400px"
        mx="auto"
      >
        <Stack
          w="full"
          maxW="1400px"
          mx="auto"
          gap={{ base: 6, md: 8 }}
          align="center"
          textAlign="center"
        >
          <Stack gap="2">
            <Text
              textStyle="h1"
              fontSize={{ base: "4xl", md: "7xl" }}
              color="#EEEEEE"
            >
              {content.heading}
            </Text>
            <Text
              textStyle="h3"
              color="#E1E1E1"
              fontSize={{ base: "xl", md: "3xl" }}
            >
              {content.subheading}
            </Text>
            <Text
              textStyle="body.md"
              color="#E1E1E1"
              fontSize={{ base: "md", md: "2xl" }}
            >
              {content.helperText}
            </Text>
          </Stack>

          <Stack
            w="full"
            maxW="980px"
            border="1px solid rgba(238,238,238,0.35)"
            borderRadius="2xl"
            px={{ base: 4, md: 6 }}
            py={{ base: 5, md: 6 }}
            gap={{ base: 5, md: 6 }}
            textAlign="left"
            bg="rgba(0,0,0,0.14)"
          >
            <PlannerInfoBlock
              iconSrc="/svg/next-expedition/calendar.svg"
              label={content.dateInfo.label}
              title={content.dateInfo.title}
              details={content.dateInfo.details}
            />
            <PlannerInfoBlock
              iconSrc="/svg/next-expedition/expoville.svg"
              label={content.locationInfo.label}
              title={content.locationInfo.title}
              details={content.locationInfo.details}
            />

            <Stack
              direction={{ base: "column", md: "row" }}
              gap="4"
              justify="center"
              align="center"
              w="full"
            >
              <Button
                size="lg"
                w={{ base: "full", md: "fit-content" }}
                px={{ base: 8, md: 12 }}
                borderRadius="full"
                bg="#EEEEEE"
                color="#1E1E1E"
                _hover={{ bg: "#E1E1E1" }}
                fontSize={{ base: "md", md: "lg" }}
                onClick={() => openExternalLink(content.mapUrl)}
              >
                {content.mapLabel}
              </Button>
              <Button
                size="lg"
                w={{ base: "full", md: "fit-content" }}
                px={{ base: 8, md: 12 }}
                borderRadius="full"
                bg="#8B1F25"
                color="#EEEEEE"
                border="1px solid rgba(238,238,238,0.2)"
                _hover={{ bg: "#74181D" }}
                fontSize={{ base: "md", md: "lg" }}
                onClick={() => openExternalLink(content.calendarUrl)}
              >
                {content.calendarLabel}
              </Button>
            </Stack>
          </Stack>

          <Stack gap="0.5">
            <Text
              textStyle="h3"
              color="#EEEEEE"
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              {content.cashbackTitle}
            </Text>
            <Text
              textStyle="body.md"
              color="#E1E1E1"
              fontSize={{ base: "md", md: "xl" }}
            >
              {content.cashbackNote}
            </Text>
          </Stack>

          <Stack gap="1">
            <Text
              textStyle="h1"
              color="#EEEEEE"
              fontSize={{ base: "3xl", md: "7xl" }}
            >
              {content.bottomHeading}
            </Text>
            <Text
              textStyle="h3"
              color="#E1E1E1"
              fontSize={{ base: "xl", md: "3xl" }}
              maxW="900px"
            >
              {content.bottomDescription}
            </Text>
          </Stack>
        </Stack>
      </GradientSection>
    </Box>
  );
}
