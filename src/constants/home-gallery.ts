export interface HomeGalleryItem {
  id: string;
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
}

export interface HomeGallerySectionContent {
  heading: string;
  subtitle: string;
  items: HomeGalleryItem[];
}

export const HOME_GALLERY_SECTION: HomeGallerySectionContent = {
  heading: "Galeria",
  subtitle: "Confira nossos eventos anteriores",
  items: [
    {
      id: "gallery-1",
      src: "/images/moveis-sc-2022-171.webp",
      alt: "Visão ampla do pavilhão com dezenas de expositores",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      id: "gallery-2",
      src: "/images/img-6625.webp",
      alt: "Cama com colcha em tom terracota em ambiente montado",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: "gallery-3",
      src: "/images/moveis-sc-2022-151.webp",
      alt: "Mesas de madeira maciça com bordas naturais",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-4",
      src: "/images/mg-6318.webp",
      alt: "Visitantes acomodados em uma sala de jantar montada",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-5",
      src: "/images/img-6585.webp",
      alt: "Sofá de couro verde em destaque no estande",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: "gallery-6",
      src: "/images/moveis-sc-2022-211.webp",
      alt: "Mesas de jantar postas em exposição",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: "gallery-7",
      src: "/images/moveis-sc-2022-215.webp",
      alt: "Estande de quadros e arte decorativa",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-8",
      src: "/images/mg-6410.webp",
      alt: "Família visitando um estande com itens infantis",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-9",
      src: "/images/moveis-sc-2022-57.webp",
      alt: "Poltrona de veludo verde em ambiente decorado",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-10",
      src: "/images/moveis-sc-2022-49.webp",
      alt: "Estande de colchões e camas",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-11",
      src: "/images/moveis-sc-2022-76.webp",
      alt: "Ambiente gourmet com bancada e iluminação aconchegante",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      id: "gallery-12",
      src: "/images/img-6586.webp",
      alt: "Sofá modular cinza em módulos",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: "gallery-13",
      src: "/images/moveis-sc-2022-158.webp",
      alt: "Atendimento a clientes na área de negócios",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-14",
      src: "/images/moveis-sc-2022-72.webp",
      alt: "Mesa posta com taças e detalhes de decoração",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-15",
      src: "/images/moveis-sc-2022-47.webp",
      alt: "Área de convivência com pufes coloridos",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: "gallery-16",
      src: "/images/img-6583.webp",
      alt: "Rack de madeira com painel de TV",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-17",
      src: "/images/moveis-sc-2022-55.webp",
      alt: "Mesa de centro esculpida em raiz de madeira",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-18",
      src: "/images/img-6578.webp",
      alt: "Sofá de canto em couro caramelo",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-19",
      src: "/images/moveis-sc-2022-101.webp",
      alt: "Estande rústico com sofá de couro e tapete de pele",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-20",
      src: "/images/moveis-sc-2022-83.webp",
      alt: "Demonstração de equipamento de limpeza no estande",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-21",
      src: "/images/mg-6408.webp",
      alt: "Corredor movimentado da feira com visitantes",
      colSpan: 1,
      rowSpan: 1,
    },
  ],
};
