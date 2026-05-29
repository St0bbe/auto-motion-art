import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um serviço."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-ember blur-xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-gradient-ember text-background shadow-ember hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
      </span>
    </a>
  );
}
