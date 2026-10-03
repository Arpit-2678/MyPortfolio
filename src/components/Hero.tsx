import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-primary-glow/10 blur-3xl animate-float-delayed" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 rounded-full border-primary/25 bg-primary/10 px-4 py-1.5 text-primary backdrop-blur-xl">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
              Senior iOS Developer · 4+ years
            </Badge>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Swift · SwiftUI · UIKit · TCA
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-8xl">
              Building iOS products that feel{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                native.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Senior iOS engineer focused on production fintech and consumer apps,
              modern architecture, real-time systems, SDKs, and performance.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={() => scrollToSection("projects")} className="rounded-full px-6 group">
                Explore my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="rounded-full border-border/70 bg-background/30 px-6 backdrop-blur-xl">
                <Mail className="mr-2 h-4 w-4" />
                Let's talk
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a href="https://github.com/Arpit-2678" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/arpit-dwivedi2678/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="h-px w-12 bg-border" />
              <span className="text-sm text-muted-foreground">New Delhi · IST</span>
            </div>
          </div>

          <div className="relative hidden lg:block animate-slide-up">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  production.swift
                </div>
              </div>

              <div className="space-y-3 px-2 py-7 font-mono text-sm leading-7">
                <p><span className="text-accent">struct</span> <span className="text-primary-glow">PortfolioFeature</span> {"{"}</p>
                <p className="pl-5"><span className="text-muted-foreground">let</span> architecture = <span className="text-emerald-300">"TCA"</span></p>
                <p className="pl-5"><span className="text-muted-foreground">let</span> ui = <span className="text-emerald-300">"SwiftUI"</span></p>
                <p className="pl-5"><span className="text-muted-foreground">let</span> realtime = <span className="text-emerald-300">true</span></p>
                <p className="pl-5"><span className="text-muted-foreground">let</span> scale = <span className="text-emerald-300">"production"</span></p>
                <p>{"}"}</p>
                <div className="mt-7 grid grid-cols-2 gap-3 font-sans">
                  {[
                    ["93%", "crash-free users"],
                    ["99.5%", "crash-free sessions"],
                    ["100%", "DAU growth"],
                    ["4+", "years shipping iOS"]
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="text-xl font-semibold text-foreground">{value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => scrollToSection("about")} className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex">
          Scroll to explore <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
