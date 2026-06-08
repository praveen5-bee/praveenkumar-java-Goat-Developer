import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import portrait from "@/assets/praveen-portrait.jpeg";

const roles = [
  "Java Backend Developer",
  "Spring Boot Developer",
  "Fintech Integration Specialist",
  "API Developer",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block w-[3px] h-[1em] align-[-0.1em] bg-primary animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground/80"
          >
            <Sparkles size={14} className="text-primary" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-gradient">Praveen Kumar M</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 min-h-[2.4em] text-xl font-semibold sm:text-2xl"
          >
            I'm a <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Building scalable backend systems, fintech integrations, and secure
            APIs using Java and Spring Boot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-glow hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="src\assets\praveenkumar-Java Developer (1).pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10 hover:-translate-y-0.5"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a href="https://github.com/praveen5-bee" target="_blank" rel="noreferrer" className="hover:text-primary transition" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/59praveen" target="_blank" rel="noreferrer" className="hover:text-primary transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <span className="text-xs">Tamil Nadu, India</span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-3xl" />
          <div className="relative shimmer-border rounded-[2rem] glass-strong p-3 shadow-elevated">
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5]">
              <img
                src={portrait}
                alt="Praveen Kumar M, Java Backend Developer"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-5 left-5 glass-strong rounded-2xl px-4 py-3 shadow-elevated backdrop-blur-md"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Stack</div>
              <div className="text-sm font-bold">Java • Spring Boot</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-elevated"
            >
              <div className="text-[10px] uppercase tracking-wider text-black">Experience</div>
              <div className="text-sm font-bold text-primary">10+ Months</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
