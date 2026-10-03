import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, GitBranch, Layers3, Radio, BrainCircuit, Smartphone } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Fintech Architecture",
    subtitle: "Trading & portfolio experiences",
    description: "A public-facing case study of the architecture patterns behind complex multi-asset iOS product flows—shared navigation, feature composition, and state-driven UI.",
    tags: ["SwiftUI", "TCA", "RxTCA", "Fintech"],
    icon: Layers3,
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Real-Time iOS",
    subtitle: "Live data infrastructure",
    description: "Patterns for building resilient real-time iOS features with WebSockets, Centrifugo, async streams, connection state, and predictable UI updates.",
    tags: ["WebSocket", "Centrifugo", "Concurrency", "AsyncStream"],
    icon: Radio,
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Enterprise iOS SDK",
    subtitle: "Custom keyboard architecture",
    description: "A technical showcase of designing a reusable keyboard SDK, packaging it with Swift Package Manager, and making integration practical across client apps.",
    tags: ["UIKit", "Swift", "SPM", "SDK Design"],
    icon: Smartphone,
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    number: "04",
    title: "TCA Handbook",
    subtitle: "Architecture notes & examples",
    description: "A living collection of practical notes around The Composable Architecture, state management, effects, dependency boundaries, and production patterns.",
    tags: ["TCA", "Swift", "Architecture"],
    icon: GitBranch,
    accent: "from-orange-500/20 via-amber-500/10 to-transparent",
    href: "https://github.com/Arpit-2678/TCA-Handbook",
  },
  {
    number: "05",
    title: "On-Device ML",
    subtitle: "Core ML migration patterns",
    description: "Exploring mobile ML pipelines, including TensorFlow Lite to Core ML conversion, model packaging, inference constraints, and iOS integration.",
    tags: ["Core ML", "TFLite", "coremltools"],
    icon: BrainCircuit,
    accent: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
];

const Projects = () => (
  <section id="projects" className="section-shell bg-white/[0.015]">
    <div className="section-container">
      <div className="section-heading">
        <Badge variant="outline" className="section-eyebrow">Selected work</Badge>
        <h2 className="section-title">Less “demo app”. More engineering.</h2>
        <p className="section-copy">
          A selection of public-safe case studies and technical work that shows how I think about production iOS systems.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          const content = (
            <Card className="group relative h-full overflow-hidden glass-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-glow">
              <div className={"absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 " + project.accent} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                </div>
                <p className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-primary">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <Badge key={tag} variant="secondary" className="rounded-full border-white/10 bg-white/[0.04] text-muted-foreground">{tag}</Badge>)}
                </div>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center text-sm font-medium text-primary">
                    View on GitHub <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </Card>
          );
          return project.href ? <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="block">{content}</a> : <div key={project.title}>{content}</div>;
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-primary/15 bg-primary/[0.045] p-7 text-center backdrop-blur-xl">
        <p className="text-sm text-muted-foreground">Want to see the code?</p>
        <Button asChild variant="outline" className="mt-4 rounded-full border-primary/20 bg-background/30">
          <a href="https://github.com/Arpit-2678" target="_blank" rel="noopener noreferrer">Explore GitHub <ArrowUpRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);

export default Projects;
