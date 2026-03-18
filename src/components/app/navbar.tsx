/**
 * NavbarMobile — barra de navegação para telas < md
 * Ícone + hamburger no topo. Abre Drawer com links e CTA.
 */
import { useState } from "react";
import {
  Box,
  Button,
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
            alt="Casa Construção"
            h="28px"
            w="auto"
            opacity={0.9}
          />
        </Link>

        {/* Lado Direito: Social + Menu */}
        <HStack gap="2">
          {/* Social Links */}
          <IconButton
            onClick={() => openExternalLink("https://instagram.com")}
            aria-label="Instagram"
            variant="plain"
            size="sm"
            color="#EEEEEE"
            _hover={{ bg: "rgba(255,255,255,0.06)", color: "#FFFFFF" }}
            w="10"
            h="10"
          >
            <FaInstagram size={20} />
          </IconButton>

          <IconButton
            onClick={() => openExternalLink("https://whatsapp.com")}
            aria-label="WhatsApp"
            variant="plain"
            size="sm"
            color="#EEEEEE"
            _hover={{ bg: "rgba(255,255,255,0.06)", color: "#FFFFFF" }}
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
              color="#EEEEEE"
              cursor="pointer"
              bg="transparent"
              border="none"
              transition="background 0.15s"
              onClick={() => setOpen(!open)}
              variant="plain"
              size="sm"
              _hover={{ bg: "rgba(255,255,255,0.06)", color: "#FFFFFF" }}
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
            bg="#1E1E1E"
            borderRight="1px solid #2C2C2C"
            maxW="260px"
          >
            {/* Header */}
            <Drawer.Header
              px="5"
              pt="5"
              pb="4"
              borderBottom="1px solid #2C2C2C"
            >
              <HStack justify="space-between" align="center" w={"full"}>
                <Link to="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/svg/icon-light.svg"
                    alt="Casa Construção"
                    h="40px"
                    w="auto"
                    opacity={0.9}
                  />
                </Link>
                <Drawer.CloseTrigger asChild pos="initial">
                  <CloseButton
                    size="sm"
                    color="#9A9A9A"
                    _hover={{ color: "#EEEEEE", bg: "#272727" }}
                  />
                </Drawer.CloseTrigger>
              </HStack>
            </Drawer.Header>

            {/* Body — links */}
            <Drawer.Body px="5" py="6">
              <Stack gap="1" as="ul" listStyleType="none" m="0" p="0">
                {NAVBAR_SECTION_LINKS.map((link) => (
                  <Box as="li" key={link.sectionId}>
                    <Box
                      onClick={() => handleSectionNavigation(link.sectionId)}
                      py="3"
                      px="3"
                      borderRadius="lg"
                      fontFamily="'Blauer Nue', sans-serif"
                      fontSize="sm"
                      fontWeight="500"
                      color="#9A9A9A"
                      transition="all 0.15s"
                      _hover={{ color: "#EEEEEE", bg: "#272727" }}
                      cursor="pointer"
                    >
                      {link.label}
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Separator borderColor="#2C2C2C" my="6" />

              {/* CTA */}
              <Button
                w="full"
                bg="#4A5B45"
                color="#EEEEEE"
                fontFamily="'Blauer Nue', sans-serif"
                fontWeight="600"
                fontSize="sm"
                letterSpacing="wide"
                borderRadius="full"
                _hover={{ bg: "#687E62" }}
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
