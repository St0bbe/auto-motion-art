import { motion } from "motion/react";
import { Clock, FileText, Award, Cpu, ShieldCheck } from "lucide-react";

const features = [
  { icon: Clock, title: "Atendimento rápido", desc: "Recepção imediata, diagnóstico em até 30 minutos." },
  { icon: FileText, title: "Orçamento transparente", desc: "Você aprova cada item antes de qualquer intervenção." },
  { icon: Award, title: "Mecânicos especializados", desc: "Equipe certificada com treinamento contínuo." },
  { icon: Cpu, title: "Equipamentos modernos", desc: "Scanners de última geração e alinhamento 3D." },
  { icon: ShieldCheck, title: "Garantia nos serviços", desc: "Até 12 meses de garantia em peças e mão de obra." },
];

export function Features() {
  return (
    <section id="diferenciais" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-radial-glow opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow mb-5">
              Diferenciais
            </div>
            <h2 className="font-display text-4xl sm:text-5xl uppercase leading-tight">
              Por que escolher a <span className="text-gradient-ember">Torque</span>?
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Combinamos tecnologia de ponta, mão de obra especializada e atendimento
              transparente — para você sair com a chave na mão e a tranquilidade no peito.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass rounded-2xl p-6 hover:shadow-ember transition-shadow ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary border border-primary/30">
                    <f.icon className="h-5 w-5 text-amber-glow" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg uppercase">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
