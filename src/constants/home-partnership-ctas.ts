export interface HomePartnershipCta {
  id: string;
  variant: "red";
  tag: string;
  titleStart: string;
  titleAccent: string;
  description: string;
  highlights: string[];
  supportLabels: string[];
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
    contactUrl:
      "https://api.whatsapp.com/send?phone=554791322878&text=Ol%C3%A1!%20Tenho%20interesse%20em%20participar%20da%20Casa%20%26%20Constru%C3%A7%C3%A3o%20como%20expositor.%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F",
  },
];
