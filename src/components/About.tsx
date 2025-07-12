import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Professional iOS development with cutting-edge technologies"
    },
    {
      icon: Smartphone,
      title: "Native iOS Expert",
      description: "Swift, SwiftUI, UIKit, and advanced iOS frameworks"
    },
    {
      icon: Award,
      title: "Problem Solver",
      description: "Ranked in top coding challenges and competitive programming"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Leadership experience and collaborative development"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Crafting Exceptional iOS Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated iOS Developer at Bobble AI, passionate about creating dynamic and user-centric mobile applications 
            that make a real impact. With expertise in the complete iOS ecosystem, I bring ideas to life through elegant code and intuitive design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as a Software Developer at Bobble AI, I specialize in iOS SDK development, 
              custom keyboard implementations, and iOS frameworks. My expertise spans from Swift and Objective-C 
              to advanced topics like ARKit, Core Data, and multithreading.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I hold a B.Tech in Computer Science from Lovely Professional University, where I was actively 
              involved in the Grip Club and Triple T Club, serving as Student Head Coordinator. This experience 
              honed my leadership and collaborative skills.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Swift", "SwiftUI", "UIKit", "Objective-C", "ARKit", "Core Data", "Firebase", "Git"].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;