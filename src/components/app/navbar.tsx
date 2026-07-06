/**
 * NavbarMobile — barra de navegação para telas < md
 * Ícone + hamburger no topo. Abre Drawer com links e CTA.
 */
import { useState } from "react";
import {
  Box,
  Button,
  chakra,
  CloseButton,
  Drawer,
  HStack,
  IconButton,
  Image,
  Portal,
  Separator,
  Stack,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { openExternalLink } from "@/lib/openExternalLink";
import { LuMenu } from "react-icons/lu";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NAVBAR_SECTION_LINKS, HOME_SECTION_IDS } from "@/constants/navigation-sections";
import { scrollToSection, setPendingSectionScroll } from "@/lib/scrollToSection";

// ─── Navbar Mobile ─────────────────────────────────────────────────────────────
export function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    setPendingSectionScroll(sectionId);
    navigate({ to: "/" });
  };

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="start"
      size="xs"
    >
      {/* ── Barra fixa no topo ── */}
      <HStack
        as="nav"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        height="56px"
        px="4"
        justify="space-between"
        align="center"
        bg="rgba(30, 30, 30, 0.9)"
        backdropFilter="blur(14px)"
        style={{ WebkitBackdropFilter: "blur(14px)" }}
        borderBottom="1px solid rgba(255,255,255,0.06)"
        display="flex"
      >
        {/* Ícone à esquerda */}
        <Link to="/" onClick={() => setOpen(false)}>
          <Image
            src="/svg/icon-light.svg"
            alt="Casa & Construção"
            h="28px"
            w="auto"
            opacity={0.9}
          />
        </Link>

        {/* Lado Direito: Social + Menu */}
        <HStack gap="2">
          {/* Social Links */}
          <IconButton
            onClick={() => openExternalLink("https://www.instagram.com/feiracasa.construcao")}
            aria-label="Instagram"
            variant="plain"
            size="sm"
            color="fg.default"
            _hover={{ bg: "rgba(255,255,255,0.06)", color: "fg.onDark" }}
            w="10"
            h="10"
          >
            <FaInstagram size={20} />
          </IconButton>

          <IconButton
            onClick={() =>
              openExternalLink(
                "https://api.whatsapp.com/send?phone=554791322878&text=Ol%C3%A1!%20Tenho%20interesse%20em%20participar%20da%20Casa%20%26%20Constru%C3%A7%C3%A3o%20como%20expositor.%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F",
              )
            }
            aria-label="WhatsApp"
            variant="plain"
            size="sm"
            color="fg.default"
            _hover={{ bg: "rgba(255,255,255,0.06)", color: "fg.onDark" }}
            w="10"
            h="10"
          >
            <FaWhatsapp size={20} />
          </IconButton>

          <Separator
            orientation="vertical"
            h="5"
            borderColor="rgba(255,255,255,0.15)"
            mx="1"
          />

          {/* Hamburger trigger */}
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="Abrir menu"
              color="fg.default"
              cursor="pointer"
              bg="transparent"
              border="none"
              transition="background 0.15s"
              onClick={() => setOpen(!open)}
              variant="plain"
              size="sm"
              _hover={{ bg: "rgba(255,255,255,0.06)", color: "fg.onDark" }}
              w="10"
              h="10"
            >
              <LuMenu size={24} />
            </IconButton>
          </Drawer.Trigger>
        </HStack>
      </HStack>

      {/* ── Drawer lateral ── */}
      <Portal>
        <Drawer.Backdrop bg="rgba(0,0,0,0.6)" backdropFilter="blur(4px)" />
        <Drawer.Positioner>
          <Drawer.Content
            bg="bg.canvas"
            borderRight="1px solid #2C2C2C"
            maxW="260px"
          >
            {/* Header */}
            <Drawer.Header
              px="5"
              pt="5"
              pb="4"
              borderBottom="1px solid"
              borderColor="border.muted"
            >
              <HStack justify="space-between" align="center" w={"full"}>
                <Link to="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/svg/icon-light.svg"
                    alt="Casa & Construção"
                    h="40px"
                    w="auto"
                    opacity={0.9}
                  />
                </Link>
                <Drawer.CloseTrigger asChild pos="initial">
                  <CloseButton
                    size="sm"
                    color="fg.subtle"
                    _hover={{ color: "fg.default", bg: "bg.surface" }}
                  />
                </Drawer.CloseTrigger>
              </HStack>
            </Drawer.Header>

            {/* Body — links */}
            <Drawer.Body px="5" py="6">
              <Stack gap="1" as="ul" listStyleType="none" m="0" p="0">
                {NAVBAR_SECTION_LINKS.map((link) => (
                  <Box as="li" key={link.sectionId}>
                    <chakra.button
                      type="button"
                      onClick={() => handleSectionNavigation(link.sectionId)}
                      display="block"
                      w="full"
                      textAlign="left"
                      py="3"
                      px="3"
                      borderRadius="lg"
                      fontFamily="'Blauer Nue', sans-serif"
                      fontSize="sm"
                      fontWeight="500"
                      color="fg.subtle"
                      transition="all 0.15s"
                      _hover={{ color: "fg.default", bg: "bg.surface" }}
                      _focusVisible={{ outline: "2px solid", outlineColor: "#EEEEEE", outlineOffset: "2px" }}
                      cursor="pointer"
                    >
                      {link.label}
                    </chakra.button>
                  </Box>
                ))}
              </Stack>

              <Separator borderColor="border.muted" my="6" />

              {/* CTA */}
              <Button
                w="full"
                bg="brand.green"
                color="fg.default"
                fontFamily="'Blauer Nue', sans-serif"
                fontWeight="600"
                fontSize="sm"
                letterSpacing="wide"
                borderRadius="full"
                _hover={{ bg: "brand.greenLight" }}
                transition="background 0.2s"
                onClick={() => handleSectionNavigation(HOME_SECTION_IDS.visitPlanner)}
              >
                Comprar Ingresso
              </Button>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
