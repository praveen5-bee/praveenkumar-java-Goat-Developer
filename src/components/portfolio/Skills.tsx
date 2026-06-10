import { motion } from "motion/react";
import { Section } from "./Section";
import { Code2, Database, ShieldCheck, Wrench, Network } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Backend",
    items: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "Hibernate", "JPA", "JPQL"],
  },
  { icon: Database, title: "Database", items: ["PostgreSQL", "MySQL", "Redis"] },
  { icon: ShieldCheck, title: "Security", items: ["JWT Authentication", "Spring Security"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Postman", "Jira"] },
  {
    icon: Network,
    title: "Architecture",
    items: ["Microservices", "API Integrations", "Caching", "Database Optimization"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech I work with daily"
      subtitle="The stack I use to ship reliable, secure, production-grade backends."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative glass rounded-2xl p-6 transition hover:bg-white/10 hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <g.icon size={20} />
            </div>
            <h3 className="text-lg font-bold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-foreground/85 transition hover:border-primary/40 hover:text-primary"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
