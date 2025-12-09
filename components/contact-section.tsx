import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock, ArrowUpRight, Loader2 } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./scroll-animation";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com", username: "@alexchen" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", username: "in/alexchen" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", username: "@alexchen_dev" },
];

export function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via email directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="font-mono text-sm text-primary" data-testid="text-contact-label">
              06.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <ScrollAnimation delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am always interested in hearing about new opportunities, collaborations, or just having a chat about tech. 
                Feel free to reach out!
              </p>
            </ScrollAnimation>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              <StaggerItem>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:hello@alexchen.dev"
                      className="font-medium hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      hello@alexchen.dev
                    </a>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timezone</p>
                    <p className="font-medium">PST (GMT-8)</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <ScrollAnimation delay={0.4}>
              <div className="pt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Connect with me
                </h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-lg border border-border bg-card hover-elevate transition-all duration-300"
                      data-testid={`link-social-${link.name.toLowerCase()}`}
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <div>
                          <p className="font-medium text-sm">{link.name}</p>
                          <p className="text-xs text-muted-foreground">{link.username}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.2} direction="right">
            <Card className="p-6 md:p-8" data-testid="card-contact-form">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or just say hi..."
                            rows={5}
                            className="resize-none"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
