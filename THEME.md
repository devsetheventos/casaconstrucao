# Casa Construção — Design System & Tema

> Referência visual: `public/Detalhes.png` (guia de estilo) + `public/Site.jpg` (site real).

## Estética

Dark, terroso, premium. Fundos quase pretos com camadas de verde florestal, com destaques em vermelho e azul. Gradientes radiais achatados criam sensação de foco de luz por seção.

---

## Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| **Branco off-white** | `#EEEEEE` | Texto principal |
| **Branco puro** | `#FFFFFF` | Exceção (texto sobre cor) |
| **Cinza Claro** | `#E1E1E1` | Texto secundário |
| **Preto** | `#272727` | Fundo primário da página |
| **Cinza Escuro** | `#1E1E1E` | Fundo canvas / mais fundo |
| **Elevado** | `#2C2C2C` | Cards, camadas elevadas |
| **Borda** | `#3A3A3A` | Bordas e divisores |
| **Verde Claro** | `#687E62` | Destaque secundário, gradiente |
| **Verde Escuro** | `#4A5B45` | Botões, headers, brand |
| **Vermelho** | `#D24447` | CTA, destaques quentes |
| **Azul** | `#4450D2` | Destaques frios, links |
| **Sucesso** | `#1F7A3D` | Feedback positivo |
| **Erro** | `#D92C2C` | Feedback de erro |
| **Aviso** | `#FBAB10` | Feedback de atenção |

---

## Gradientes

Radiais achatados (ellipse 80% 50%) — simulam foco de luz vindo de um canto:

| Token | Definição | Uso |
|---|---|---|
| `gradient.green` | radial de `#687E62` → `#1E1E1E` (origem 30% 40%) | Seções de segmentos / bg principal |
| `gradient.red` | radial de `#D24447` → `#1E1E1E` (origem 30% 40%) | Seções CTA quentes |
| `gradient.blue` | radial de `#4450D2` → `#1E1E1E` (origem 70% 40%) | Seções informativas |
| `gradient.dark` | radial de `#4A5B45` → `#1E1E1E` (origem 50% 100%) | Footer / encerramento |

---

## Tipografia

| Fonte | Uso | Estilo |
|---|---|---|
| **Blauer Nue** | Títulos e textos gerais | Regular / Bold |
| **Libre Baskerville** | Palavras-chave de destaque | *Italic* |
| **Montserrat** | Corpo de texto, labels | Regular / SemiBold |

### Hierarquia (textStyles)

| Token | Fonte | Tamanho | Peso |
|---|---|---|---|
| `display` | Blauer Nue | 5xl–6xl | 700 |
| `h1` | Blauer Nue | 4xl | 700 |
| `h2` | Blauer Nue | 3xl | 600 |
| `h3` | Blauer Nue | 2xl | 600 |
| `body.lg` | Montserrat | lg | 400 |
| `body.md` | Montserrat | md | 400 |
| `body.sm` | Montserrat | sm | 400 |
| `accent` | Libre Baskerville | md | 400 italic |
| `label` | Montserrat | sm | 600 uppercase tracking-wide |

---

## Semantic Tokens (Chakra UI v3)

Tokens semânticos resolvidos (app 100% dark mode):

| Token | Valor |
|---|---|
| `bg.canvas` | `#1E1E1E` |
| `bg.surface` | `#272727` |
| `bg.elevated` | `#2C2C2C` |
| `fg.default` | `#EEEEEE` |
| `fg.muted` | `#E1E1E1` |
| `fg.subtle` | `#9A9A9A` |
| `brand.green` | `#4A5B45` |
| `brand.greenLight` | `#687E62` |
| `brand.red` | `#D24447` |
| `brand.blue` | `#4450D2` |
| `border.default` | `#3A3A3A` |
| `border.muted` | `#2C2C2C` |

---

## Layer Styles (Superfícies)

| Token | Descrição |
|---|---|
| `surface.card` | bg `#272727`, borda `1px solid #3A3A3A`, radius `12px` |
| `surface.elevated` | bg `#2C2C2C`, borda `1px solid #4A5B45` |
| `gradient.green` | radial verde → escuro |
| `gradient.red` | radial vermelho → escuro |
| `gradient.blue` | radial azul → escuro |
| `gradient.dark` | radial verde-escuro → escuro (footer) |

---

## Implementação Chakra UI v3

Arquivo: `src/theme/index.ts`

- `tokens` → paleta de cores base
- `semanticTokens` → mapeamento semântico dark-only
- `layerStyles` → gradientes e superfícies reutilizáveis
- `textStyles` → tipografia padronizada
- `globalCss` → fundo padrão `#1E1E1E`, cor `#EEEEEE`, imports de fontes
