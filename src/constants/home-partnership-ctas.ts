export interface HomePartnershipCta {
  id: string;
  variant: "red" | "blue";
  tag: string;
  titleStart: string;
  titleAccent: string;
  description: string;
  highlights: string[];
  supportLabels: string[];
  logos?: string[];
  buttonLabel: string;
  contactUrl: string;
}

export const HOME_PARTNERSHIP_CTAS: HomePartnershipCta[] = [
  {
    id: "expositor",
    variant: "red",
    tag: "Espaços limitados",
    titleStart: "Sua marca pode",
    titleAccent: "estar aqui",
    description:
      "A Casa & Construção reúne um grande público interessado em casa, obra e decoração. Convide seu negócio para estar no evento e gerar novos negócios como expositor.",
    highlights: [
      "Público qualificado de toda a região",
      "Exposição de produtos e lançamentos",
      "Geração de leads e fechamento no evento",
    ],
    supportLabels: ["Alta visibilidade", "Networking", "Conversão imediata"],
    buttonLabel: "Seja um expositor",
    contactUrl: "https://wa.link/m0bmf7",
  },
  {
    id: "patrocinador",
    variant: "blue",
    tag: "Fomento cultural",
    titleStart: "Seja um patrocinador através da",
    titleAccent: "Lei de Incentivo",
    description:
      "A Casa & Construção conecta público, empresas e oportunidades de negócio. Sua empresa pode participar como patrocinadora por meio da Lei de Incentivo à Cultura.",
    highlights: [
      "Fortaleça sua marca com impacto regional",
      "Associe sua empresa a inovação e cultura",
      "Ative presença em todos os canais do evento",
    ],
    supportLabels: ["Lei de Incentivo", "Projetos aprovados", "Contrapartida de marca"],
    logos: [
      "/svg/.text-white/leiincentivo.svg",
      "/svg/.text-white/ministericultura.svg",
      "/svg/.text-white/governobrasil.svg",
    ],
    buttonLabel: "Seja um patrocinador",
    contactUrl: "https://wa.link/m1yrrq",
  },
];
