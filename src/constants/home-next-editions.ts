export interface HomeNextEditionInfoItem {
  icon: "calendar" | "city" | "venue";
  label: string;
}

export interface HomeNextEditionsSectionContent {
  heading: string;
  cityHighlight: string;
  topInfo: HomeNextEditionInfoItem[];
  editionLabel: string;
  dateRange: string;
  venueName: string;
  sector?: string;
  address: string;
  mapLabel: string;
  mapUrl: string;
  mapEmbedUrl: string;
}

export const HOME_NEXT_EDITIONS_SECTION: HomeNextEditionsSectionContent = {
  heading: "Próximas edições",
  cityHighlight: "Joinville",
  topInfo: [
    { icon: "calendar", label: "4 a 7 Setembro" },
    { icon: "city", label: "Joinville" },
    { icon: "venue", label: "Pavilhão Expoville" },
  ],
  editionLabel: "Edição Joinville",
  dateRange: "4 a 7 de Setembro",
  venueName: "Expoville",
  address: "R. XV de Novembro, 4315 - Glória, Joinville",
  mapLabel: "Ver no mapa",
  mapUrl: "https://maps.google.com/?q=Expoville+Joinville",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1788.4321608281462!2d-48.883445910874464!3d-26.298498094254608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94debaa836561087%3A0x660718d33f718a3c!2sCentro%20de%20Conven%C3%A7%C3%B5es%20e%20Exposi%C3%A7%C3%B5es%20Expoville!5e0!3m2!1spt-BR!2sbr!4v1773786310026!5m2!1spt-BR!2sbr",
};
