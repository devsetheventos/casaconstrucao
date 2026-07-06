export interface HomeSegmentItem {
  title: string;
  topics: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface HomeSegmentsSectionContent {
  heading: string;
  description: string;
  segments: HomeSegmentItem[];
}

export const HOME_SEGMENTS_SECTION: HomeSegmentsSectionContent = {
  heading: "Segmentos presentes",
  description: "E muito mais. Mais de 100 expositores nos principais segmentos da construção e decoração.",
  segments: [
    {
      title: "Construção",
      topics: [
        "Energia Solar",
        "Casas Pré-Fabricadas",
      ],
      imageSrc: "/images/segmentos/segmento-construcao.webp",
      imageAlt: "Família observando sua nova casa",
    },
    {
      title: "Interiores",
      topics: [
        "Estofados",
        "Colchões",
        "Sala de Jantar",
        "Quartos",
        "Sob Medida",
        "Móveis Demolição",
      ],
      imageSrc: "/images/segmentos/segmento-interiores.webp",
      imageAlt: "Detalhe de um sofá verde moderno",
    },
    {
      title: "Design e Detalhes",
      topics: [
        "Tapetes",
        "Aromas",
        "Decorações",
        "Cortinas",
        "Utilidades Domésticas",
      ],
      imageSrc: "/images/segmentos/segmento-design.webp",
      imageAlt: "Cozinha contemporânea com excelente design de interiores",
    },
  ],
};
