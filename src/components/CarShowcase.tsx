import { motion } from "motion/react";
import carSide from "@/assets/car-side.png";
import partEngine from "@/assets/part-engine.jpg";
import partBrake from "@/assets/part-brake.jpg";
import partSuspension from "@/assets/part-suspension.jpg";
import partWheel from "@/assets/part-wheel.jpg";

const parts = [
  {
    img: partEngine,
    tag: "Motor",
    title: "Motor & câmbio",
    desc: "Revisão completa de motor, embreagem e transmissão. Diagnóstico de ruídos, vibrações e perda de potência.",
  },
  {
    img: partBrake,
    tag: "Freios",
    title: "Sistema de freios",
    desc: "Troca de pastilhas, discos, fluido DOT e sangria. Garantimos frenagens precisas e seguras em qualquer condição.",
  },
  {
    img: partSuspension,
    tag: "Suspensão",
    title: "Suspensão & direção",
    desc: "Amortecedores, molas, bandejas e alinhamento 3D. Conforto e estabilidade em curvas e estradas irregulares.",
  },
  {
    img: partWheel,
    tag: "Rodas",
    title: "Pneus & alinhamento",
    desc: "Balanceamento computadorizado, geometria e troca de pneus de alta performance.",
  },
];

export function CarShowcase() {
  return (
    <section
      id="anatomia"
      className="relative overflow-hidden bg-gradient-carbon py-24 sm:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 bg-radial-glow opacity-40" />
      <img
        src={carSide}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(1100px,95vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow">
            Anatomia
          </div>
          <h2 className="mt-4 font-display text-3xl uppercase sm:text-5xl">
            Cada peça <span className="text-gradient-ember">importa</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Do motor às rodas — cuidamos de cada componente com diagnóstico preciso e peças de qualidade.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {parts.map((part, index) => (
            <motion.article
              key={part.tag}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-elevated noise">
                <img
                  src={part.img}
                  alt={part.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
              </div>

              <div className="mx-auto max-w-xl text-center lg:text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-glow" />
                  {part.tag} · 0{index + 1}/0{parts.length}
                </div>
                <h3 className="font-display text-4xl uppercase leading-tight sm:text-5xl">
                  {part.title}
                </h3>
                <p className="mt-5 text-base text-muted-foreground sm:text-lg">{part.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
