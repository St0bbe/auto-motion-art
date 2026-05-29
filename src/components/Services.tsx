import { motion } from "motion/react";
import {
  Wrench,
  Droplets,
  Disc3,
  Waves,
  Cpu,
  ScanLine,
  Cog,
  Snowflake,
} from "lucide-react";

const services = [
  { icon: Wrench, title: "Revisão completa", desc: "Checklist de 80 itens com relatório detalhado." },
  { icon: Droplets, title: "Troca de óleo", desc: "Lubrificantes sintéticos premium e filtros originais." },
  { icon: Disc3, title: "Freios", desc: "Pastilhas, discos, fluido e sangria com teste de eficiência." },
  { icon: Waves, title: "Suspensão", desc: "Amortecedores, molas, bandejas e alinhamento 3D." },
  { icon: Cpu, title: "Injeção eletrônica", desc: "Limpeza ultrassônica de bicos e calibração." },
  { icon: ScanLine, title: "Diagnóstico computadorizado", desc: "Leitura OBD-II de todos os módulos do veículo." },
  { icon: Cog, title: "Motor & câmbio", desc: "Reparo, retífica e revisão de câmbios manual e automático." },
  { icon: Snowflake, title: "Ar-condicionado", desc: "Higienização, recarga de gás e troca de filtros." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-carbon" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-amber-glow mb-5">
            Serviços
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase">
            Tudo o que seu carro <span className="text-gradient-ember">precisa</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Da manutenção preventiva ao reparo pesado, com peças originais e
            mão de obra especializada.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl glass p-6 hover:border-primary/40 transition-colors overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-ember shadow-ember">
                  <s.icon className="h-6 w-6 text-background" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-xl uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 text-xs uppercase tracking-[0.2em] text-amber-glow opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
