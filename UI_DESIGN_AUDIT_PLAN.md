# Plano de Revisão UI/UX — Tema & Design System (Casa Construção)

Este documento organiza uma revisão completa do site com foco em consistência visual, aderência ao tema, melhoria de componentes e refinamentos de experiência.

## Objetivo

- Garantir consistência do tema (tokens, textStyles, layerStyles) em todas as seções.
- Reduzir hardcodes visuais (cores, bordas, sombras, fontes) fora do design system.
- Padronizar padrões de layout (espacamento, containers, bordas, radius, noise/gradientes).
- Melhorar UX (navegação por rolagem, legibilidade, hierarquia, acessibilidade e performance).

## Escopo

- Home (todas as seções em `src/routes/-sections/*`)
- Navbar (`src/components/app/navbar.tsx`)
- Theme (`src/theme/index.ts`, `src/theme/global.css`)
- Design system de referência (`src/routes/design-system.tsx`)
- Constants de conteúdo (`src/constants/*`)

## Princípios (regras de consistência)

- Tokens primeiro: preferir `textStyle`, `layerStyle` e semantic tokens; evitar `#HEX` repetido.
- Um padrão de borda: usar `border.default`/`overlayBorder` como base e variar apenas opacidade quando necessário.
- Um padrão de noise: usar `GradientSection` para gradientes/noise e evitar duplicação de CSS manual.
- Tipografia: manter Blauer Nue como base e Libre Baskerville apenas para acentos (itálico).
- Responsividade: manter escala tipográfica e espaçamentos coerentes (base → md → lg).

## Fase 0 — Bloqueadores técnicos (para “funcionar 100%”)

**Motivo:** lint e build atualmente falham por erros pré-existentes em `src/components/ui/rich-text-editor*` e interfaces vazias em componentes UI.

- Corrigir regras `@typescript-eslint/no-empty-object-type` nos wrappers UI.
- Remover `any` explícito em rich-text-editor (ou justificar com tipos corretos).
- Ajustar integrações/tipos do TipTap (comandos ausentes em `ChainedCommands`) e imports “compositions/*”.
- Garantir `npm run lint` e `npm run build` passando antes do refinamento final de UI (evita “feedback falso”).

## Fase 1 — Auditoria de tokens e padronização de estilo

- Mapear todos os hardcodes de cores/bordas/sombras em seções e componentes.
- Definir “contratos” de estilo para:
  - fundo da página (`bg.canvas`)
  - superfícies (`surface.card`, `surface.elevated`, `surface.glass`)
  - bordas (`border.default` como baseline)
  - textos (`h1/h2/h3`, `body.lg/md/sm`, `label/label.accent`)
- Introduzir (ou reforçar) um wrapper de seção padrão (ex.: `<Section>` reutilizável) para:
  - padding vertical/horizontal
  - max-width quando aplicável
  - variantes full-width (ex.: footer)

## Fase 2 — Revisão por seção (home)

Para cada seção:
- Validar: grid/responsividade, hierarquia tipográfica, bordas/radius, consistência de cores, uso de `GradientSection`, uso de noise.
- Padronizar: CTA (tamanho, radius, fonte, hover), badges/labels, espaçamentos.

Checklist por seção:
- Hero: checar coerência de tamanhos e uso de `textStyle` (há fontes e cores hardcoded).
- Video: validar acessibilidade do “poster botão” + foco/teclado + contraste.
- Benefits: padronizar border/bgs com tokens; revisar contraste dos cards.
- Segments: harmonizar “cards claros” com borda padrão e noise do fundo claro.
- Gallery: garantir “masonry” coerente (altura, col/row span) e placeholders com borda padrão.
- Venue: garantir legibilidade e coerência do mapa/tabela; uniformizar bordas com `overlayBorder`.
- Next Editions: alinhar com Venue (mesma família de layout), sem drift de cores/espacamentos.
- Partnership CTA: centralização/escala tipográfica, gradiente consistente e logos proporcionais.
- Visit Planner: checar coerência com CTAs (dois botões), hierarquia e “bloco interno”.
- FAQ: padronizar accordion (borda/ícone/typography) e comportamento (default aberto).
- Footer: padrão full-width; usar `GradientSection` (sem layerStyle direto); garantir links e navegação consistentes.

## Fase 3 — Navegação e rolagem por seção (UX)

- Centralizar a “fonte da verdade” dos IDs de seções (ex.: `HOME_SECTION_IDS`) e links da navbar.
- Garantir que:
  - na home: clique faz scroll suave com offset da navbar fixa
  - fora da home: clique navega para `/` e executa scroll pendente após mount
- Validar comportamento em mobile (drawer fecha antes de rolar), e manter foco acessível.
- Melhorias opcionais:
  - indicar seção ativa (highlight no menu) conforme scroll
  - reduzir “jump” em carregamento com iframes (lazy + placeholder)

## Fase 4 — Conteúdo e constants (governança)

- Garantir que todo conteúdo textual/imagens dinâmicas estão em `src/constants/*`.
- Padronizar tipagem dos constants (interfaces pequenas, nomes consistentes).
- Revisar URLs externas (Instagram/WhatsApp/Maps) e consolidar em constants.
- Revisar nomenclatura: `home-*.ts` por domínio (ex.: `home-sections/*` futuramente).

## Fase 5 — Acessibilidade, contraste e microinterações

- Navegação por teclado (foco visível em “cards clicáveis” e botões).
- `aria-label` em ícones (já existe na navbar; replicar onde necessário).
- Contraste mínimo em texto cinza sobre fundos escuros.
- Hover/focus consistente (cor + background + border) conforme design system.

## Fase 6 — Performance e qualidade

- Garantir que:
  - iframes (maps) são `loading="lazy"` e com container fixo (já aplicado).
  - vídeo só carrega ao iniciar (lazy real).
  - imagens possuem tamanhos coerentes e `alt`.
- Rodar smoke tests manuais:
  - mobile vs desktop
  - navegação por sections
  - comportamento do drawer
  - regressões visuais (bordas/noise/gradientes)

## Observações (inconsistências encontradas agora)

- Uso misto de `layerStyle` vs hardcodes `#HEX` em várias seções (ex.: bordas `#3A3A3A` repetidas).
- Algumas seções usam max-width e outras precisam ser full-width (footer é exceção; deve ser tratado como variante, não “drift”).
- Footer tinha gradiente aplicado via `layerStyle`; o padrão do projeto privilegia `GradientSection` para controlar rotação/origem/scale.
- Links internos em alguns pontos usam `window.location.assign` (ideal: roteamento do TanStack Router).
- Lint/build falham por problemas já existentes em rich-text-editor e wrappers UI, bloqueando “100% verde”.

## Entregáveis por fase

- Fase 0: lint/build ok.
- Fase 1: padronização de tokens + wrapper(s) de seção.
- Fase 2: seções revisadas e consistentes (comparação com design-system).
- Fase 3: navegação/scroll estável e previsível.
- Fase 4: conteúdo em constants, com tipagem consistente.
- Fase 5: acessibilidade e microinterações revisadas.
- Fase 6: checklist final + smoke test aprovado.
