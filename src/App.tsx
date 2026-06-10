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

export default function App() {
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
