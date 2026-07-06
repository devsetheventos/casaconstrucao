import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Box, Grid, GridItem, Heading, Stack, Text, Image, Portal, chakra } from "@chakra-ui/react";
import { HOME_GALLERY_SECTION } from "@/constants/home-gallery";
import type { HomeGalleryItem } from "@/constants/home-gallery";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuMaximize2, LuX } from "react-icons/lu";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function GallerySection() {
  const items = HOME_GALLERY_SECTION.items;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const open = useCallback((i: number) => {
    setDirection(0);
    setIndex(i);
  }, []);

  const close = useCallback(() => setIndex(null), []);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));
    },
    [items.length],
  );

  const next = useCallback(() => paginate(1), [paginate]);
  const prev = useCallback(() => paginate(-1), [paginate]);

  return (
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} py={{ base: 10, md: 20 }}>
      <Box
        w="full"
        maxW="1400px"
        mx="auto"
        borderRadius="3xl"
        border="1px solid"
        borderColor="border.subtle"
        bg="bg.canvas"
        backgroundImage="url('/noise.svg'), linear-gradient(#1E1E1E, #1E1E1E)"
        backgroundRepeat="repeat, no-repeat"
        backgroundSize="256px 256px, cover"
        backgroundBlendMode="overlay, normal"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 10 }}
      >
        <Stack gap={{ base: 6, md: 8 }}>
          <Stack gap="2" align="center">
            <Heading as="h2" textStyle="h1" fontSize={{ base: "4xl", md: "6xl" }}>
              {HOME_GALLERY_SECTION.heading}
            </Heading>
            <Text textStyle="h3" color="fg.subtle" textAlign="center">
              {HOME_GALLERY_SECTION.subtitle}
            </Text>
          </Stack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, minmax(0, 1fr))" }}
            gridAutoRows={{ base: "260px", md: "200px", lg: "240px" }}
            gap={{ base: 4, md: 6 }}
          >
            {HOME_GALLERY_SECTION.items.map((item, i) => (
              <GridItem
                key={item.id}
                colSpan={{ base: 1, md: item.colSpan }}
                rowSpan={{ base: 1, md: item.rowSpan }}
                position="relative"
                overflow="hidden"
                borderRadius="xl"
                cursor="pointer"
                role="button"
                tabIndex={0}
                aria-label={`Ampliar imagem: ${item.alt}`}
                onClick={() => open(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    open(i);
                  }
                }}
                _focusVisible={{
                  outline: "2px solid rgba(255,255,255,0.85)",
                  outlineOffset: "2px",
                }}
              >
                <motion.div
                  initial="initial"
                  whileHover={reduce ? undefined : "hover"}
                  style={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <motion.div
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 },
                    }}
                    transition={{ duration: 0.8, ease: EASE_OUT }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      w="full"
                      h="full"
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                      pointerEvents="none"
                    />
                  </motion.div>

                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      hover: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    style={{ position: "absolute", top: "12px", right: "12px" }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      boxSize="34px"
                      borderRadius="full"
                      bg="rgba(0,0,0,0.45)"
                      color="white"
                      fontSize="16px"
                      backdropFilter="blur(4px)"
                    >
                      <LuMaximize2 />
                    </Box>
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
                      padding: "1.25rem",
                    }}
                  >
                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 15, filter: "blur(4px)" },
                        hover: { opacity: 1, y: 0, filter: "blur(0px)" },
                      }}
                      transition={{ duration: 0.6, delay: 0.05, ease: EASE_OUT }}
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

      <GalleryLightbox
        items={items}
        index={index}
        direction={direction}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </Box>
  );
}

function LightboxButton({
  label,
  onClick,
  reduce,
  children,
}: {
  label: string;
  onClick: (e: MouseEvent) => void;
  reduce: boolean | null;
  children: ReactNode;
}) {
  return (
    <chakra.button
      type="button"
      aria-label={label}
      onClick={onClick}
      pointerEvents="auto"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      boxSize={{ base: "44px", md: "52px" }}
      borderRadius="full"
      bg="rgba(255,255,255,0.1)"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.25)"
      color="white"
      fontSize={{ base: "20px", md: "24px" }}
      backdropFilter="blur(6px)"
      transition="background 0.2s ease, transform 0.15s ease"
      _hover={{ bg: "rgba(255,255,255,0.22)", transform: reduce ? undefined : "scale(1.08)" }}
      _active={{ transform: reduce ? undefined : "scale(0.94)" }}
      _focusVisible={{ outline: "2px solid rgba(255,255,255,0.9)", outlineOffset: "2px" }}
    >
      {children}
    </chakra.button>
  );
}

function GalleryLightbox({
  items,
  index,
  direction,
  onClose,
  onPrev,
  onNext,
}: {
  items: HomeGalleryItem[];
  index: number | null;
  direction: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const reduce = useReducedMotion();
  const isOpen = index !== null;
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusRaf = requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(focusRaf);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const imageVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: reduce || dir === 0 ? 0 : dir > 0 ? 64 : -64,
      scale: reduce ? 1 : 0.96,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.32, ease: EASE_OUT },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: reduce || dir === 0 ? 0 : dir > 0 ? -64 : 64,
      scale: reduce ? 1 : 0.98,
      transition: { duration: reduce ? 0 : 0.2, ease: EASE_OUT },
    }),
  };

  return (
    <Portal>
      <AnimatePresence>
        {index !== null && (
          <motion.div
            key="gallery-lightbox"
            ref={dialogRef}
            tabIndex={-1}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: EASE_OUT }}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização da galeria em tela cheia"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(12,12,12,0.86)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <Box position="absolute" top={{ base: 3, md: 6 }} right={{ base: 3, md: 6 }} zIndex={2}>
              <LightboxButton label="Fechar" reduce={reduce} onClick={(e) => { e.stopPropagation(); onClose(); }}>
                <LuX />
              </LightboxButton>
            </Box>

            <Box position="absolute" insetY={0} left={{ base: 2, md: 6 }} display="flex" alignItems="center" pointerEvents="none" zIndex={2}>
              <LightboxButton label="Imagem anterior" reduce={reduce} onClick={(e) => { e.stopPropagation(); onPrev(); }}>
                <LuChevronLeft />
              </LightboxButton>
            </Box>

            <Box position="absolute" insetY={0} right={{ base: 2, md: 6 }} display="flex" alignItems="center" pointerEvents="none" zIndex={2}>
              <LightboxButton label="Próxima imagem" reduce={reduce} onClick={(e) => { e.stopPropagation(); onNext(); }}>
                <LuChevronRight />
              </LightboxButton>
            </Box>

            <Box
              onClick={(e) => e.stopPropagation()}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={{ base: 3, md: 4 }}
              px={{ base: 14, md: 24 }}
              maxW="1200px"
              maxH="100%"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={items[index].src}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ display: "flex", justifyContent: "center", maxWidth: "100%" }}
                >
                  <Image
                    src={items[index].src}
                    alt={items[index].alt}
                    maxH={{ base: "68vh", md: "80vh" }}
                    maxW="100%"
                    objectFit="contain"
                    borderRadius="lg"
                    boxShadow="0 24px 80px rgba(0,0,0,0.65)"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              <Stack gap="1" align="center" maxW="680px">
                <Text color="rgba(255,255,255,0.92)" fontSize={{ base: "sm", md: "md" }} fontWeight="medium" textAlign="center">
                  {items[index].alt}
                </Text>
                <Text color="rgba(255,255,255,0.55)" fontSize="xs" letterSpacing="wider">
                  {index + 1} / {items.length}
                </Text>
              </Stack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
