"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CompaniesSection } from "@/components/companies-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { Providers } from "./providers";

export default function HomePage() {
  return (
    <Providers>
      <div className="min-h-screen bg-background" data-testid="page-home">
        <Navigation />
        <main>
          <HeroSection />
          <CompaniesSection />
          <ProjectsShowcase />
          <AboutSection />
          <SkillsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Providers>
  );
}
