import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-carbon" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-radial-glow animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-4 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow mb-6">
          Vamos começar
        </div>
        <h2 className="font-display text-5xl sm:text-7xl uppercase leading-[0.95]">
          Agende sua <br />
          <span className="text-gradient-ember">revisão hoje</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Atendimento personalizado pelo WhatsApp. Resposta em até 10 minutos
          em horário comercial.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um serviço."
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-ember px-8 py-4 text-base font-semibold text-background shadow-ember hover:shadow-glow transition-shadow"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
          <a
            href="tel:+551133334444"
            className="inline-flex items-center gap-3 rounded-xl glass px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Phone className="h-5 w-5 text-amber-glow" />
            (11) 3333-4444
          </a>
        </div>
      </motion.div>
    </section>
  );
}
