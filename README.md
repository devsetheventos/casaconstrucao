# Casa Construção

Landing page oficial da Casa Construção, construída com React, TypeScript, Vite e Chakra UI v3.

O projeto apresenta as seções da feira, conteúdo institucional, informações de visita e experiência visual premium com animações em Framer Motion.

## Stack

- React 19
- TypeScript 5
- Vite 8
- Chakra UI v3
- TanStack Router
- Framer Motion

## Requisitos

- Node.js 20+ recomendado
- npm 10+ recomendado

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Aplicação disponível em `http://localhost:5173`.

## Scripts

- `npm run dev`: inicia ambiente local com HMR
- `npm run build`: valida TypeScript e gera build de produção
- `npm run lint`: executa ESLint no projeto
- `npm run preview`: sobe preview local do build
- `npm run typegen`: gera tipagem de tema do Chakra UI

## Estrutura principal

```text
src/
  components/
    app/                 # componentes de layout e seções da home
    ui/                  # biblioteca de componentes base
  constants/             # conteúdo da home (textos, datas, links)
  motion/                # sistema de animações reutilizável (Framer Motion + Chakra)
  routes/
    -sections/           # seções da página inicial
    design-system.tsx    # vitrine do design system
  theme/                 # tokens, estilos globais e tema Chakra
```

## Animações

O projeto usa um sistema reutilizável em `src/motion` com:

- `MotionBox` para integrar Chakra UI e Framer Motion
- presets de entrada (`fadeUp`, `fadeLeft`, `fadeRight`, `stagger`)
- `SectionReveal` para animações por scroll com respeito a redução de movimento

## SEO e metadados

O `index.html` foi configurado com:

- metatags completas para SEO
- Open Graph e Twitter Cards
- dados estruturados JSON-LD (`Organization` e `Event`)
- canonical e ícones de aplicação

## Design system

Referências e documentação visual do projeto:

- `THEME.md`
- `UI_DESIGN_AUDIT_PLAN.md`
- rota interna: `/design-system`

## Build de produção

```bash
npm run build
npm run preview
```
