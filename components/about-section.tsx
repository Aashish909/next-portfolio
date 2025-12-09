import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, GraduationCap, Download } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./scroll-animation";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const highlights = [
  "Full Stack Development",
  "Cloud Architecture",
  "UI/UX Design",
  "Agile Methodologies",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="font-mono text-sm text-primary" data-testid="text-about-label">
              02.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <ScrollAnimation delay={0.1}>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=faces"
                    alt="Aashish Kumar - Full Stack Developer"
                    className="w-full h-full object-cover"
                    data-testid="img-profile"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-auto md:-left-4 bg-card border border-card-border rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0 lg:max-w-none" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <Card className="p-4 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="space-y-6">
            <ScrollAnimation delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-4" data-testid="text-name">Aashish Kumar</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-bio">
                  I am a passionate Full Stack Developer with over 5 years of experience building modern web applications. 
                  I specialize in creating scalable, performant solutions using cutting-edge technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in software development started with a curiosity about how things work on the web. 
                  Today, I help startups and enterprises build products that users love. When I am not coding, 
                  you can find me contributing to open-source projects or mentoring aspiring developers.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>Senior Developer at TechCorp Inc.</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>BS Computer Science, Stanford University</span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <Button asChild data-testid="button-about-resume">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
