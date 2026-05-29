import { motion } from "motion/react";
import { ArrowRight, Gauge } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-gradient-hero pt-32 pb-20"
    >
      {/* grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-radial-glow animate-pulse-glow" />
      {/* smoke */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="absolute bottom-0 h-40 w-40 rounded-full bg-amber-glow/10 blur-3xl animate-smoke"
            style={{
              left: `${15 + i * 18}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-amber-glow mb-6"
          >
            <Gauge className="h-3.5 w-3.5" />
            <span>Performance · Diagnóstico · Confiança</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] uppercase"
          >
            Sua oficina <br />
            <span className="text-gradient-ember">automotiva</span> <br />
            de confiança
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Diagnóstico, manutenção e performance com tecnologia de ponta e
            transparência total — do orçamento à entrega das chaves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-ember px-7 py-4 text-sm font-semibold text-background shadow-ember hover:shadow-glow transition-shadow"
            >
              Agendar serviço
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-4 text-sm font-semibold text-foreground hover:bg-secondary/80 transition-colors"
            >
              Ver serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { v: "+12", l: "Anos de estrada" },
              { v: "8k+", l: "Carros revisados" },
              { v: "4.9", l: "Avaliação Google" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-ember">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated noise">
            <img
              src={heroCar}
              alt="Carro esportivo em oficina premium"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass rounded-xl px-4 py-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-amber-glow">Em diagnóstico</div>
                <div className="text-sm font-display">Sistema OBD-II conectado</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-amber-glow animate-pulse-glow" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
