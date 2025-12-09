import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { SiReact, SiTypescript } from "react-icons/si";
import { ScrollAnimation } from "./scroll-animation";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>&copy; {currentYear} Aashish Kumar.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                  data-testid={`link-footer-${link.name.toLowerCase()}`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using</span>
              <SiReact className="h-4 w-4 text-[#61DAFB]" />
              <span>&</span>
              <SiTypescript className="h-4 w-4 text-[#3178C6]" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
}
