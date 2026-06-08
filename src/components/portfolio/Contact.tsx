import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";

const contacts = [
  { icon: Mail, label: "Email", value: "mpraveenkumar594@gmail.com", href: "mailto:mpraveenkumar594@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7639259106", href: "tel:+917639259106" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/59praveen", href: "https://www.linkedin.com/in/59praveen" },
  { icon: Github, label: "GitHub", value: "praveen5-bee", href: "https://github.com/praveen5-bee" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

 const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    toast.error("Please fill in all fields");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    toast.error("Please enter a valid email");
    return;
  }

  try {
    setSending(true);

    const formData = new FormData();
    formData.append("access_key", "64af2f18-ad29-43ab-ae4d-c50342d024b5");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error(data.message || "Failed to send message");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    setSending(false);
  }
};
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great" subtitle="Open to backend, fintech, and full-time opportunities.">
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 glass rounded-2xl p-4 transition hover:bg-white/10 hover:-translate-y-0.5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon size={18} />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-semibold">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 space-y-4 shimmer-border"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={120}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1500}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder="Tell me about your project or role…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
          >
            <Send size={16} />
            {sending ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
