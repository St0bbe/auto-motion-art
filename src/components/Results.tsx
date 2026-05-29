import { motion } from "motion/react";
import r1 from "@/assets/result-1.jpg";
import r2 from "@/assets/result-2.jpg";
import r3 from "@/assets/result-3.jpg";

const items = [
  { img: r1, tag: "Restauração", title: "Muscle car · revisão geral", time: "5 dias" },
  { img: r2, tag: "Motor", title: "Retífica completa de motor", time: "7 dias" },
  { img: r3, tag: "Suspensão", title: "Kit suspensão esportiva", time: "2 dias" },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-32 overflow-hidden bg-gradient-carbon">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow mb-5">
              Resultados
            </div>
            <h2 className="font-display text-4xl sm:text-5xl uppercase">
              Antes & <span className="text-gradient-ember">depois</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Cada serviço documentado: fotos, relatórios e garantia. A
            transparência que você merece.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass shadow-elevated"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-background font-semibold">
                  {it.tag}
                </div>
                <h3 className="mt-3 font-display text-xl uppercase">{it.title}</h3>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Entrega · {it.time}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
