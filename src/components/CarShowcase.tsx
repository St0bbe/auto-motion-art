import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
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

function Part({
  index,
  scrollYProgress,
  data,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  data: (typeof parts)[number];
}) {
  const total = parts.length;
  const start = index / total;
  const end = (index + 1) / total;

  const clamp = (n: number) => Math.max(0, Math.min(1, n));
  const o1 = clamp(start - 0.05);
  const o2 = clamp(start + 0.05);
  const o3 = clamp(end - 0.05);
  const o4 = clamp(end + 0.05);
  // ensure strictly increasing
  const stops = [o1, Math.max(o2, o1 + 0.0001), Math.max(o3, o2 + 0.0002), Math.max(o4, o3 + 0.0001)];
  const opacity = useTransform(scrollYProgress, stops, [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [clamp(start), clamp(end)], [40, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 grid lg:grid-cols-2 gap-8 items-center px-4 lg:px-12"
    >
      <div className="order-2 lg:order-1 relative aspect-square max-w-md w-full mx-auto rounded-3xl overflow-hidden shadow-elevated noise">
        <img
          src={data.img}
          alt={data.title}
          width={800}
          height={800}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
      <div className="order-1 lg:order-2 max-w-lg">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-glow" />
          {data.tag} · 0{index + 1}/0{total}
        </div>
        <h3 className="font-display text-4xl sm:text-5xl uppercase leading-tight">
          {data.title}
        </h3>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground">{data.desc}</p>
      </div>
    </motion.div>
  );
}

export function CarShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Car animations across the entire scroll
  const carScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.9, 1.05, 0.85]);
  const carRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.9, 0.4]);

  return (
    <section ref={ref} className="relative" style={{ height: `${parts.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col bg-gradient-carbon overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow"
        />

        <div className="relative z-10 pt-24 pb-4 text-center px-4">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow">
            Anatomia do serviço
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl uppercase">
            Cada peça <span className="text-gradient-ember">importa</span>
          </h2>
        </div>

        {/* Car centered */}
        <div className="relative flex-1 flex items-center justify-center">
          <motion.div
            style={{ scale: carScale, rotate: carRotate }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[700px] opacity-25 pointer-events-none"
          >
            <img
              src={carSide}
              alt=""
              width={1600}
              height={800}
              loading="lazy"
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(255,140,40,0.25)]"
            />
            {/* spinning wheels overlay */}
            <motion.div
              style={{ rotate: wheelRotate }}
              className="absolute left-[22%] bottom-[12%] h-[18%] w-[18%] rounded-full border border-amber-glow/40"
            />
            <motion.div
              style={{ rotate: wheelRotate }}
              className="absolute right-[20%] bottom-[12%] h-[18%] w-[18%] rounded-full border border-amber-glow/40"
            />
          </motion.div>

          {/* Parts panels */}
          <div className="relative w-full max-w-6xl h-full max-h-[600px]">
            {parts.map((p, i) => (
              <Part key={p.tag} index={i} data={p} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        {/* progress bar */}
        <div className="relative z-10 pb-6 px-4">
          <div className="mx-auto max-w-md h-[2px] bg-border rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="h-full bg-gradient-ember"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
