import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Rafael M.",
    car: "Civic Si '22",
    text: "Levei meu carro com um ruído misterioso. Diagnóstico rápido, orçamento sem surpresas e ainda explicaram tudo. Sai de lá outro motorista.",
  },
  {
    name: "Camila R.",
    car: "Golf GTI",
    text: "Atendimento impecável. O painel digital de orçamento é genial — você acompanha tudo. Recomendo demais.",
  },
  {
    name: "André S.",
    car: "Hilux 4x4",
    text: "Já passei por umas 5 oficinas, nenhuma chegou perto. Equipamento bom, gente boa, preço justo.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow mb-5">
            Depoimentos
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase">
            Quem confia, <span className="text-gradient-ember">volta sempre</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-3xl p-7 shadow-elevated"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/30" />
              <div className="flex gap-1 text-amber-glow">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="grid place-items-center h-10 w-10 rounded-full bg-gradient-ember text-background font-display font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-display text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">{t.car}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
