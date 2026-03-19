import { Box, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuArrowUp } from "react-icons/lu";
import { HOME_FOOTER_SECTION } from "@/constants/home-footer";
import { openExternalLink } from "@/lib/openExternalLink";
import { GradientSection } from "@/components/ui/gradient-section";

export function FooterSection() {
  const content = HOME_FOOTER_SECTION;

  return (
    <Box as="footer" w="full" layerStyle="section.default" pt={{ base: 6, md: 10 }} pb="0">
      <Box
        w="full"
        borderTopRadius={{ base: "2xl", md: "3xl" }}
        overflow="hidden"
        border="1px solid"
        borderColor="border.default"
        borderBottom="none"
      >
        <GradientSection
          color="dark"
          rotateDeg={8}
          originX="12%"
          originY="84%"
          ellipseW={122}
          ellipseH={120}
          bgScale={1.48}
          noise
          gap={{ base: 5, md: 6 }}
          px={{ base: 4, md: 8, lg: 12 }}
          py={{ base: 5, md: 12 }}
          borderBottom="1px solid rgba(255,255,255,0.1)"
        >
          <HStack justify="space-between" align="center" w="full">
            <HStack gap={3}>
              <Image
                src={"/svg/icon-light.svg"}
                alt={content.logoAlt}
                h={{ base: "32px", md: "60px" }}
                w="auto"
              />
              <Image
                src={content.logoSrc}
                alt={content.logoAlt}
                h={{ base: "32px", md: "56px" }}
                w="auto"
                display={{ base: "none", md: "block" }}
              />
            </HStack>

            <HStack gap="2">
              <IconButton
                aria-label="Instagram"
                variant="plain"
                color="fg.default"
                _hover={{ bg: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}
                onClick={() => openExternalLink(content.instagramUrl)}
              >
                <FaInstagram size={20} />
              </IconButton>
              <IconButton
                aria-label="WhatsApp"
                variant="plain"
                color="fg.default"
                _hover={{ bg: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}
                onClick={() => openExternalLink(content.whatsappUrl)}
              >
                <FaWhatsapp size={20} />
              </IconButton>
            </HStack>
          </HStack>
        </GradientSection>

        <HStack
          justify="space-between"
          align="center"
          px={{ base: 4, md: 8, lg: 12 }}
          py={{ base: 3, md: 4 }}
          bg="transparent"
          gap="4"
        >
          <Text
            textStyle="body.md"
            color="fg.subtle"
            fontSize={{ base: "xs", md: "lg" }}
            flex="1"
          >
            {content.copyrightText}
          </Text>
          <IconButton
            aria-label="Voltar ao topo"
            variant="plain"
            color="fg.default"
            _hover={{ bg: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <LuArrowUp size={24} />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
}
