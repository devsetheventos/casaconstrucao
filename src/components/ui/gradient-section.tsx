/**
 * GradientSection
 *
 * Separa o fundo gradiente do conteúdo, permitindo rotacionar e posicionar o
 * gradiente de forma independente — algo impossível direto no CSS radial-gradient.
 *
 * A camada de fundo é um <div> absolutamente posicionado com `overflow: hidden`
 * no container, então qualquer `transform` aplicado nela não afeta o conteúdo.
 *
 * Uso básico:
 *   <GradientSection color="green" rotate={-20} originX="20%" originY="5%">
 *     <MinhaSeção />
 *   </GradientSection>
 */

import { Box, type BoxProps } from "@chakra-ui/react";

// ─── Paleta base dos gradientes ───────────────────────────────────────────────
const GRADIENT_PALETTES = {
  green: {
    mid: "#687E62",
    deep: "#3D5038",
    base: "#1E1E1E",
  },
  greenDark: {
    mid: "#4A5B45",
    deep: "#2B3629",
    base: "#1E1E1E",
  },
  red: {
    mid: "#8B2325",
    deep: "#4A1517",
    base: "#1E1E1E",
  },
  blue: {
    mid: "#4450D2",
    deep: "#2A3080",
    base: "#1E1E1E",
  },
  dark: {
    mid: "#4A5B45",
    deep: "#2B3629",
    base: "#1E1E1E",
  },
} as const;

export type GradientColor = keyof typeof GRADIENT_PALETTES;

// ─── Props ────────────────────────────────────────────────────────────────────
// Omit 'rotate' do BoxProps para evitar conflito de tipos com o Chakra UI
export interface GradientSectionProps extends Omit<BoxProps, "rotate"> {
  /** Cor/tema do gradiente */
  color?: GradientColor;
  /** Rotação em graus da camada de fundo (default: 0) */
  rotateDeg?: number;
  /** Posição X do ponto focal do gradiente (default: "20%") */
  originX?: string;
  /** Posição Y do ponto focal do gradiente (default: "10%") */
  originY?: string;
  /** Escala extra aplicada à camada de fundo para cobrir o container após rotação */
  bgScale?: number;
  /** Largura (raio horizontal) da elipse em % (default: 120) */
  ellipseW?: number;
  /** Altura (raio vertical) da elipse em % (default: 55) */
  ellipseH?: number;
  /** Adiciona noise grain por cima do gradiente */
  noise?: boolean;
  /** Cor hex customizada — sobrescreve `color` */
  customColor?: string;
  children?: React.ReactNode;
}

// ─── Componente ───────────────────────────────────────────────────────────────
export function GradientSection({
  color = "green",
  rotateDeg = 0,
  originX = "20%",
  originY = "10%",
  bgScale = 1.4,
  ellipseW = 120,
  ellipseH = 55,
  noise = true,
  customColor,
  children,
  ...rest
}: GradientSectionProps) {
  const palette = GRADIENT_PALETTES[color];
  const mid = customColor ?? palette.mid;
  const deep = palette.deep;
  const base = palette.base;

  const gradient = `radial-gradient(ellipse ${ellipseW}% ${ellipseH}% at ${originX} ${originY}, ${mid} 0%, ${deep} 40%, ${base} 72%)`;

  const noiseLayer = noise ? `url('/noise.svg'), ${gradient}` : gradient;
  const bgRepeat = noise ? "repeat, no-repeat" : "no-repeat";
  const bgSize = noise ? "256px 256px, cover" : "cover";
  const bgBlend = noise ? "overlay, normal" : undefined;

  return (
    <Box position="relative" overflow="hidden" {...rest}>
      {/* ── Camada de fundo — rotacionável/escalável independentemente ── */}
      <Box
        position="absolute"
        inset={`-${(bgScale - 1) * 300}%`}
        backgroundImage={noiseLayer}
        backgroundRepeat={bgRepeat}
        backgroundSize={bgSize}
        backgroundBlendMode={bgBlend}
        style={{ transform: `rotate(${rotateDeg}deg) scale(${bgScale})` }}
        transformOrigin="center center"
        aria-hidden
      />

      {/* ── Conteúdo — fica sobre o fundo sem sofrer a rotação ── */}
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
