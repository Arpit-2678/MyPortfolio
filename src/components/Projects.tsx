import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  ShoppingBag, 
  Car, 
  Github, 
  ExternalLink,
  Smartphone,
  Database,
  Zap
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chat Connect",
      description: "A comprehensive real-time messaging application for iOS featuring end-to-end encryption, push notifications, and offline messaging capabilities.",
      longDescription: "Led the complete development lifecycle of ChatConnect, architecting scalable solutions for thousands of concurrent users. Implemented advanced features including push notifications, offline messaging, and robust security measures.",
      icon: MessageCircle,
      technologies: ["Swift", "Firebase", "Realtime Database", "Push Notifications", "Encryption"],
      features: [
        "Real-time messaging with Firebase Realtime Database",
        "Scalable architecture handling thousands of concurrent users", 
        "Advanced push notifications and offline messaging",
        "End-to-end encryption for secure conversations",
        "Efficient data synchronization and seamless message delivery"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "ARShopify", 
      description: "An innovative augmented reality shopping application enabling virtual try-on experiences for clothing and accessories using advanced ARKit capabilities.",
      longDescription: "Created an immersive AR shopping experience using ARKit and SwiftUI. Integrated backend APIs for real-time product data and implemented smooth animations for enhanced user engagement.",
      icon: ShoppingBag,
      technologies: ["ARKit", "SwiftUI", "Backend APIs", "Core Animation", "3D Rendering"],
      features: [
        "Virtual try-on capabilities for clothing and accessories",
        "ARKit integration for immersive shopping experience",
        "Real-time product data synchronization with backend APIs",
        "Smooth animations and realistic 3D rendering",
        "Positive user feedback leading to increased engagement and sales"
      ],
      color: "from-purple-500 to-pink-500", 
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Ride Saver",
      description: "An intelligent ride-sharing application featuring advanced route optimization algorithms and real-time driver-rider matching system.",
      longDescription: "Developed a sophisticated ride-sharing platform implementing Dijkstra's algorithm and A* search for optimal route calculations. Features dynamic pricing and intelligent matching algorithms.",
      icon: Car,
      technologies: ["Swift", "Objective-C", "Route Algorithms", "Real-time Data", "Location Services"],
      features: [
        "Advanced route optimization using Dijkstra's and A* algorithms",
        "Real-time traffic data integration for dynamic route planning",
        "Intelligent driver-rider matching based on proximity and preferences", 
        "Significant improvements in travel time and resource utilization",
        "Enhanced customer satisfaction through optimized experiences"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Innovative iOS Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of impactful mobile applications demonstrating expertise in iOS development, 
            AR technologies, and scalable architecture design.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Project Info */}
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${project.bgColor} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                  </div>

                  {/* Visual Section */}
                  <div className="lg:col-span-2 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 mx-auto">
                        <Icon className="h-16 w-16 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-xl mb-2">{project.title}</h4>
                      <p className="text-white/80 text-sm">{project.description}</p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent just a fraction of my development experience. I'm always excited to take on new challenges and create innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default" size="lg" className="group">
                <Github className="mr-2 h-4 w-4" />
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Collaborate
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;