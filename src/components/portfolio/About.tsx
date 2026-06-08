import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Section } from "./Section";

const stats = [
  { value: 3, suffix: "+", label: "Fintech Platforms Built" },
  { value: 50, suffix: "+", label: "Production APIs Developed" },
  { value: 5, suffix: "+", label: "Third-Party Integrations" },
  { value: 300, suffix: "+", label: "Coding Problems Solved" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const dur = 1400;
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);

      if (p === 1) {
        setN(to);
        return;
      }

      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Passionate about building backends that scale"
    >
      <div className="grid items-start gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-3xl p-8 shimmer-border"
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Passionate{" "}
            <span className="font-semibold text-foreground">
              Java Backend Developer
            </span>{" "}
            with hands-on experience building scalable Spring Boot
            applications, secure REST APIs, fintech solutions, and third-party
            integrations. Specialized in{" "}
            <span className="font-semibold text-primary">
              Insurance, Loan, and Bus Booking Platforms
            </span>{" "}
            with expertise in Java, Spring Boot, Redis, PostgreSQL, JWT
            Authentication, and Microservice-based architectures.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Microservices",
              "REST APIs",
              "Spring Security",
              "Redis",
              "PostgreSQL",
              "JWT",
              "Fintech",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="text-gradient text-3xl font-extrabold sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>

              <div className="mt-2 text-xs font-medium text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}