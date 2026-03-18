export interface HomeGalleryItem {
  id: string;
  label: string;
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
    { id: "gallery-1", label: "Ambiente principal", colSpan: 2, rowSpan: 2 },
    { id: "gallery-2", label: "Estandes", colSpan: 1, rowSpan: 2 },
    { id: "gallery-3", label: "Detalhes", colSpan: 1, rowSpan: 1 },
    { id: "gallery-4", label: "Conexões", colSpan: 1, rowSpan: 1 },
    { id: "gallery-5", label: "Negócios", colSpan: 1, rowSpan: 1 },
    { id: "gallery-6", label: "Visitantes", colSpan: 1, rowSpan: 2 },
    { id: "gallery-7", label: "Demonstrações", colSpan: 2, rowSpan: 1 },
    { id: "gallery-8", label: "Experiência", colSpan: 1, rowSpan: 1 },
    { id: "gallery-9", label: "Encerramento", colSpan: 1, rowSpan: 1 },
  ],
};
