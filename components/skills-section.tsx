import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  Terminal,
  Smartphone,
  Server,
} from "lucide-react";
import { SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiDocker, SiAmazonwebservices, SiTailwindcss, SiGit, SiNextdotjs, SiPython, SiMongodb, SiGraphql } from "react-icons/si";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./scroll-animation";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon?: React.ReactNode }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "React", icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-4 w-4 text-[#3178C6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" /> },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4 text-[#339933]" /> },
      { name: "Python", icon: <SiPython className="h-4 w-4 text-[#3776AB]" /> },
      { name: "GraphQL", icon: <SiGraphql className="h-4 w-4 text-[#E10098]" /> },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="h-4 w-4 text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-4 w-4 text-[#47A248]" /> },
      { name: "Redis" },
      { name: "Prisma" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices className="h-4 w-4 text-[#FF9900]" /> },
      { name: "Docker", icon: <SiDocker className="h-4 w-4 text-[#2496ED]" /> },
      { name: "Vercel" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Tools",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Postman" },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    skills: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "Flutter" },
      { name: "PWA" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24" data-testid="section-skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="font-mono text-sm text-primary" data-testid="text-skills-label">
              03.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Technologies</h2>
          </div>

          <p className="text-muted-foreground max-w-2xl mb-10">
            I work with a modern tech stack to build robust, scalable applications. Here are the technologies I use daily.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <Card
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      {skill.icon ? (
                        skill.icon
                      ) : (
                        <div className="h-4 w-4 rounded-full bg-muted flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
