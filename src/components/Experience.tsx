import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "ETL Pipeline Design Internship",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jun 2023 - Sep 2023",
      description: "Designed and implemented ETL pipelines for customer data integration.",
      achievements: [
        "Reduced data processing time by 40% through optimized SQL queries and pipeline architecture",
        "Implemented data quality checks that improved data accuracy by 25%",
        "Developed documentation and training materials for the ETL process"
      ],
      skills: ["Talend", "SQL", "Python", "Azure Data Factory"]
    },
    {
      id: 2,
      title: "Power BI Dashboard Developer",
      company: "Data Insights Corp.",
      location: "Remote",
      period: "Jan 2023 - May 2023",
      description: "Created interactive Power BI dashboards for sales and marketing teams.",
      achievements: [
        "Built 15+ interactive dashboards that reduced reporting time by 70%",
        "Implemented DAX measures that accurately calculated KPIs across multiple dimensions",
        "Trained 20+ team members on dashboard usage and data interpretation"
      ],
      skills: ["Power BI", "DAX", "SQL", "Excel"]
    }
  ];

  return (
    <section id="experience" className="py-16 lg:py-24 bg-gradient-to-r from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience Highlights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experiences in data analysis, ETL development, and machine learning
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.id} 
              className="group hover:shadow-card transition-all duration-500 animate-fade-in border-l-4 border-l-primary/50 hover:border-l-primary"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {experience.title}
                    </CardTitle>
                    <div className="flex items-center text-foreground font-semibold mt-2">
                      <Building className="mr-2 h-4 w-4 text-primary" />
                      {experience.company}
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-lg">
                  {experience.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Skills Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;