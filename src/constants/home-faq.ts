export interface HomeFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface HomeFaqSectionContent {
  heading: string;
  items: HomeFaqItem[];
}

export const HOME_FAQ_SECTION: HomeFaqSectionContent = {
  heading: "FAQ",
  items: [
    {
      id: "faq-preco",
      question: "Os preços na feira são mais baratos do que nas lojas?",
      answer: "Na feira você encontra condições especiais, combos e negociações diretas com fornecedores que geralmente não estão disponíveis no varejo tradicional.",
    },
    {
      id: "faq-negociar",
      question: "Posso negociar o preço na hora?",
      answer: "Sim. A negociação presencial é um dos principais diferenciais do evento e pode incluir descontos, brindes ou condições personalizadas.",
    },
    {
      id: "faq-levar",
      question: "Posso comprar e já levar o produto?",
      answer: "Depende do expositor e do tipo de item. Alguns produtos saem com pronta entrega e outros são entregues conforme prazo combinado.",
    },
    {
      id: "faq-parcelar",
      question: "Posso parcelar minha compra?",
      answer: "Sim, muitos expositores oferecem parcelamento e condições facilitadas durante a feira.",
    },
    {
      id: "faq-estilos",
      question: "Vou encontrar móveis de todos os estilos?",
      answer: "Você encontra opções para diferentes estilos, faixas de orçamento e propostas de projeto, do clássico ao contemporâneo.",
    },
    {
      id: "faq-arquiteto",
      question: "Posso levar meu arquiteto ou designer comigo?",
      answer: "Claro. É uma ótima forma de comparar soluções junto com seu profissional e tomar decisões mais seguras.",
    },
    {
      id: "faq-garantia",
      question: "Os produtos têm garantia?",
      answer: "Sim. Cada expositor informa suas políticas de garantia, assistência e pós-venda no momento da negociação.",
    },
    {
      id: "faq-projeto",
      question: "Posso fazer o projeto de ambientes no local?",
      answer: "Em muitos estandes, sim. Há equipes preparadas para orientar medidas, acabamentos e composição de ambientes.",
    },
  ],
};
