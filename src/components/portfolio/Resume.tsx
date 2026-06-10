import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { Section } from "./Section";
import resumePdf from "@/assets/praveenkumar-Java Developer (1).pdf";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Get my full profile">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl overflow-hidden glass-strong rounded-3xl p-8 sm:p-10 shimmer-border"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary/40 text-primary-foreground shadow-glow">
            <FileText size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold">Praveen Kumar M — Resume</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Java Backend Developer · Spring Boot · Fintech Integrations · 10+ months experience
            </p>
          </div>
          <a
            href={resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-glow hover:-translate-y-0.5"
          >
            <Download size={16} /> Download
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
