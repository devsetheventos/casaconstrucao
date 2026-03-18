export type BenefitIconKey = "search" | "handshake" | "layers" | "help" | "cart";

export interface HomeBenefitItem {
  icon: BenefitIconKey;
  title: string;
  description: string;
}

export interface HomeBenefitsSectionContent {
  headingStart: string;
  headingAccent: string;
  subtitle: string;
  footerStart: string;
  footerAccent: string;
  items: HomeBenefitItem[];
}

export const HOME_BENEFITS_SECTION: HomeBenefitsSectionContent = {
  headingStart: "Tudo o que você precisa ver, comparar e decidir em",
  headingAccent: "um só lugar",
  subtitle: "Vantagens exclusivas do evento",
  footerStart: "Quatro dias de",
  footerAccent: "oportunidades reais",
  items: [
    {
      icon: "search",
      title: "Comparar fornecedores no mesmo dia",
      description: "Economize semanas de pesquisa visitando diversos fornecedores em poucas horas",
    },
    {
      icon: "handshake",
      title: "Negociar presencialmente",
      description: "Condições especiais e descontos exclusivos para quem fecha negócio no evento",
    },
    {
      icon: "layers",
      title: "Ver materiais ao vivo",
      description: "Toque, sinta a textura, veja as cores reais. Nada substitui a experiência física",
    },
    {
      icon: "help",
      title: "Tirar dúvidas direto com quem produz",
      description: "Especialistas e fabricantes presentes para esclarecer todas as suas questões",
    },
    {
      icon: "cart",
      title: "Comprar com melhores condições",
      description: "Preços de feira, condições de pagamento facilitadas e benefícios exclusivos",
    },
  ],
};
