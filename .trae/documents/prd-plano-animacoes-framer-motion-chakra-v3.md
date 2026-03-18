# Especificação de Animações (Framer Motion + Chakra UI v3)

## Global Styles (tokens de motion)

* **Durações**: fast 140ms (hover/tap), base 240ms (reveal), slow 400ms (modais/drawer).

* **Easing**: `easeOut` (entradas), `easeInOut` (trocas), spring (números/contadores).

* **Distâncias**: reveal Y 16px; reveal X 12px; scale micro 0.99–1.02.

* **Acessibilidade**: respeitar “reduzir movimento” (desabilitar translate/scale; manter fade curto).

## Padrões reutilizáveis (o que você vai aplicar no app)

1. **SectionReveal** (wrapper para cada seção da Home)

* Layout: wrapper externo mantém layout Chakra; anima somente `opacity/transform`.

* Interação: `initial="hidden"` + `whileInView="show"` + `viewport={{ once:true, amount:0.25 }}`.

* Variante: `fadeUp` (título), `stagger` (itens/cards).

1. **MotionCTA** (botões principais/links)

* Hover: `y:-2`, `scale:1.01`, `transition: fast`.

* Tap: `scale:0.98`.

* Focus: manter `focusVisible` Chakra; motion não altera outline.

1. **MotionCard** (cards clicáveis e blocos de conteúdo)

* Hover: elevação sutil (translateY -3) + brilho de borda (via Chakra style + motion transform).

* Entrada: cards entram com stagger (120ms entre itens).

1. **DrawerMotion** (navbar mobile)

* Backdrop: fade-in/out 200ms.

* Painel: slide-left + fade 240–360ms.

1. **MotionListStagger**

* Para grids (benefícios/segmentos/logos): container staggerChildren + itens `fadeUp`.

***

## Página: Home (/)

### Meta Information

* Title: "Casa Construção"

* Description: "Feira Casa Construção — do construir ao morar"

* Open Graph: imagem hero (logo/arte atual) e descrição curta.

### Layout

* Sistema: Chakra (Stack/Box/Flex) com maxWidth 1400px nas seções principais.

* Responsivo: desktop-first; no mobile reduzir distâncias de reveal e evitar stagger longo.

### Page Structure

* Navbar fixa + seções empilhadas (Hero, Vídeo, Benefícios, Segmentos, Galeria, Local, Próximas Edições, Parceria/CTA, Planeje a Visita, FAQ, Footer).

### Seções & Componentes (áreas a aplicar)

1. **Navbar + Drawer** (`src/components/app/navbar.tsx`)

* Drawer.Backdrop: fade.

* Drawer.Content: slide-left.

* Itens do menu: hover “highlight” (Chakra) + micro shift (motion x:2px) opcional.

* Ícones sociais: hover scale 1.05 + fade para cor ativa.

1. **Hero** (`src/routes/-sections/hero-section.tsx`)

* Logo e logo-full: fadeDown em sequência (stagger).

* Subtitle: fade.

* Título: fadeUp + underline aparece (scaleX 0→1).

* CTA principal: MotionCTA (hover/tap).

* Stats (HeroStats): stagger em chips/números.

1. **Countdown** (`src/components/app/hero/hero-countdown.tsx`)

* Manter animação de troca numérica (já existe).

* Complemento: container do countdown com reveal ao entrar no viewport.

1. **Vídeo** (`src/routes/-sections/video-section.tsx`)

* Poster/Play: hover “pressable” (scale 1.01/0.98).

* Carregamento: skeleton → conteúdo com crossfade.

1. **Benefícios** (`src/routes/-sections/benefits-section.tsx`)

* Grid de cards: `MotionListStagger`.

* Card: MotionCard.

1. **Segmentos** (`src/routes/-sections/segments-section.tsx`)

* Lista/grid: stagger.

* Interação: card hover com leve tilt opcional (rotateZ ±0.6°) apenas desktop.

1. **Galeria / Carousel** (`src/routes/-sections/gallery-section.tsx`)

* Imagens: fade-in ao carregar.

* Navegação do carrossel: transição suave (slide) e botão com tap feedback.

1. **Local / Venue** (`src/routes/-sections/venue-section.tsx`)

* Blocos (mapa/info): reveal lateral (fadeRight/fadeUp).

* Links/CTAs (maps/ingresso): MotionCTA.

1. **Próximas Edições** (`src/routes/-sections/next-editions-section.tsx`)

* Cards de edições: stagger + MotionCard.

1. **Parceria / CTA** (`src/routes/-sections/partnership-cta-section.tsx`)

* Logos: stagger leve (evitar animação contínua).

* CTA: MotionCTA.

1. **Planeje a Visita** (`src/routes/-sections/visit-planner-section.tsx`)

* Bloco principal: reveal + microinteração em botões.

1. **FAQ** (`src/routes/-sections/faq-section.tsx`)

* Accordion: animação de expand/colapse (altura + opacity) com duração slow.

* Ícone/chevron: rotate 0→180.

1. **Footer** (`src/routes/-sections/footer-section.tsx`)

* Links: hover underline animado (scaleX).

* Entrada: fadeUp curto (sem excesso).

***

## Página: Design System (/design-system)

### Layout

* Stacked sections com showcases (já existentes); adicionar “Motion Showcase” como bloco interno (sem criar nova rota).

### Seções & Componentes

* **Showcase: Reveal**: exemplo de SectionReveal + stagger.

* **Showcase: Pressables**: MotionCTA / MotionCard.

* **Showcase: Drawer**: mini-demo (opcional via botão que abre Drawer atual).

***

## Checklist de qualidade (para aplicar em todas as áreas)

* Preferir `opacity/transform`.

* Respeitar `prefers-reduced-motion`.

* Evitar animar muitos elementos simultaneamente (limite de 6–10 itens por stagger).

* Padronizar timings (fast/base/slow) para consistência.

