export const HOME_SECTION_IDS = {
  top: "top",
  benefits: "benefits",
  segments: "segments",
  gallery: "gallery",
  venue: "venue",
  nextEditions: "next-editions",
  partnership: "partnership",
  visitPlanner: "visit-planner",
  faq: "faq",
  footer: "footer",
} as const;

export const NAVBAR_SECTION_LINKS = [
  { label: "Início", sectionId: HOME_SECTION_IDS.top },
  { label: "Vantagens", sectionId: HOME_SECTION_IDS.benefits },
  { label: "Segmentos", sectionId: HOME_SECTION_IDS.segments },
  { label: "Galeria", sectionId: HOME_SECTION_IDS.gallery },
  { label: "Parcerias", sectionId: HOME_SECTION_IDS.partnership },
  { label: "Local", sectionId: HOME_SECTION_IDS.venue },
  { label: "Próximas Edições", sectionId: HOME_SECTION_IDS.nextEditions },
  { label: "Planeje Visita", sectionId: HOME_SECTION_IDS.visitPlanner },
  { label: "FAQ", sectionId: HOME_SECTION_IDS.faq },
  { label: "Contato", sectionId: HOME_SECTION_IDS.footer },
] as const;
