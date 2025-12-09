import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "./typing-animation";
import { ScrollAnimation } from "./scroll-animation";
import { Download, ArrowDown } from "lucide-react";

const typingWords = ["Web Applications", "User Experiences", "Scalable Systems", "Modern Interfaces"];

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <Badge variant="secondary" className="mb-6 font-mono text-xs">
              Available for new projects
            </Badge>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="text-primary">Aashish Kumar</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full Stack Developer
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.3}>
            <div className="text-lg md:text-xl text-muted-foreground mb-8 h-8">
              I build{" "}
              <TypingAnimation
                words={typingWords}
                className="text-foreground font-medium"
              />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.4}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              I craft digital experiences that are both beautiful and functional. 
              With 5+ years of experience, I help businesses bring their ideas to life 
              through clean code and thoughtful design.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={scrollToContact} data-testid="button-hero-contact">
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-download-resume"
              >
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.7}>
            <button
              onClick={scrollToProjects}
              className="mt-16 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mx-auto group"
              data-testid="button-scroll-projects"
            >
              <span className="text-sm">View my work</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
