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
      src: "/images/IMG_6476%203.png",
      alt: "Visitantes explorando estandes com sofás",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      id: "gallery-2",
      src: "/images/k8-j8FByWLB5lQ-unsplash%202.png",
      alt: "Casa contemporânea com fachada moderna",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: "gallery-3",
      src: "/images/IMG_6601%203.png",
      alt: "Sofá em destaque no pavilhão da feira",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-4",
      src: "/images/IMG_6685%203.png",
      alt: "Atendimento de visitantes em estande",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-5",
      src: "/images/IMG_6599%203.png",
      alt: "Detalhe de estofado com manta decorativa",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-6",
      src: "/images/IMG_6483%203.png",
      alt: "Cama decorada em exposição",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: "gallery-7",
      src: "/images/IMG_6578%203.png",
      alt: "Visão ampla do pavilhão com público e expositores",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: "gallery-8",
      src: "/images/IMG_6625%202.png",
      alt: "Corredor de exposição com visitantes",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-9",
      src: "/images/IMG_6712%203.png",
      alt: "Espaço de jantar e convivência em mostra",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: "gallery-10",
      src: "/images/spacejoy-9M66C_w_ToM-unsplash%202.png",
      alt: "Ambiente interno contemporâneo com sofás",
      colSpan: 1,
      rowSpan: 1,
    },
  ],
};
