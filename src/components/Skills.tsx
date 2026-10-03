import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, GitBranch, Layers3, Radio, Sparkles, Wrench } from "lucide-react";

const groups = [
  { icon: Code2, title: "Core iOS", skills: ["Swift 5.9", "SwiftUI", "UIKit", "Objective-C", "StoreKit 2", "Push Notifications"] },
  { icon: Layers3, title: "Architecture", skills: ["TCA", "RxTCA", "MVVM", "Clean Architecture", "Coordinator", "VIPER"] },
  { icon: Sparkles, title: "Concurrency", skills: ["async/await", "Actors", "TaskGroup", "Combine", "RxSwift", "GCD"] },
  { icon: Radio, title: "Networking & Real-time", skills: ["URLSession", "Alamofire", "REST", "WebSocket", "Centrifugo", "SSL Pinning"] },
  { icon: Database, title: "Data & ML", skills: ["Core Data", "Realm", "Core ML", "TensorFlow Lite", "coremltools", "Keychain"] },
  { icon: Wrench, title: "Engineering", skills: ["SPM", "XCTest", "Fastlane", "Jenkins", "Instruments", "Crashlytics", "Sentry", "SwiftLint"] },
];

const Skills = () => (
  <section id="skills" className="section-shell bg-white/[0.015]">
    <div className="section-container">
      <div className="section-heading">
        <Badge variant="outline" className="section-eyebrow">Tech stack</Badge>
        <h2 className="section-title">The tools behind the product.</h2>
        <p className="section-copy">
          A focused stack built around shipping native iOS products, not collecting technology badges.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, skills }) => (
          <Card key={title} className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-glow">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
        <GitBranch className="h-4 w-4 text-primary" />
        <span>Git</span><span>·</span><span>GitHub</span><span>·</span><span>Fastlane</span><span>·</span><span>Jenkins</span><span>·</span><span>Instruments</span>
      </div>
    </div>
  </section>
);

export default Skills;
