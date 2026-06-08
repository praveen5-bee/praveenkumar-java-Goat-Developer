import { motion } from "motion/react";
import { Section } from "./Section";
import { Shield, Coins, Bus, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Shield,
    name: "Insurance Integration Platform",
    desc: "Built secure Spring Boot APIs integrating EDMI Insurance services for policy issuance, policy status tracking, and customer workflows.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
  },
  {
    icon: Coins,
    name: "Loan Aggregator Service",
    desc: "Integrated Svatantra and Indifi loan providers enabling eligibility checks, application processing, and financial workflows.",
    tech: ["Java", "Spring Boot", "Redis", "PostgreSQL"],
  },
  {
    icon: Bus,
    name: "Bus Booking Integration",
    desc: "Integrated RedBus partner APIs for real-time bus schedules, seat availability, pricing, and booking services.",
    tech: ["Java", "REST APIs", "Redis"],
  },
  {
  icon: Coins,
  name: "FASTag Recharge & Wallet Platform",
  desc: "Developed FASTag recharge and wallet management services with real-time balance validation, transaction processing, and provider integrations for seamless toll payments.",
  tech: ["Java", "Spring Boot", "Redis", "PostgreSQL"],
},
{
  icon: Shield,
  name: "UPI Cashout Service",
  desc: "Built UPI Cashout APIs enabling instant bank transfers, beneficiary validation, transaction tracking, callback handling, and reconciliation workflows.",
  tech: ["Java", "Spring Boot", "UPI", "PostgreSQL"],
},
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="Production fintech & integration projects shipped end-to-end."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative glass rounded-3xl p-6 transition hover:-translate-y-2 hover:bg-white/10 hover:shadow-glow-lg"
          >
            <div className="absolute right-5 top-5 text-muted-foreground transition group-hover:text-primary group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/40 text-primary-foreground shadow-glow">
              <p.icon size={22} />
            </div>
            <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono font-medium text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
