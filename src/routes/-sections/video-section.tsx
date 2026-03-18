import { Box, Center, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import { useState, type KeyboardEvent } from "react";
import { LuPlay } from "react-icons/lu";
import { DefaultVideoLayout, defaultLayoutIcons } from "@vidstack/react/player/layouts/default";
import { GradientSection } from "@/components/ui/gradient-section";

import "vidstack/player/styles/base.css";
import "vidstack/player/styles/default/theme.css";
import "vidstack/player/styles/default/layouts/video.css";

const VIDEO_ID = "J6latp_m9qY";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const POSTER_MAXRES = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const POSTER_HQ = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export function VideoSection() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [posterSrc, setPosterSrc] = useState(POSTER_MAXRES);

  const startPlayer = () => {
    setIsPlayerReady(true);
  };

  const handlePosterError = () => {
    setPosterSrc((current) => (current === POSTER_HQ ? current : POSTER_HQ));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isPlayerReady) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      startPlayer();
    }
  };

  return (
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} pb="20">
      <GradientSection
        color="greenDark"
        rotateDeg={14}
        originX="82%"
        originY="6%"
        ellipseW={110}
        ellipseH={52}
        noise
        borderRadius="3xl"
        border="1px solid rgba(255, 255, 255, 0.06)"
        py={{ base: 12, md: 20 }}
        px={{ base: 4, md: 10 }}
      >
        <Stack w="full" maxW="1400px" mx="auto" gap={{ base: 6, md: 8 }}>
          <Stack gap="3" w={'full'} justify={'center'} align={'center'}>
            <Text textStyle="label.accent">Vídeo oficial</Text>
            <Heading as="h2" textStyle="h2">
              Veja como será a experiência na Casa Construção
            </Heading>
            <Text textStyle="body.md">
              Um preview rápido do evento, com o clima, os espaços e os destaques da edição.
            </Text>
          </Stack>

          <Box layerStyle="surface.card" p={{ base: 2, md: 3 }} borderRadius="2xl">
            <Box
              role={!isPlayerReady ? "button" : undefined}
              aria-label={!isPlayerReady ? "Iniciar reprodução do vídeo" : undefined}
              tabIndex={!isPlayerReady ? 0 : -1}
              onKeyDown={handleKeyDown}
              maxW="1400px"
              w="full"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 30px 60px rgba(0,0,0,0.35)"
              bg="black"
              position="relative"
              aspectRatio={16 / 9}
              cursor={!isPlayerReady ? "pointer" : "default"}
              onClick={!isPlayerReady ? startPlayer : undefined}
              transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={
                !isPlayerReady
                  ? {
                      transform: "scale(1.01)",
                      boxShadow: "0 40px 80px rgba(0,0,0,0.42)",
                    }
                  : {}
              }
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "brand.greenLight",
                outlineOffset: "3px",
              }}
            >
              {!isPlayerReady ? (
                <>
                  <Image
                    src={posterSrc}
                    alt="Capa do vídeo Casa Construção"
                    onError={handlePosterError}
                    w="full"
                    h="full"
                    objectFit="cover"
                    opacity="0.72"
                  />
                  <Center
                    w="full"
                    h="full"
                    position="absolute"
                    inset="0"
                    bg="linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)"
                    userSelect="none"
                    zIndex="5"
                  >
                    <Stack align="center" gap="5">
                      <Center
                        boxSize={{ base: "64px", md: "88px" }}
                        borderRadius="full"
                        border="2px solid #EEEEEE"
                        bg="rgba(39,39,39,0.55)"
                        backdropFilter="blur(8px)"
                        zIndex="2"
                        transition="all 0.3s"
                        _hover={{
                          transform: "scale(1.08)",
                          bg: "rgba(210, 68, 71, 0.82)",
                        }}
                      >
                        <Icon as={LuPlay} color="#EEEEEE" boxSize={{ base: "28px", md: "42px" }} ml="1" />
                      </Center>
                      <Text textStyle="label" color="#E1E1E1">
                        Clique para assistir
                      </Text>
                    </Stack>
                  </Center>
                </>
              ) : (
                <MediaPlayer
                  title="Vídeo Casa Construção"
                  src={VIDEO_URL}
                  autoPlay
                  playsInline
                  load="eager"
                  style={{ width: "100%", height: "100%" }}
                >
                  <MediaProvider />
                  <Poster
                    src={posterSrc}
                    alt="Vídeo Casa Construção"
                    className="vds-poster"
                    onError={handlePosterError}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <DefaultVideoLayout icons={defaultLayoutIcons} />
                </MediaPlayer>
              )}
            </Box>
          </Box>
        </Stack>
      </GradientSection>
    </Box>
  );
}
