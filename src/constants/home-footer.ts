export interface HomeFooterSectionContent {
  logoSrc: string;
  logoAlt: string;
  instagramUrl: string;
  whatsappUrl: string;
  navLinks: Array<{ label: string; href: string }>;
  legalLinks: Array<{ label: string; href: string }>;
  copyrightText: string;
}

export const HOME_FOOTER_SECTION: HomeFooterSectionContent = {
  logoSrc: "/svg/logo-full-light.svg",
  logoAlt: "Casa Construção",
  instagramUrl: "https://instagram.com",
  whatsappUrl: "https://wa.me/5547999999999",
  navLinks: [
    { label: "Início", href: "/" },
    { label: "Expositores", href: "/expositores" },
    { label: "Programação", href: "/programacao" },
    { label: "Ingressos", href: "/ingressos" },
  ],
  legalLinks: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
  ],
  copyrightText: "© 2026 Casa e Construção. Todos os direitos reservados.",
};
