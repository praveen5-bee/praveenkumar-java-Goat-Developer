import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-elevated" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-extrabold shadow-glow">
              P
            </span>
            <span className="hidden sm:inline">
              Praveen<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-glow hover:-translate-y-0.5"
          >
            Hire Me
          </a>

          <button
            className="md:hidden rounded-lg p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 glass-strong rounded-2xl p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
