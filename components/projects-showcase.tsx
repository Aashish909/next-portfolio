import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./scroll-animation";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "CloudFlow Analytics",
    description: "A real-time analytics dashboard for cloud infrastructure monitoring. Built with React, TypeScript, and D3.js for beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "D3.js", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "DevConnect",
    description: "A social platform for developers to share projects and collaborate. Features real-time chat and project showcases.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "TaskMaster Pro",
    description: "An intelligent task management system with AI-powered prioritization and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "EcoTrack",
    description: "Carbon footprint tracking app helping users make sustainable choices with personalized insights.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "ML"],
    liveUrl: "#",
  },
];

function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <Card
      className={`group overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 ${className}`}
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-black text-sm font-medium rounded-md hover:bg-white transition-colors"
              data-testid={`link-live-${project.id}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-md hover:bg-white/30 transition-colors"
              data-testid={`link-github-${project.id}`}
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`text-project-desc-${project.id}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-mono">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ProjectsShowcase() {
  const [showAll, setShowAll] = useState(false);
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const extraProjects = otherProjects.slice(2);
  const hasExtraProjects = extraProjects.length > 0;

  return (
    <section id="projects" className="py-16 md:py-24" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-primary" data-testid="text-projects-label">
                01.
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              A selection of projects I have worked on, showcasing my expertise in building modern web applications.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {featuredProject && (
            <ScrollAnimation className="lg:col-span-3" delay={0.1}>
              <Card
                className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 h-full"
                data-testid="card-featured-project"
              >
                <div className="relative">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                    <div className="max-w-xl bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-5 shadow-2xl text-white">
                      <Badge className="mb-3 bg-primary/90 text-primary-foreground">Featured</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2" data-testid="text-featured-title">
                        {featuredProject.title}
                      </h3>
                      <p className="text-white/80 mb-4 max-w-xl" data-testid="text-featured-desc">
                        {featuredProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredProject.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/15 text-white border-white/20 text-xs font-mono">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {featuredProject.liveUrl && (
                          <a
                            href={featuredProject.liveUrl}
                            className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-white/90 transition-colors"
                            data-testid="link-featured-live"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        )}
                        {featuredProject.githubUrl && (
                          <a
                            href={featuredProject.githubUrl}
                            className="flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-md hover:bg-white/30 transition-colors"
                            data-testid="link-featured-github"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          )}

          <StaggerContainer className="lg:col-span-2 grid gap-6" staggerDelay={0.15}>
            {otherProjects.slice(0, 2).map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {hasExtraProjects && (
          <>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted/50 transition-colors"
                data-testid="button-toggle-projects"
              >
                {showAll ? "Show less" : `Show more (${extraProjects.length})`}
              </button>
            </div>

            {showAll && (
              <StaggerContainer className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {extraProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </>
        )}
      </div>
    </section>
  );
}
