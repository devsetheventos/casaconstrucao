export interface HomeVisitPlannerInfo {
  label: string;
  title: string;
  details: string;
}

export interface HomeVisitPlannerSectionContent {
  heading: string;
  subheading: string;
  helperText: string;
  dateInfo: HomeVisitPlannerInfo;
  locationInfo: HomeVisitPlannerInfo;
  mapLabel: string;
  mapUrl: string;
  calendarLabel: string;
  calendarUrl: string;
  cashbackTitle: string;
  cashbackNote: string;
  bottomHeading: string;
  bottomDescription: string;
}

export const HOME_VISIT_PLANNER_SECTION: HomeVisitPlannerSectionContent = {
  heading: "Programe sua visita",
  subheading: "As melhores decisões acontecem ao vivo",
  helperText: "Não deixe para depois. Sua casa ou obra merece essa atenção.",
  dateInfo: {
    label: "Quando",
    title: "9 a 12 de Julho",
    details: "Qui: 18h às 22h | Sex: 17h às 21h | Sáb: 10h às 22h | Dom: 10h às 19h",
  },
  locationInfo: {
    label: "Onde",
    title: "Parque Vila Germânica",
    details: "Pavilhão 00 · R. Alberto Stein, 199 · Velha, Blumenau",
  },
  mapLabel: "Ver no mapa",
  mapUrl: "https://maps.google.com/?q=Parque+Vila+Germanica+Blumenau",
  calendarLabel: "Adicionar à agenda",
  calendarUrl:
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casa+Constru%C3%A7%C3%A3o+2026&dates=20260709T210000Z/20260712T220000Z&details=Feira+Casa+Constru%C3%A7%C3%A3o&location=Parque+Vila+Germ%C3%A2nica,+Blumenau",
  cashbackTitle: "Seu ingresso vira cashback!*",
  cashbackNote: "*Consulte condições no local",
  bottomHeading: "Não perca esta oportunidade",
  bottomDescription: "Quatro dias que podem economizar meses de pesquisa e milhares de reais em seu projeto",
};
