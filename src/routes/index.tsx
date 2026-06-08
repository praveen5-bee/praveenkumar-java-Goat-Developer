import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Background } from "@/components/portfolio/Background";
import { Loader } from "@/components/portfolio/Loader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praveen Kumar M — Java Backend Developer & Spring Boot Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Praveen Kumar M — Java Backend Developer specializing in Spring Boot, fintech integrations, secure REST APIs, Redis, PostgreSQL, and microservices.",
      },
      { name: "author", content: "Praveen Kumar M" },
      { property: "og:title", content: "Praveen Kumar M — Java Backend Developer" },
      {
        property: "og:description",
        content:
          "Building scalable backend systems, fintech integrations, and secure APIs using Java and Spring Boot.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Praveen Kumar M",
          jobTitle: "Java Backend Developer",
          email: "mailto:mpraveenkumar594@gmail.com",
          telephone: "+91-7639259106",
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/59praveen",
            "https://github.com/praveen5-bee",
          ],
          knowsAbout: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "PostgreSQL",
            "Redis",
            "JWT Authentication",
            "Microservices",
            "Fintech",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
