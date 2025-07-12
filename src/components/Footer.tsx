import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:arpitdwivedi2611@gmail.com",
      label: "Email"
    },
    {
      icon: Github,
      href: "https://github.com/arpitdwivedi",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/arpitdwivedi",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="relative bg-muted/20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Bio */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Arpit Dwivedi
            </h3>
            <p className="text-muted-foreground text-sm">
              iOS Developer passionate about creating exceptional mobile experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="glow"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © 2024 Arpit Dwivedi. Built with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            using React & TypeScript
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent" />
    </footer>
  );
};

export default Footer;