import { motion } from "motion/react";
import { Section } from "./Section";
import { Briefcase, Check } from "lucide-react";

const bullets = [
  "Developed secure Spring Boot microservices for Banking and Fintech applications.",
  "Integrated Insurance vendors including EDMI.",
  "Integrated Loan providers including Svatantra and Indifi.",
  "Built backend services for Bus Booking systems.",
  "Implemented JWT Authentication and Redis caching.",
  "Optimized PostgreSQL and MySQL database queries.",
  "Developed scalable REST APIs serving financial applications.",
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional Experience">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent sm:left-6" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-12 sm:pl-16"
        >
          <span className="absolute left-0 top-2 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow sm:left-1">
            <Briefcase size={16} />
          </span>
          <div className="glass-strong rounded-2xl p-6 sm:p-8 shimmer-border">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">Java Developer</h3>
                <p className="text-primary font-semibold">Rupenet Technology Solutions</p>
              </div>
              <span className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
                September 2025 – June 2026
              </span>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                    <Check size={12} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
