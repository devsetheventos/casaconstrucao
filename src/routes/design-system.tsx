import { createFileRoute } from "@tanstack/react-router";
import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GradientSection } from "@/components/ui/gradient-section";

export const Route = createFileRoute("/design-system")({
  component: DesignSystem,
});

// ─── Wrapper genérico (sem gradiente) ────────────────────────────────────────
function Section({
  children,
  layerStyle,
  bg,
}: {
  children: React.ReactNode;
  layerStyle?: string;
  bg?: string;
}) {
  return (
    <Box
      layerStyle={layerStyle}
      bg={bg}
      py={{ base: "16", md: "24" }}
      px={{ base: "6", md: "12", lg: "20" }}
    >
      {children}
    </Box>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text textStyle="label.accent" mb="3">
      {children}
    </Text>
  );
}

// ─── Componente principal ────────────────────────────────────────────────────
function DesignSystem() {
  return (
    <Stack gap="0" bg="#1E1E1E" minH="100vh">
      {/* ── 1. HERO — GradientSection rotacionado ── */}
      <GradientSection
        color="green"
        rotateDeg={-180}
        originX="0%"
        originY="50%"
        ellipseW={100}
        ellipseH={120}
        noise
        py={{ base: "16", md: "24" }}
        px={{ base: "6", md: "12", lg: "20" }}
      >
        <Stack maxW="800px" gap="6">
          <SectionLabel>Casa Construção • Edição 2025</SectionLabel>

          <Heading textStyle="display" as="h1">
            Do construir{" "}
            <Text
              as="span"
              fontFamily="'Libre Baskerville', Georgia, serif"
              fontStyle="italic"
              color="#687E62"
            >
              ao morar
            </Text>
          </Heading>

          <Text textStyle="body.lg" maxW="540px">
            Tudo o que você precisa ver, comparar e decidir{" "}
            <Text
              as="span"
              fontFamily="'Libre Baskerville', Georgia, serif"
              fontStyle="italic"
              color="#D24447"
            >
              em um só lugar.
            </Text>
          </Text>

          <HStack gap="4" flexWrap="wrap" mt="2">
            <Button
              bg="#4A5B45"
              color="#EEEEEE"
              size="lg"
              px="8"
              borderRadius="md"
              _hover={{ bg: "#687E62" }}
              fontFamily="'Blauer Nue', sans-serif"
              fontWeight="600"
            >
              Garanta seu ingresso
            </Button>
            <Button
              variant="outline"
              borderColor="#687E62"
              color="#EEEEEE"
              size="lg"
              px="8"
              borderRadius="md"
              _hover={{ bg: "rgba(104,126,98,0.15)" }}
              fontFamily="'Blauer Nue', sans-serif"
            >
              Saiba mais
            </Button>
          </HStack>
        </Stack>
      </GradientSection>

      {/* ── 2. STATS BAR ── */}
      <Box
        bg="#272727"
        borderY="1px solid #3A3A3A"
        py="6"
        px={{ base: "6", md: "20" }}
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} gap="8">
          {[
            { number: "200+", label: "Expositores" },
            { number: "15k", label: "Visitantes" },
            { number: "4", label: "Dias de evento" },
            { number: "10+", label: "Anos de história" },
          ].map((s) => (
            <Stack key={s.label} gap="1" align="center">
              <Text
                textStyle="numeric"
                fontSize="3xl"
                fontWeight="700"
                color="#EEEEEE"
              >
                {s.number}
              </Text>
              <Text textStyle="label" color="#9A9A9A">
                {s.label}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>

      {/* ── 3. TIPOGRAFIA — showcase ── */}
      <Section bg="#1E1E1E">
        <SectionLabel>Sistema Tipográfico</SectionLabel>
        <Stack gap="8" maxW="720px">
          <Stack gap="4">
            <Text textStyle="display" as="p">
              Display — Blauer Nue 700
            </Text>
            <Text textStyle="h1" as="p">
              H1 — Blauer Nue 700
            </Text>
            <Text textStyle="h2" as="p">
              H2 — Blauer Nue 600
            </Text>
            <Text textStyle="h3" as="p">
              H3 — Blauer Nue 600
            </Text>
            <Text textStyle="h4" as="p">
              H4 — Blauer Nue 600
            </Text>
          </Stack>

          <Separator borderColor="#3A3A3A" />

          <Stack gap="3">
            <Text textStyle="body.lg">
              Body LG — corpo principal do texto, leitura longa
            </Text>
            <Text textStyle="body.md">
              Body MD — texto padrão de parágrafos e descrições gerais
            </Text>
            <Text textStyle="body.sm">
              Body SM — notas, metadados, secundários
            </Text>
          </Stack>

          <Separator borderColor="#3A3A3A" />

          <Stack gap="3">
            <Text
              fontFamily="'Libre Baskerville', Georgia, serif"
              fontStyle="italic"
              fontSize="xl"
              color="#687E62"
            >
              Accent Verde — Libre Baskerville Italic
            </Text>
            <Text
              fontFamily="'Libre Baskerville', Georgia, serif"
              fontStyle="italic"
              fontSize="xl"
              color="#D24447"
            >
              Accent Vermelho — Libre Baskerville Italic
            </Text>
            <Text
              fontFamily="'Libre Baskerville', Georgia, serif"
              fontStyle="italic"
              fontSize="xl"
              color="#4450D2"
            >
              Accent Azul — Libre Baskerville Italic
            </Text>
          </Stack>

          <HStack gap="3" flexWrap="wrap">
            <Text textStyle="label">LABEL PADRÃO</Text>
            <Text textStyle="label.accent">LABEL ACENTO</Text>
          </HStack>
        </Stack>
      </Section>

      {/* ── 4. PALETA DE CORES ── */}
      <Section bg="#272727">
        <SectionLabel>Paleta de Cores</SectionLabel>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 7 }} gap="4">
          {[
            { color: "#EEEEEE", label: "Off-white", text: "#1E1E1E" },
            {
              color: "#1E1E1E",
              label: "Canvas",
              text: "#EEEEEE",
              border: true,
            },
            {
              color: "#272727",
              label: "Surface",
              text: "#EEEEEE",
              border: true,
            },
            {
              color: "#2C2C2C",
              label: "Elevated",
              text: "#EEEEEE",
              border: true,
            },
            { color: "#3A3A3A", label: "Borda", text: "#EEEEEE" },
            { color: "#687E62", label: "Verde Claro", text: "#EEEEEE" },
            { color: "#4A5B45", label: "Verde Escuro", text: "#EEEEEE" },
            { color: "#D24447", label: "Vermelho", text: "#EEEEEE" },
            { color: "#4450D2", label: "Azul", text: "#EEEEEE" },
          ].map((c) => (
            <Stack key={c.label} gap="2" align="center">
              <Box
                w="full"
                h="60px"
                bg={c.color}
                borderRadius="lg"
                border={c.border ? "1px solid #3A3A3A" : "none"}
              />
              <Text textStyle="body.sm" textAlign="center" color="#E1E1E1">
                {c.label}
              </Text>
              <Text
                textStyle="body.sm"
                textAlign="center"
                color="#9A9A9A"
                fontFamily="monospace"
                fontSize="xs"
              >
                {c.color}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Section>

      {/* ── 5. GRADIENTES — showcase ── */}
      <Section bg="#1E1E1E">
        <SectionLabel>Gradientes Radiais</SectionLabel>
        <Stack gap="10">
          <Stack gap="3">
            <Text textStyle="label" color="#9A9A9A">
              Sem noise
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6">
              {[
                {
                  style: "gradient.green",
                  label: "gradient.green",
                  desc: "Seções principais",
                },
                {
                  style: "gradient.red",
                  label: "gradient.red",
                  desc: "CTA quente",
                },
                {
                  style: "gradient.blue",
                  label: "gradient.blue",
                  desc: "Seções informativas",
                },
                {
                  style: "gradient.dark",
                  label: "gradient.dark",
                  desc: "Footer",
                },
              ].map((g) => (
                <Stack key={g.label} gap="3">
                  <Box
                    layerStyle={g.style}
                    h="140px"
                    borderRadius="xl"
                    border="1px solid #3A3A3A"
                  />
                  <Stack gap="1">
                    <Text color="#EEEEEE" fontFamily="monospace" fontSize="sm">
                      {g.label}
                    </Text>
                    <Text textStyle="body.sm">{g.desc}</Text>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>

          <Stack gap="3">
            <Text textStyle="label" color="#9A9A9A">
              Com noise overlay
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6">
              {[
                {
                  style: "gradient.green.noise",
                  label: "gradient.green.noise",
                },
                { style: "gradient.red.noise", label: "gradient.red.noise" },
                { style: "gradient.blue.noise", label: "gradient.blue.noise" },
                { style: "gradient.dark.noise", label: "gradient.dark.noise" },
              ].map((g) => (
                <Stack key={g.label} gap="3">
                  <Box
                    layerStyle={g.style}
                    h="140px"
                    borderRadius="xl"
                    border="1px solid #3A3A3A"
                  />
                  <Text color="#EEEEEE" fontFamily="monospace" fontSize="sm">
                    {g.label}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Section>

      {/* ── 6. SUPERFÍCIES & CARDS — GradientSection com rotate ── */}
      <GradientSection
        color="greenDark"
        rotateDeg={15}
        originX="80%"
        originY="5%"
        ellipseW={110}
        ellipseH={50}
        noise
        py={{ base: "16", md: "24" }}
        px={{ base: "6", md: "12", lg: "20" }}
      >
        <SectionLabel>Superfícies & Layer Styles</SectionLabel>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          <Stack layerStyle="surface.card" p="6" gap="4">
            <Badge
              bg="#4A5B45"
              color="#EEEEEE"
              px="3"
              py="1"
              borderRadius="full"
              fontSize="xs"
              fontFamily="'Blauer Nue', sans-serif"
              letterSpacing="wider"
              textTransform="uppercase"
              alignSelf="flex-start"
            >
              surface.card
            </Badge>
            <Text textStyle="h4">Construção</Text>
            <Text textStyle="body.sm">
              Acabamentos, esquadrias, tintas, pisos e muito mais.
            </Text>
            <Button
              size="sm"
              variant="outline"
              borderColor="#687E62"
              color="#EEEEEE"
              _hover={{ bg: "rgba(104,126,98,0.2)" }}
              alignSelf="flex-start"
              fontFamily="'Blauer Nue', sans-serif"
            >
              Ver segmento →
            </Button>
          </Stack>

          <Stack layerStyle="surface.elevated" p="6" gap="4">
            <Badge
              bg="#D24447"
              color="#EEEEEE"
              px="3"
              py="1"
              borderRadius="full"
              fontSize="xs"
              fontFamily="'Blauer Nue', sans-serif"
              letterSpacing="wider"
              textTransform="uppercase"
              alignSelf="flex-start"
            >
              surface.elevated
            </Badge>
            <Text textStyle="h4">Interiores</Text>
            <Text textStyle="body.sm">
              Móveis planejados, iluminação, decoração e projetos.
            </Text>
            <Button
              size="sm"
              bg="#D24447"
              color="#EEEEEE"
              _hover={{ bg: "#A83639" }}
              alignSelf="flex-start"
              fontFamily="'Blauer Nue', sans-serif"
            >
              Ver segmento →
            </Button>
          </Stack>

          <Stack layerStyle="surface.glass" p="6" gap="4">
            <Badge
              bg="rgba(68,80,210,0.4)"
              color="#EEEEEE"
              px="3"
              py="1"
              borderRadius="full"
              fontSize="xs"
              fontFamily="'Blauer Nue', sans-serif"
              letterSpacing="wider"
              textTransform="uppercase"
              alignSelf="flex-start"
            >
              surface.glass
            </Badge>
            <Text textStyle="h4">Design & Detalhes</Text>
            <Text textStyle="body.sm">
              Arquitetura, paisagismo, automação e tecnologia.
            </Text>
            <Button
              size="sm"
              bg="#4450D2"
              color="#EEEEEE"
              _hover={{ bg: "#3640A8" }}
              alignSelf="flex-start"
              fontFamily="'Blauer Nue', sans-serif"
            >
              Ver segmento →
            </Button>
          </Stack>
        </SimpleGrid>
      </GradientSection>

      {/* ── 6b. ROTATION DEMO — mesmo gradiente, ângulos diferentes ── */}
      <Section bg="#1E1E1E">
        <SectionLabel>GradientSection — Controle de Rotação</SectionLabel>
        <Stack gap="10">
          <Stack gap="3">
            <Text textStyle="label" color="#9A9A9A">
              Mesmo gradiente, ângulos diferentes
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap="4">
              {([-30, -18, 0, 18] as const).map((deg) => (
                <Stack key={deg} gap="3">
                  <GradientSection
                    color="green"
                    rotateDeg={deg}
                    originX="20%"
                    originY="5%"
                    ellipseW={120}
                    ellipseH={50}
                    noise
                    h="160px"
                    borderRadius="xl"
                    border="1px solid #3A3A3A"
                  />
                  <Text color="#EEEEEE" fontFamily="monospace" fontSize="sm">
                    rotateDeg={`{${deg}}`}°
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>

          <Stack gap="3">
            <Text textStyle="label" color="#9A9A9A">
              Variações de cor a -20°
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap="4">
              {(["green", "red", "blue"] as const).map((c) => (
                <Stack key={c} gap="3">
                  <GradientSection
                    color={c}
                    rotateDeg={-20}
                    originX="20%"
                    originY="5%"
                    ellipseW={130}
                    ellipseH={55}
                    noise
                    h="160px"
                    borderRadius="xl"
                    border="1px solid #3A3A3A"
                  />
                  <Text color="#EEEEEE" fontFamily="monospace" fontSize="sm">
                    color="{c}" rotateDeg={`{-20}`}°
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Section>

      {/* ── 7. BOTÕES — showcase ── */}
      <Section bg="#272727">
        <SectionLabel>Botões & Estados</SectionLabel>
        <Stack gap="8">
          <Stack gap="3">
            <Text textStyle="label" color="#9A9A9A">
              Variantes principais
            </Text>
            <HStack gap="4" flexWrap="wrap">
              <Button
                bg="#4A5B45"
                color="#EEEEEE"
                _hover={{ bg: "#687E62" }}
                fontFamily="'Blauer Nue', sans-serif"
              >
                Verde principal
              </Button>
              <Button
                bg="#D24447"
                color="#EEEEEE"
                _hover={{ bg: "#A83639" }}
                fontFamily="'Blauer Nue', sans-serif"
              >
                Vermelho CTA
              </Button>
              <Button
                bg="#4450D2"
                color="#EEEEEE"
                _hover={{ bg: "#3640A8" }}
                fontFamily="'Blauer Nue', sans-serif"
              >
                Azul info
              </Button>
              <Button
                variant="outline"
                borderColor="#3A3A3A"
                color="#EEEEEE"
                _hover={{ bg: "#2C2C2C" }}
                fontFamily="'Blauer Nue', sans-serif"
              >
                Outline
              </Button>
              <Button
                variant="ghost"
                color="#9A9A9A"
                _hover={{ color: "#EEEEEE", bg: "#2C2C2C" }}
                fontFamily="'Blauer Nue', sans-serif"
              >
                Ghost
              </Button>
            </HStack>
          </Stack>

          <Stack gap="3">
            <Text textStyle="label" color="#9A9A9A">
              Tamanhos
            </Text>
            <HStack gap="4" align="center" flexWrap="wrap">
              {(["sm", "md", "lg", "xl"] as const).map((size) => (
                <Button
                  key={size}
                  size={size}
                  bg="#4A5B45"
                  color="#EEEEEE"
                  _hover={{ bg: "#687E62" }}
                  fontFamily="'Blauer Nue', sans-serif"
                >
                  {size.toUpperCase()}
                </Button>
              ))}
            </HStack>
          </Stack>

          <Stack gap="3">
            <Text textStyle="label" color="#9A9A9A">
              Badges
            </Text>
            <HStack gap="3" flexWrap="wrap">
              <Badge
                bg="#4A5B45"
                color="#EEEEEE"
                px="3"
                py="1"
                borderRadius="full"
                fontFamily="'Blauer Nue', sans-serif"
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Construção
              </Badge>
              <Badge
                bg="#D24447"
                color="#EEEEEE"
                px="3"
                py="1"
                borderRadius="full"
                fontFamily="'Blauer Nue', sans-serif"
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Destaque
              </Badge>
              <Badge
                bg="#4450D2"
                color="#EEEEEE"
                px="3"
                py="1"
                borderRadius="full"
                fontFamily="'Blauer Nue', sans-serif"
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Novo
              </Badge>
              <Badge
                bg="transparent"
                border="1px solid #687E62"
                color="#687E62"
                px="3"
                py="1"
                borderRadius="full"
                fontFamily="'Blauer Nue', sans-serif"
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Outline
              </Badge>
            </HStack>
          </Stack>
        </Stack>
      </Section>

      {/* ── 8. GRID LAYOUT ── */}
      <Section bg="#1E1E1E">
        <SectionLabel>Grid de Conteúdo</SectionLabel>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          gap="6"
        >
          <GridItem>
            <Stack layerStyle="surface.card" p="8" gap="5" h="full">
              <Text textStyle="label.accent">Destaque principal</Text>
              <Heading textStyle="h2" as="h2">
                Quatro dias de{" "}
                <Text
                  as="span"
                  fontFamily="'Libre Baskerville', Georgia, serif"
                  fontStyle="italic"
                  color="#687E62"
                >
                  oportunidades reais
                </Text>
              </Heading>
              <Text textStyle="body.md">
                Compare fornecedores, negocie presencialmente, tire dúvidas com
                quem produz e compre com as melhores condições disponíveis no
                mercado.
              </Text>
              <HStack gap="4" mt="2">
                <Button
                  bg="#4A5B45"
                  color="#EEEEEE"
                  _hover={{ bg: "#687E62" }}
                  fontFamily="'Blauer Nue', sans-serif"
                >
                  Mais informações
                </Button>
                <Button
                  variant="ghost"
                  color="#687E62"
                  _hover={{ bg: "rgba(104,126,98,0.1)" }}
                  fontFamily="'Blauer Nue', sans-serif"
                >
                  Ver edições →
                </Button>
              </HStack>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack gap="4" h="full">
              {[
                { icon: "🔍", text: "Comparar fornecedores no mesmo de lugar" },
                { icon: "🤝", text: "Negociar presencialmente" },
                { icon: "📦", text: "Ver matérias ao vivo" },
                { icon: "💬", text: "Tirar dúvidas com quem produz" },
                { icon: "🛒", text: "Comprar com melhores condições" },
              ].map((item) => (
                <HStack
                  key={item.text}
                  layerStyle="surface.card"
                  p="4"
                  gap="4"
                  borderRadius="lg"
                >
                  <Text fontSize="xl">{item.icon}</Text>
                  <Text textStyle="body.sm" color="#E1E1E1">
                    {item.text}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Section>

      {/* ── 9. CTA — GradientSection vermelho ── */}
      <GradientSection
        color="red"
        rotateDeg={-12}
        originX="15%"
        originY="5%"
        ellipseW={140}
        ellipseH={60}
        noise
        borderTop="1px solid #D24447"
        borderBottom="1px solid #D24447"
        py={{ base: "16", md: "24" }}
        px={{ base: "6", md: "12", lg: "20" }}
      >
        <Stack align="center" textAlign="center" gap="6" maxW="640px" mx="auto">
          <SectionLabel>Não perca esta oportunidade</SectionLabel>
          <Heading textStyle="h1" as="h2">
            Sua marca pode{" "}
            <Text
              as="span"
              fontFamily="'Libre Baskerville', Georgia, serif"
              fontStyle="italic"
              color="#D24447"
            >
              estar aqui
            </Text>
          </Heading>
          <Text textStyle="body.lg" color="#E1E1E1">
            Seja um patrocinador e alcance milhares de profissionais do setor de
            construção civil e decoração em um único evento.
          </Text>
          <HStack gap="4" justify="center" flexWrap="wrap">
            <Button
              bg="#D24447"
              color="#EEEEEE"
              size="lg"
              px="10"
              _hover={{ bg: "#A83639" }}
              fontFamily="'Blauer Nue', sans-serif"
              fontWeight="600"
            >
              Seja um patrocinador
            </Button>
            <Button
              variant="outline"
              borderColor="#D24447"
              color="#D24447"
              size="lg"
              px="8"
              _hover={{ bg: "rgba(210,68,71,0.1)" }}
              fontFamily="'Blauer Nue', sans-serif"
            >
              Falar com a equipe
            </Button>
          </HStack>
        </Stack>
      </GradientSection>

      {/* ── 10. FOOTER — GradientSection dark ── */}
      <GradientSection
        color="dark"
        rotateDeg={10}
        originX="15%"
        originY="85%"
        ellipseW={120}
        ellipseH={50}
        noise
        py={{ base: "16", md: "24" }}
        px={{ base: "6", md: "12", lg: "20" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap="6"
        >
          <Stack gap="1">
            <Text textStyle="h3" color="#EEEEEE">
              CASA CONSTRUÇÃO
            </Text>
            <Text textStyle="body.sm">
              9 a 12 de Julho • Parque Vila Germânica, Blumenau
            </Text>
          </Stack>
          <HStack gap="6">
            {["Instagram", "Facebook", "YouTube"].map((rede) => (
              <Text
                key={rede}
                textStyle="label"
                color="#9A9A9A"
                cursor="pointer"
                _hover={{ color: "#687E62" }}
                transition="color 0.2s"
              >
                {rede}
              </Text>
            ))}
          </HStack>
        </Stack>

        <Separator borderColor="#3A3A3A" my="8" />

        <HStack justify="space-between" flexWrap="wrap" gap="4">
          <Text textStyle="body.sm">
            © 2025 Casa Construção. Todos os direitos reservados.
          </Text>
          <HStack gap="4">
            <Text
              textStyle="body.sm"
              cursor="pointer"
              _hover={{ color: "#EEEEEE" }}
            >
              Política de Privacidade
            </Text>
            <Text
              textStyle="body.sm"
              cursor="pointer"
              _hover={{ color: "#EEEEEE" }}
            >
              Termos de Uso
            </Text>
          </HStack>
        </HStack>
      </GradientSection>
    </Stack>
  );
}
