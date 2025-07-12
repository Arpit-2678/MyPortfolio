import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Code, 
  Database, 
  Globe, 
  Layers, 
  GitBranch,
  Zap,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "iOS Development",
      icon: Smartphone,
      skills: [
        { name: "Swift", level: 95 },
        { name: "SwiftUI", level: 90 },
        { name: "UIKit", level: 88 },
        { name: "Objective-C", level: 80 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        { name: "ARKit", level: 85 },
        { name: "Core Data", level: 82 },
        { name: "Firebase", level: 88 },
        { name: "Combine", level: 80 }
      ]
    },
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Swift", level: 95 },
        { name: "JavaScript", level: 78 },
        { name: "Java", level: 75 },
        { name: "C++", level: 72 }
      ]
    },
    {
      category: "Database & Backend",
      icon: Database,
      skills: [
        { name: "Firebase", level: 88 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Realm", level: 82 }
      ]
    },
    {
      category: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 78 },
        { name: "Node.js", level: 70 },
        { name: "Flutter", level: 72 }
      ]
    },
    {
      category: "Development Tools",
      icon: GitBranch,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Xcode", level: 95 },
        { name: "Jira", level: 85 },
        { name: "SPM", level: 88 }
      ]
    }
  ];

  const specializations = [
    { name: "SDK Development", icon: Zap },
    { name: "Custom Keyboards", icon: Code },
    { name: "AR Applications", icon: Brain },
    { name: "Performance Optimization", icon: Zap },
    { name: "Multithreading", icon: Layers },
    { name: "Socket Programming", icon: Globe }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technology Stack & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set built through hands-on experience in iOS development, 
            backend technologies, and modern development practices.
          </p>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Specializations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <Card key={index} className="p-4 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{spec.name}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Recognition & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "4★ on Codechef", subtitle: "Problem Solving" },
              { title: "Expert at Codeforces", subtitle: "Competitive Programming" },
              { title: "Gold Badge C++", subtitle: "HackerRank" },
              { title: "Top 534 Rank", subtitle: "March Long Challenge 2021" }
            ].map((achievement, index) => (
              <Card key={index} className="p-4 bg-primary/5 border-primary/20 text-center">
                <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;