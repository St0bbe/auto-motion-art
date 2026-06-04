import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
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

function PartCard({
  part,
  index,
  total,
}: {
  part: (typeof parts)[number];
  index: number;
  total: number;
}) {
  return (
    <div className="relative z-10 grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-3xl shadow-elevated noise sm:max-w-md">
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
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-glow" />
          {part.tag} · 0{index + 1}/0{total}
        </div>
        <h3 className="font-display text-3xl uppercase leading-tight sm:text-5xl lg:text-6xl">
          {part.title}
        </h3>
        <p className="mt-4 text-sm text-muted-foreground sm:text-lg">{part.desc}</p>
      </div>
    </div>
  );
}

function MobileShowcase() {
  return (
    <section id="anatomia" className="relative bg-gradient-carbon py-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow">
          Anatomia
        </div>
        <h2 className="mt-4 font-display text-3xl uppercase">
          Cada peça <span className="text-gradient-ember">importa</span>
        </h2>
      </div>
      <div className="relative mt-12 flex flex-col gap-16 px-4">
        {parts.map((part, i) => (
          <PartCard key={part.tag} part={part} index={i} total={parts.length} />
        ))}
      </div>
    </section>
  );
}

function DesktopShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(parts.length - 1) * 100}vw`]);
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 1440]);

  return (
    <section
      id="anatomia"
      ref={sectionRef}
      className="relative bg-gradient-carbon"
      style={{ height: `${parts.length * 115}vh` }}
    >
      <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 bg-radial-glow opacity-60" />

        <div className="absolute left-0 right-0 top-8 z-30 px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow">
            Rolagem lateral
          </div>
          <h2 className="mt-4 font-display text-5xl uppercase">
            Cada peça <span className="text-gradient-ember">importa</span>
          </h2>
        </div>

        <motion.div
          className="absolute left-0 top-0 z-10 flex h-full will-change-transform"
          style={{ x, width: `${parts.length * 100}vw` }}
        >
          {parts.map((part, index) => (
            <article
              key={part.tag}
              className="relative grid h-full w-screen shrink-0 place-items-center overflow-hidden px-8 pt-40 lg:px-16"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[92vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-20">
                <img
                  src={carSide}
                  alt=""
                  width={1600}
                  height={800}
                  loading="lazy"
                  className="h-auto w-full drop-shadow-[0_30px_60px_rgba(255,140,40,0.25)]"
                />
                <motion.div
                  style={{ rotate: wheelRotate }}
                  className="absolute left-[22%] bottom-[12%] h-[18%] w-[18%] rounded-full border border-amber-glow/40"
                />
                <motion.div
                  style={{ rotate: wheelRotate }}
                  className="absolute right-[20%] bottom-[12%] h-[18%] w-[18%] rounded-full border border-amber-glow/40"
                />
              </div>

              <PartCard part={part} index={index} total={parts.length} />
            </article>
          ))}
        </motion.div>

        <div className="absolute bottom-6 left-0 right-0 z-30 px-4">
          <div className="mx-auto h-[3px] max-w-md overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-gradient-ember"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CarShowcase() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileShowcase /> : <DesktopShowcase />;
}
