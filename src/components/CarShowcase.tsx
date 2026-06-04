import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(parts.length - 1) * 100}vw`]);
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 1440]);
  const progressScale = useTransform(scrollYProgress, [0.02, 0.98], [0, 1], { clamp: true });

  return (
    <section
      ref={ref}
      id="anatomia"
      className="relative overflow-visible"
      style={{ height: `${parts.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-carbon">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 bg-radial-glow opacity-60" />

        <div className="absolute inset-x-0 top-0 z-30 mx-auto max-w-7xl px-4 pt-20 text-center sm:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow">
            Rolagem lateral
          </div>

          <h2 className="mt-4 font-display text-3xl uppercase sm:text-5xl">
            Cada peça <span className="text-gradient-ember">importa</span>
          </h2>
        </div>

        <motion.div
          className="absolute inset-0 z-10 flex h-screen w-max will-change-transform"
          style={{ x }}
        >
          {parts.map((part, index) => (
            <article
              key={part.tag}
              className="relative h-screen w-screen shrink-0 overflow-hidden px-4 sm:px-8 lg:px-16"
            >
              <motion.div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[92vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-20">
                <img
                  src={carSide}
                  alt=""
                  width={1600}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(255,140,40,0.25)]"
                />
                <motion.div
                  style={{ rotate: wheelRotate }}
                  className="absolute left-[22%] bottom-[12%] h-[18%] w-[18%] rounded-full border border-amber-glow/40"
                />
                <motion.div
                  style={{ rotate: wheelRotate }}
                  className="absolute right-[20%] bottom-[12%] h-[18%] w-[18%] rounded-full border border-amber-glow/40"
                />
              </motion.div>

              <div className="relative z-10 mx-auto grid h-screen w-full max-w-6xl items-center gap-8 pt-36 pb-16 lg:grid-cols-2 lg:gap-12 lg:pt-28">
                <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl shadow-elevated noise sm:max-w-md">
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

                  <h3 className="font-display text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl">
                    {part.title}
                  </h3>

                  <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                    {part.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="absolute bottom-6 left-0 right-0 z-30 px-4">
          <div className="mx-auto max-w-md overflow-hidden rounded-full bg-border h-[3px]">
            <motion.div
              style={{ scaleX: progressScale, transformOrigin: "left" }}
              className="h-full bg-gradient-ember"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
