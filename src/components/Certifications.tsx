import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, GraduationCap } from "lucide-react";

const Certifications = () => {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "University of Technology",
      period: "2020 - 2023",
      description: "Specialized in data analytics and machine learning",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Associate Degree in Computer Science",
      institution: "Community College",
      period: "2018 - 2020",
      description: "Foundation in programming and algorithms",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "September 2023",
      icon: "💎",
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      id: 2,
      title: "Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "July 2023",
      icon: "☁️",
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
    },
    {
      id: 3,
      title: "Mastering Power BI",
      issuer: "Udemy",
      date: "May 2023",
      icon: "🎓",
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="mr-3 h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-500 animate-fade-in border-l-4 border-l-primary/50 hover:border-l-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground italic">{edu.description}</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="mr-3 h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="group text-center hover:shadow-card transition-all duration-500 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl mb-4 ${cert.color}`}>
                    {cert.icon}
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-primary font-semibold">{cert.issuer}</p>
                  <Badge variant="outline" className="bg-secondary">
                    {cert.date}
                  </Badge>
                  <Button variant="outline" size="sm" className="w-full group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Verify
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;