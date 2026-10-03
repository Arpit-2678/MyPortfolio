import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, CalendarDays, ArrowUpRight } from "lucide-react";

const roles = [
  {
    company: "Ajaib",
    position: "Senior iOS Developer",
    duration: "Oct 2025 — Present",
    location: "Jakarta / Remote",
    description: "Building iOS experiences for a multi-asset investment platform, with a focus on architecture, trading flows, and real-time product infrastructure.",
    achievements: [
      "Built a config-driven Global Navigation Bar replacing 5+ legacy per-screen implementations; conversion reached 83.90% vs 81.30% target.",
      "Unified multi-asset buying flows across stocks, mutual funds, US stocks, bonds, and crypto using shared RxTCA architecture.",
      "Migrated Portfolio and Kamus experiences from UIKit toward SwiftUI and TCA.",
      "Worked on the migration from legacy WebSocket infrastructure to a Centrifugo-based real-time client layer.",
    ],
    technologies: ["Swift", "SwiftUI", "TCA", "RxTCA", "WebSocket", "Centrifugo", "Firebase Remote Config"],
  },
  {
    company: "Bobble AI",
    position: "iOS Developer",
    duration: "Mar 2022 — Sep 2025",
    location: "Gurugram, India",
    description: "Worked across consumer iOS products and enterprise SDKs, with ownership spanning architecture, performance, ML, and custom keyboard technology.",
    achievements: [
      "Improved crash-free users from 68% to 93% and crash-free sessions from 92% to 99.5%.",
      "Built and shipped an enterprise custom iOS keyboard SDK through Swift Package Manager for 5+ client apps.",
      "Migrated on-device ML workflows from TensorFlow Lite toward Core ML using coremltools.",
      "Built an in-app LLM chatbot over REST and contributed to product changes associated with 100% DAU growth and 20% higher retention.",
    ],
    technologies: ["Swift", "SwiftUI", "UIKit", "SPM", "Core ML", "TFLite", "Combine", "REST", "Firebase"],
  },
];

const Experience = () => (
  <section id="experience" className="section-shell">
    <div className="section-container">
      <div className="section-heading">
        <Badge variant="outline" className="section-eyebrow">Experience</Badge>
        <h2 className="section-title">Four years of shipping, learning, and iterating.</h2>
        <p className="section-copy">A timeline of the environments where I’ve worked on real users, real constraints, and real production systems.</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:block" />
        <div className="space-y-8">
          {roles.map((role, index) => (
            <div key={role.company} className="relative md:pl-12">
              <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background shadow-glow md:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <Card className="glass-card p-7 sm:p-9 transition-all duration-300 hover:border-primary/20 hover:shadow-glow">
                <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                      <Building2 className="h-4 w-4" />
                      {role.company}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{role.position}</h3>
                    <p className="mt-2 max-w-2xl text-muted-foreground">{role.description}</p>
                  </div>
                  <div className="shrink-0 text-sm text-muted-foreground lg:text-right">
                    <div className="flex items-center gap-2 lg:justify-end"><CalendarDays className="h-4 w-4" />{role.duration}</div>
                    <div className="mt-1">{role.location}</div>
                  </div>
                </div>

                <div className="mt-7 grid gap-2">
                  {role.achievements.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm leading-6 text-muted-foreground">
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full border-primary/10 bg-primary/5 text-primary">{tech}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Card className="glass-card mt-10 p-7 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-primary">Education</p>
            <h3 className="mt-1 text-xl font-semibold">B.Tech in Computer Science Engineering</h3>
            <p className="mt-1 text-sm text-muted-foreground">Lovely Professional University · Punjab, India</p>
          </div>
          <Badge variant="outline" className="w-fit border-border/70">Computer Science</Badge>
        </div>
      </Card>
    </div>
  </section>
);

export default Experience;
