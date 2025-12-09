import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="navigation-header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-lg font-semibold tracking-tight"
            data-testid="link-logo"
          >
            aashish.kumar
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden md:inline-flex"
              data-testid="button-nav-resume"
            >
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="hidden md:inline-flex"
              data-testid="button-contact-nav"
            >
              Get in Touch
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 mt-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  asChild
                  data-testid="button-mobile-resume"
                >
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                </Button>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="flex-1"
                  data-testid="button-contact-mobile"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
