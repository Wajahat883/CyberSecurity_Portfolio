import { GridBackground } from '@/components/ui/GridBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Certifications } from '@/components/sections/Certifications';
import { Projects } from '@/components/sections/Projects';
import { Labs } from '@/components/sections/Labs';
import { ExperienceEducation } from '@/components/sections/ExperienceEducation';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Labs />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
