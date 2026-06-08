import { motion } from "motion/react";
import { Section } from "./Section";
import { Trophy, Award, GraduationCap, BadgeCheck } from "lucide-react";

const achievements = [
  "300+ Coding Problems Solved",
  "Built Production-Level Fintech APIs",
  "Integrated Multiple Third-Party Vendors",
  "Hands-on Experience in Banking Domain",
];

const certs = [
  { icon: BadgeCheck, name: "Java SE 11 Developer Certification" },
  { icon: GraduationCap, name: "Meta Database Fundamentals" },
  { icon: Award, name: "Google Python Programming" },
  { icon: Trophy, name: "NPTEL Industry 4.0 & IIoT (Elite)" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements & Certifications" title="Milestones I'm proud of">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-3xl p-7"
        >
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
            <Trophy className="text-primary" size={18} /> Achievements
          </h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition hover:border-primary/30">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <BadgeCheck size={14} />
                </span>
                <span className="text-sm font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-strong rounded-3xl p-7"
        >
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
            <GraduationCap className="text-primary" size={18} /> Certifications
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certs.map((c) => (
              <li key={c.name} className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition hover:border-primary/30 hover:bg-white/[0.06]">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/40 text-primary-foreground">
                  <c.icon size={16} />
                </span>
                <span className="text-sm font-medium leading-snug">{c.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
