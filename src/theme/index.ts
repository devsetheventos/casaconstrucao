import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  // ─── Global CSS ────────────────────────────────────────────────────────────
  globalCss: {
    "html, body": {
      fontFamily: "'Blauer Nue', sans-serif",
      backgroundColor: "#1E1E1E",
      color: "#EEEEEE",
    },
    "*": {
      boxSizing: "border-box",
    },
  },

  theme: {
    // ─── Breakpoints ─────────────────────────────────────────────────────────
    breakpoints: {
      sm: "480px",
      md: "768px",
      tablet: "992px",
      lg: "1024px",
      desktop: "1100px",
      xl: "1280px",
      wide: "1400px",
      "2xl": "1536px",
    },

    // ─── Core Tokens ─────────────────────────────────────────────────────────
    tokens: {
      colors: {
        // Off-white / text
        offWhite: { value: "#EEEEEE" },
        pureWhite: { value: "#FFFFFF" },
        mutedGray: { value: "#E1E1E1" },
        subtleGray: { value: "#9A9A9A" },

        // Backgrounds
        canvas: { value: "#1E1E1E" },
        surface: { value: "#272727" },
        elevated: { value: "#2C2C2C" },
        overlayBorder: { value: "#3A3A3A" },

        // Light surfaces (cards/containers)
        paper: { value: "#EEEEEE" },
        paperSoft: { value: "#F3F3F3" },
        paperSubtle: { value: "#F7F7F7" },

        // Dark text on light surfaces
        inkMuted: { value: "#5A5A5A" },
        inkSubtle: { value: "#444444" },

        // Green palette (brand primary)
        green: {
          50: { value: "#EBF0EA" },
          100: { value: "#CDD9CB" },
          200: { value: "#AEBFAB" },
          300: { value: "#8FA58B" },
          400: { value: "#7D9279" },
          light: { value: "#687E62" },
          500: { value: "#687E62" },
          dark: { value: "#4A5B45" },
          600: { value: "#4A5B45" },
          700: { value: "#3A4836" },
          800: { value: "#2B3629" },
          900: { value: "#1B231A" },
        },

        // Red palette (CTA / warm accent)
        red: {
          50: { value: "#FCEAEA" },
          100: { value: "#F5C0C0" },
          200: { value: "#ED9696" },
          300: { value: "#E66B6B" },
          400: { value: "#DC5254" },
          accent: { value: "#D24447" },
          500: { value: "#D24447" },
          600: { value: "#A83639" },
          700: { value: "#7F292B" },
          800: { value: "#561B1D" },
          900: { value: "#2D0E0F" },
        },

        // Blue palette (cool accent)
        blue: {
          50: { value: "#EAEBFB" },
          100: { value: "#C0C3F5" },
          200: { value: "#969BEF" },
          300: { value: "#6C73E8" },
          400: { value: "#5560DE" },
          accent: { value: "#4450D2" },
          500: { value: "#4450D2" },
          600: { value: "#3640A8" },
          700: { value: "#29307F" },
          800: { value: "#1C2056" },
          900: { value: "#0F112D" },
        },

        // Feedback
        success: { value: "#1F7A3D" },
        error: { value: "#D92C2C" },
        warning: { value: "#FBAB10" },
        info: { value: "#4450D2" },
      },

      // ─── Typography ────────────────────────────────────────────────────────
      fonts: {
        heading: { value: "'Blauer Nue', sans-serif" },
        accent: { value: "'Libre Baskerville', Georgia, serif" },
        body: { value: "'Blauer Nue', sans-serif" },
        mono: { value: "'Fira Code', 'Courier New', monospace" },
      },

      fontSizes: {
        "2xs": { value: "0.625rem" },
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "3.75rem" },
        "7xl": { value: "4.5rem" },
      },

      fontWeights: {
        light: { value: "300" },
        normal: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
        extrabold: { value: "800" },
      },

      letterSpacings: {
        tighter: { value: "-0.05em" },
        tight: { value: "-0.025em" },
        normal: { value: "0em" },
        wide: { value: "0.025em" },
        wider: { value: "0.05em" },
        widest: { value: "0.1em" },
      },

      lineHeights: {
        none: { value: "1" },
        tight: { value: "1.25" },
        snug: { value: "1.375" },
        normal: { value: "1.5" },
        relaxed: { value: "1.625" },
        loose: { value: "2" },
      },

      radii: {
        none: { value: "0" },
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "12px" },
        xl: { value: "16px" },
        "2xl": { value: "24px" },
        full: { value: "9999px" },
      },

      spacing: {
        px: { value: "1px" },
        0: { value: "0" },
        1: { value: "0.25rem" },
        2: { value: "0.5rem" },
        3: { value: "0.75rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        8: { value: "2rem" },
        10: { value: "2.5rem" },
        12: { value: "3rem" },
        16: { value: "4rem" },
        20: { value: "5rem" },
        24: { value: "6rem" },
        32: { value: "8rem" },
        40: { value: "10rem" },
        48: { value: "12rem" },
        64: { value: "16rem" },
      },
    },

    // ─── Semantic Tokens ─────────────────────────────────────────────────────
    // App é 100% dark — ambos os modos apontam para os mesmos valores
    semanticTokens: {
      colors: {
        // Backgrounds
        "bg.canvas": {
          value: { base: "{colors.canvas}", _dark: "{colors.canvas}" },
        },
        "bg.surface": {
          value: { base: "{colors.surface}", _dark: "{colors.surface}" },
        },
        "bg.elevated": {
          value: { base: "{colors.elevated}", _dark: "{colors.elevated}" },
        },
        "bg.paper": {
          value: { base: "{colors.paper}", _dark: "{colors.paper}" },
        },
        "bg.paperSoft": {
          value: { base: "{colors.paperSoft}", _dark: "{colors.paperSoft}" },
        },
        "bg.paperSubtle": {
          value: { base: "{colors.paperSubtle}", _dark: "{colors.paperSubtle}" },
        },

        // Foreground (text)
        "fg.default": {
          value: { base: "{colors.offWhite}", _dark: "{colors.offWhite}" },
        },
        "fg.muted": {
          value: { base: "{colors.mutedGray}", _dark: "{colors.mutedGray}" },
        },
        "fg.subtle": {
          value: { base: "{colors.subtleGray}", _dark: "{colors.subtleGray}" },
        },
        "fg.onDark": {
          value: { base: "{colors.pureWhite}", _dark: "{colors.pureWhite}" },
        },
        "fg.ink": {
          value: { base: "{colors.canvas}", _dark: "{colors.canvas}" },
        },
        "fg.inkMuted": {
          value: { base: "{colors.inkMuted}", _dark: "{colors.inkMuted}" },
        },
        "fg.inkSubtle": {
          value: { base: "{colors.inkSubtle}", _dark: "{colors.inkSubtle}" },
        },

        // Brand colors
        "brand.green": {
          value: { base: "{colors.green.dark}", _dark: "{colors.green.dark}" },
        },
        "brand.greenLight": {
          value: {
            base: "{colors.green.light}",
            _dark: "{colors.green.light}",
          },
        },
        "brand.red": {
          value: { base: "{colors.red.accent}", _dark: "{colors.red.accent}" },
        },
        "brand.blue": {
          value: {
            base: "{colors.blue.accent}",
            _dark: "{colors.blue.accent}",
          },
        },

        // Borders
        "border.default": {
          value: {
            base: "{colors.overlayBorder}",
            _dark: "{colors.overlayBorder}",
          },
        },
        "border.muted": {
          value: { base: "{colors.elevated}", _dark: "{colors.elevated}" },
        },
        "border.accent": {
          value: {
            base: "{colors.green.light}",
            _dark: "{colors.green.light}",
          },
        },

        // Feedback
        "feedback.success": {
          value: { base: "{colors.success}", _dark: "{colors.success}" },
        },
        "feedback.error": {
          value: { base: "{colors.error}", _dark: "{colors.error}" },
        },
        "feedback.warning": {
          value: { base: "{colors.warning}", _dark: "{colors.warning}" },
        },
        "feedback.info": {
          value: { base: "{colors.info}", _dark: "{colors.info}" },
        },
      },
    },

    // ─── Layer Styles ─────────────────────────────────────────────────────────
    layerStyles: {
      // ── Superfícies ────────────────────────────────────────────────────────
      "surface.card": {
        value: {
          background: "{colors.surface}",
          border: "1px solid {colors.overlayBorder}",
          borderRadius: "{radii.lg}",
        },
      },
      "surface.elevated": {
        value: {
          background: "{colors.elevated}",
          border: "1px solid {colors.green.dark}",
          borderRadius: "{radii.lg}",
        },
      },
      "surface.glass": {
        value: {
          background: "rgba(39, 39, 39, 0.72)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(104, 126, 98, 0.3)",
          borderRadius: "{radii.lg}",
        },
      },

      // ── Seções base ────────────────────────────────────────────────────────
      "section.default": {
        value: { background: "#1E1E1E" },
      },
      "section.surface": {
        value: { background: "#272727" },
      },

      // ── Gradientes radiais achatados (sem noise) ─────────────────────────
      // Centro no canto sup-esq + elipse larga/achatada = impressão de foco diagonal
      "gradient.green": {
        value: {
          backgroundImage:
            "radial-gradient(ellipse 120% 55% at 15% 10%, #687E62 0%, #3D5038 45%, #1E1E1E 75%)",
        },
      },
      "gradient.greenDark": {
        value: {
          backgroundImage:
            "radial-gradient(ellipse 110% 50% at 10% 15%, #4A5B45 0%, #2B3629 45%, #1E1E1E 72%)",
        },
      },
      // Vermelho: centro sup-esq, mais comprimido verticalmente
      "gradient.red": {
        value: {
          backgroundImage:
            "radial-gradient(ellipse 120% 55% at 15% 10%, #8B2325 0%, #4A1517 45%, #1E1E1E 75%)",
        },
      },
      // Azul: centro sup-dir (espelhado) para variar a composição
      "gradient.blue": {
        value: {
          backgroundImage:
            "radial-gradient(ellipse 120% 55% at 85% 10%, #4450D2 0%, #2A3080 45%, #1E1E1E 75%)",
        },
      },
      // Dark/footer: centro inf-esq, luz "subindo" do chão
      "gradient.dark": {
        value: {
          backgroundImage:
            "radial-gradient(ellipse 110% 50% at 10% 90%, #4A5B45 0%, #2B3629 45%, #1E1E1E 75%)",
        },
      },
      "section.cta": {
        value: {
          backgroundImage:
            "radial-gradient(ellipse 120% 55% at 15% 10%, #9B2427 0%, #5C1618 45%, #1E1E1E 75%)",
          borderTop: "1px solid #D24447",
          borderBottom: "1px solid #D24447",
        },
      },

      // ── Gradientes + noise embutido ───────────────────────────────────────
      "gradient.green.noise": {
        value: {
          backgroundImage:
            "url('/noise.svg'), radial-gradient(ellipse 120% 55% at 15% 10%, #687E62 0%, #3D5038 45%, #1E1E1E 75%)",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "256px 256px, cover",
          backgroundBlendMode: "overlay, normal",
        },
      },
      "gradient.greenDark.noise": {
        value: {
          backgroundImage:
            "url('/noise.svg'), radial-gradient(ellipse 110% 50% at 10% 15%, #4A5B45 0%, #2B3629 45%, #1E1E1E 72%)",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "256px 256px, cover",
          backgroundBlendMode: "overlay, normal",
        },
      },
      "gradient.red.noise": {
        value: {
          backgroundImage:
            "url('/noise.svg'), radial-gradient(ellipse 120% 55% at 15% 10%, #8B2325 0%, #4A1517 45%, #1E1E1E 75%)",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "256px 256px, cover",
          backgroundBlendMode: "overlay, normal",
        },
      },
      "gradient.blue.noise": {
        value: {
          backgroundImage:
            "url('/noise.svg'), radial-gradient(ellipse 120% 55% at 85% 10%, #4450D2 0%, #2A3080 45%, #1E1E1E 75%)",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "256px 256px, cover",
          backgroundBlendMode: "overlay, normal",
        },
      },
      "gradient.dark.noise": {
        value: {
          backgroundImage:
            "url('/noise.svg'), radial-gradient(ellipse 110% 50% at 10% 90%, #4A5B45 0%, #2B3629 45%, #1E1E1E 75%)",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "256px 256px, cover",
          backgroundBlendMode: "overlay, normal",
        },
      },
      "section.cta.noise": {
        value: {
          backgroundImage:
            "url('/noise.svg'), radial-gradient(ellipse 120% 55% at 15% 10%, #9B2427 0%, #5C1618 45%, #1E1E1E 75%)",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "256px 256px, cover",
          backgroundBlendMode: "overlay, normal",
          borderTop: "1px solid #D24447",
          borderBottom: "1px solid #D24447",
        },
      },
    },

    // ─── Text Styles ──────────────────────────────────────────────────────────
    textStyles: {
      // Display — hero / splash
      display: {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: { base: "4xl", md: "5xl", lg: "6xl" },
          fontWeight: "700",
          lineHeight: "tight",
          letterSpacing: "tight",
          color: "{colors.offWhite}",
        },
      },

      // Headings
      h1: {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: { base: "3xl", md: "4xl" },
          fontWeight: "700",
          lineHeight: "tight",
          letterSpacing: "tight",
          color: "{colors.offWhite}",
        },
      },
      h2: {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: { base: "2xl", md: "3xl" },
          fontWeight: "600",
          lineHeight: "snug",
          color: "{colors.offWhite}",
        },
      },
      h3: {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: { base: "xl", md: "2xl" },
          fontWeight: "600",
          lineHeight: "snug",
          color: "{colors.offWhite}",
        },
      },
      h4: {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: "xl",
          fontWeight: "600",
          lineHeight: "normal",
          color: "{colors.offWhite}",
        },
      },

      // Body
      "body.lg": {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: "lg",
          fontWeight: "400",
          lineHeight: "relaxed",
          color: "{colors.mutedGray}",
        },
      },
      "body.md": {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: "md",
          fontWeight: "400",
          lineHeight: "normal",
          color: "{colors.mutedGray}",
        },
      },
      "body.sm": {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: "sm",
          fontWeight: "400",
          lineHeight: "normal",
          color: "{colors.subtleGray}",
        },
      },

      // Accent — Libre Baskerville italic (palavras-chave em destaque)
      accent: {
        value: {
          fontFamily: "{fonts.accent}",
          fontSize: "md",
          fontWeight: "400",
          fontStyle: "italic",
          color: "{colors.green.light}",
        },
      },
      "accent.red": {
        value: {
          fontFamily: "{fonts.accent}",
          fontStyle: "italic",
          color: "{colors.red.accent}",
        },
      },
      "accent.blue": {
        value: {
          fontFamily: "{fonts.accent}",
          fontStyle: "italic",
          color: "{colors.blue.accent}",
        },
      },

      // Label — labels, badges, uppercase tags
      label: {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: "sm",
          fontWeight: "600",
          lineHeight: "none",
          letterSpacing: "widest",
          textTransform: "uppercase",
          color: "{colors.mutedGray}",
        },
      },
      "label.accent": {
        value: {
          fontFamily: "{fonts.heading}",
          fontSize: "sm",
          fontWeight: "600",
          lineHeight: "none",
          letterSpacing: "wider",
          textTransform: "uppercase",
          color: "{colors.green.light}",
        },
      },

      // Numeric / timer
      numeric: {
        value: {
          fontFamily: "{fonts.heading}",
          fontWeight: "700",
          fontVariantNumeric: "tabular-nums",
          color: "{colors.offWhite}",
        },
      },
    },
  },
});

export const globalSystem = createSystem(defaultConfig, config);

export default globalSystem;
