export interface HomeVenueScheduleItem {
  day: string;
  hours: string;
}

export interface HomeVenueSectionContent {
  sectionLabel: string;
  cityEdition: string;
  dateRange: string;
  venueName: string;
  sector: string;
  address: string;
  mapLabel: string;
  mapUrl: string;
  mapEmbedUrl: string;
  scheduleTitle: string;
  schedule: HomeVenueScheduleItem[];
}

export const HOME_VENUE_SECTION: HomeVenueSectionContent = {
  sectionLabel: "Local e horários",
  cityEdition: "Edição Blumenau",
  dateRange: "9 a 12 de Julho",
  venueName: "Parque Vila Germânica",
  sector: "Setor 02",
  address: "R. Alberto Stein, 199 - Velha, Blumenau",
  mapLabel: "Ver no mapa",
  mapUrl: "https://maps.google.com/?q=Parque+Vila+Germanica+Blumenau",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6115476614004!2d-49.087698022831916!3d-26.91582067664524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df192905855555%3A0x9178dae6c7183436!2sParque%20Vila%20Germ%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1773785437834!5m2!1spt-BR!2sbr",
  scheduleTitle: "Horários",
  schedule: [
    { day: "Quinta-feira", hours: "18h às 22h" },
    { day: "Sexta-feira", hours: "15h às 21h" },
    { day: "Sábado", hours: "10h às 21h" },
    { day: "Domingo", hours: "10h às 17h" },
  ],
};
