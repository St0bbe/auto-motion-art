export const siteConfig = {
  name: "Torque Motors",
  shortName: "TORQUE",
  brandSuffix: "MOTORS · WORKSHOP",
  title: "Torque Motors · Oficina automotiva premium",
  description:
    "Oficina automotiva premium: diagnóstico computadorizado, manutenção preventiva, freios, suspensão e performance com atendimento transparente.",
  slogan: "Performance · Diagnóstico · Confiança",
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Gostaria de agendar um serviço.",
  phoneHref: "tel:+551133334444",
  phoneLabel: "(11) 3333-4444",
  address: "Av. dos Mecânicos, 1234",
  cityState: "São Paulo · SP",
  openingHours: "Seg–Sex 08h–18h",
  saturdayHours: "Sáb 08h–13h",
  instagramUrl: "https://instagram.com",
  instagramLabel: "@torquemotors",
  mapsUrl: "https://maps.google.com",
  author: "Torque Motors",
  locale: "pt_BR",
} as const;

export const navigationLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
