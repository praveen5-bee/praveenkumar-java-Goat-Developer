import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
