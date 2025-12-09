import { ScrollAnimation } from "./scroll-animation";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
];

export function CompaniesSection() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-muted/20" data-testid="section-companies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Built with a modern tech stack
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                data-testid={`logo-${tech.name.toLowerCase()}`}
              >
                <tech.icon className="h-6 w-6 md:h-8 md:w-8" />
                <span className="font-semibold text-sm md:text-base hidden sm:inline">{tech.name}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
