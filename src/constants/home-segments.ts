export interface HomeSegmentItem {
  title: string;
  topics: string[];
}

export interface HomeSegmentsSectionContent {
  heading: string;
  description: string;
  segments: HomeSegmentItem[];
}

export const HOME_SEGMENTS_SECTION: HomeSegmentsSectionContent = {
  heading: "Segmentos presentes",
  description: "E muito mais. Mais de 200 expositores nos principais segmentos da construção e decoração.",
  segments: [
    {
      title: "Construção",
      topics: [
        "Acabamentos",
        "Esquadrias",
        "Energia Solar",
        "Portas e Portões",
        "Revestimentos",
        "Pisos",
        "Tintas",
        "Ferramentas",
      ],
    },
    {
      title: "Interiores",
      topics: [
        "Móveis Planejados",
        "Estofados",
        "Sob Medida",
        "Salas de Jantar",
        "Colchões",
        "Quartos",
        "Cozinhas",
        "Banheiros",
      ],
    },
    {
      title: "Design e Detalhes",
      topics: [
        "Iluminação",
        "Tapetes",
        "Cortinas",
        "Decoração",
        "Aromas",
        "Quadros",
        "Plantas",
        "Acessórios",
      ],
    },
  ],
};
