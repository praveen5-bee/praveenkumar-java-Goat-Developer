import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-foreground">Praveen Kumar</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:mpraveenkumar594@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/praveen5-bee"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/59praveen"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
