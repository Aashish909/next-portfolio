import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./scroll-animation";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    content: "Alex delivered an exceptional product that exceeded our expectations. Their attention to detail and technical expertise transformed our vision into reality. Highly recommended!",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    content: "Working with Alex was a game-changer for our startup. They brought not just coding skills, but strategic thinking that helped shape our product roadmap.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CTO",
    company: "DataFlow Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    content: "The quality of work and professionalism Alex brings to every project is outstanding. They consistently deliver clean, maintainable code on time.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-primary" data-testid="text-testimonials-label">
              05.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Clients Say</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-10">
            I have had the pleasure of working with amazing clients. Here&apos;s what they have to say about our collaboration.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card
                className="p-6 h-full flex flex-col hover-elevate transition-all duration-300"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
