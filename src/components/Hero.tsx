import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/10">
            Available for Opportunities
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            Arpit Dwivedi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            iOS Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate iOS Developer with 2+ years of experience crafting dynamic, 
            user-centric mobile applications. Specialized in Swift, SwiftUI, and cutting-edge iOS frameworks.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button 
              variant="glow" 
              size="icon"
              asChild
              className="rounded-full"
            >
              <a href="mailto:arpitdwivedi2611@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="glow" 
              size="icon"
              asChild
              className="rounded-full"
            >
              <a href="https://github.com/arpitdwivedi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="glow" 
              size="icon"
              asChild
              className="rounded-full"
            >
              <a href="https://linkedin.com/in/arpitdwivedi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;