import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="border-t border-white/10">
    <div className="section-container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-foreground">Arpit Dwivedi</p>
        <p className="mt-1 text-xs text-muted-foreground">Senior iOS Developer · Swift · SwiftUI · TCA</p>
      </div>
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a href="mailto:arpitdwivedi2611@gmail.com" aria-label="Email"><Mail className="h-4 w-4" /></a>
        </Button>
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a href="https://github.com/Arpit-2678" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
        </Button>
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a href="https://www.linkedin.com/in/arpit-dwivedi2678/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
        </Button>
        <Button variant="outline" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-2 rounded-full">
          <ArrowUp className="mr-2 h-4 w-4" /> Top
        </Button>
      </div>
    </div>
    <div className="border-t border-white/5 py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Arpit Dwivedi · Built with React, TypeScript & a lot of Swift thinking.
    </div>
  </footer>
);

export default Footer;
