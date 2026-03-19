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
        "Acabamentos",
        "Esquadrias",
        "Energia Solar",
        "Portas e Portões",
        "Revestimentos",
        "Pisos",
        "Tintas",
        "Ferramentas",
      ],
      imageSrc: "/images/segmentos/back-view-family-hugging-admiring-their-home%202.png",
      imageAlt: "Família observando sua nova casa",
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
      imageSrc: "/images/segmentos/freepik__closeup-of-a-modern-moss-green-sofa-with-boucl-fab__86563%202.png",
      imageAlt: "Detalhe de um sofá verde moderno",
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
      imageSrc: "/images/segmentos/jason-briscoe-AQl-J19ocWE-unsplash%202.png",
      imageAlt: "Cozinha contemporânea com excelente design de interiores",
    },
  ],
};
