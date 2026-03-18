import { createFileRoute } from "@tanstack/react-router";
import { Box, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { HeroSection } from "./-sections/hero-section";
import { VideoSection } from "./-sections/video-section";
import { BenefitsSection } from "./-sections/benefits-section";
import { SegmentsSection } from "./-sections/segments-section";
import { GallerySection } from "./-sections/gallery-section";
import { VenueSection } from "./-sections/venue-section";
import { NextEditionsSection } from "./-sections/next-editions-section";
import { PartnershipCtaSection } from "./-sections/partnership-cta-section";
import { FaqSection } from "./-sections/faq-section";
import { VisitPlannerSection } from "./-sections/visit-planner-section";
import { FooterSection } from "./-sections/footer-section";
import { HOME_SECTION_IDS } from "@/constants/navigation-sections";
import { runPendingSectionScroll } from "@/lib/scrollToSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    runPendingSectionScroll();
  }, []);

  return (
    <Stack gap="0" minH="100vh">
      <Box id={HOME_SECTION_IDS.top}>
        <HeroSection />
      </Box>
      <Box id={HOME_SECTION_IDS.video}>
        <VideoSection />
      </Box>
      <Box id={HOME_SECTION_IDS.benefits}>
        <BenefitsSection />
      </Box>
      <Box id={HOME_SECTION_IDS.segments}>
        <SegmentsSection />
      </Box>
      <Box id={HOME_SECTION_IDS.gallery}>
        <GallerySection />
      </Box>
      <Box id={HOME_SECTION_IDS.venue}>
        <VenueSection />
      </Box>
      <Box id={HOME_SECTION_IDS.nextEditions}>
        <NextEditionsSection />
      </Box>
      <Box id={HOME_SECTION_IDS.partnership}>
        <PartnershipCtaSection />
      </Box>
      <Box id={HOME_SECTION_IDS.visitPlanner}>
        <VisitPlannerSection />
      </Box>
      <Box id={HOME_SECTION_IDS.faq}>
        <FaqSection />
      </Box>
      <Box id={HOME_SECTION_IDS.footer}>
        <FooterSection />
      </Box>
    </Stack>
  );
}
