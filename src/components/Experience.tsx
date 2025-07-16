import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Bobble AI",
    position: "Software Developer",
    location: "Gurugram, Haryana, India",
    duration: "March 2022 - Present",
    description: "Leading iOS SDK development for keyboard solutions with millions of users worldwide.",
    responsibilities: [
      "Developed and delivered standalone custom keyboard SDK within tight one-week deadline, showcasing efficiency and time management skills",
      "Seamlessly integrated the SDK with Swift Package Manager (SPM), ensuring compatibility with latest Swift code standards for optimal performance",
      "Played key role in driving revenue growth by optimizing the SDK to support seamless integrations for clients, enhancing monetization opportunities",
      "Increased DAU (Daily Active Users) by 100% and improved user retention by 20% through strategic feature implementations",
      "Designed and implemented custom iOS keyboard using Swift programming language and Objective C",
      "Gained expertise with iOS frameworks such as UIKit, TextKit, CoreData, and experience with keyboard extension and internationalization"
    ],
    technologies: [
      "Swift", "Objective-C", "UIKit", "TextKit", "Core Data", 
      "Swift Package Manager", "Keyboard Extensions", "iOS SDK"
    ]
  };

  const education = {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science Engineering",
    location: "Punjab, India",
    activities: "Grip Club, Triple T Club - Student Head Coordinator",
    description: "Active participation in technical clubs and leadership roles, developing both technical and soft skills."
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight py-2">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building expertise through hands-on professional experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Experience Card */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{experience.position}</h3>
                      <p className="text-xl text-primary font-semibold">{experience.company}</p>
                    </div>
                    <div className="text-right text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Education & Side Info */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Education</h3>
                  <p className="text-primary font-semibold">{education.degree}</p>
                </div>
              </div>
              
              <p className="font-medium text-foreground mb-2">{education.institution}</p>
              <p className="text-sm text-muted-foreground mb-3">{education.location}</p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-accent mb-1">Activities & Leadership:</p>
                <p className="text-sm text-muted-foreground">{education.activities}</p>
              </div>
              
              <p className="text-sm text-muted-foreground">{education.description}</p>
            </Card>

            {/* Impact Stats */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-bold text-foreground mb-4">Professional Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">DAU Increase</span>
                  <span className="font-bold text-primary">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">User Retention</span>
                  <span className="font-bold text-primary">+20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">SDK Delivery</span>
                  <span className="font-bold text-primary">1 Week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-bold text-primary">2+ Years</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;