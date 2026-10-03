import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Gauge, Radio, Boxes } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, title: "Modern iOS", text: "Swift, SwiftUI, UIKit and pragmatic migration of legacy codebases." },
    { icon: Boxes, title: "Architecture", text: "TCA, RxTCA, MVVM, Clean Architecture and modular product design." },
    { icon: Radio, title: "Real-time", text: "WebSockets, Centrifugo and reactive data flows for live experiences." },
    { icon: Gauge, title: "Performance", text: "Crash reduction, concurrency, rendering and production observability." },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <Badge variant="outline" className="section-eyebrow">About me</Badge>
          <h2 className="section-title">I care about the details users don't have to think about.</h2>
          <p className="section-copy">
            I'm a Senior iOS Developer building production fintech and consumer products.
            My work sits at the intersection of product engineering, architecture, and performance:
            making complex systems feel simple on a small screen.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <Card className="glass-card p-8 sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Engineering philosophy</span>
            </div>
            <div className="space-y-6 text-muted-foreground leading-8">
              <p>
                At <span className="font-medium text-foreground">Ajaib</span>, I work on iOS experiences across
                trading and investment products, including shared navigation, multi-asset buying flows,
                SwiftUI/TCA migrations, and real-time infrastructure.
              </p>
              <p>
                Previously at <span className="font-medium text-foreground">Bobble AI</span>, I worked on
                consumer iOS products and an enterprise keyboard SDK, while improving stability,
                retention, and developer integration workflows.
              </p>
              <p>
                I enjoy taking ambiguous product problems, turning them into clear technical boundaries,
                and shipping solutions that remain maintainable after the launch.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Swift", "SwiftUI", "UIKit", "TCA", "Swift Concurrency", "WebSockets", "Core ML", "SPM"].map((skill) => (
                <Badge key={skill} variant="secondary" className="rounded-full border-primary/15 bg-primary/5 px-3 py-1 text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-glow">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
