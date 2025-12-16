import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Eye, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "hr-analytics-dashboard",
      title: "HR Analytics Dashboard",
      description: "An interactive Tableau dashboard built to consolidate HR data and reveal key workforce metrics and trends.",
      category: "Business Intelligence",
      image: "/uploads/HR_Dashboard/RHdash.png",
      technologies: ["Tableau", "Python"],
      featured: true
    },
    {
      id: "customer-segmentation-tableau",
      title: "Marketing Analytics for an E-commerce Website",
      description: "Tableau dashboard performing RFM segmentation and cohort analysis for marketing campaigns.",
      category: "Data Visualization",
      image: "/uploads/Marketing_Analytics/Overview.PNG",
      technologies: ["Tableau", "Python", "Pandas", "SQL"],
      featured: true
    },
    {
      id: "gitex-scraping-analysis", // UPDATED ID to match above
      title: "Gitex Exhibitor Analysis",
      description: "Web scraping and Power BI dashboard to analyze Gitex exhibitors and trends.",
      category: "Data Science",
      image: "/uploads/Gitex_Web_Scraping/dashboard_preview.png",
      technologies: ["Python", "Power BI", "Web Scraping"],
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects Showcase
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of data analysis, visualization, and development projects demonstrating technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-card transition-all duration-500 animate-fade-in border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container - Now a Link */}
              <Link to={`/projects/${project.id}`} className="block relative overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay on hover only, no buttons */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <CardHeader className="p-4 pb-2">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                    {project.category}
                  </Badge>
                </div>
                <Link to={`/projects/${project.id}`}>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </CardTitle>
                </Link>
              </CardHeader>

              <CardContent className="p-4 pt-0 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full group h-8 text-xs" >
                      <Eye className="mr-2 h-3 w-3 group-hover:scale-110 transition-transform" />
                      View Details
                    </Button>
                  </Link>
                  <a
                    href="https://github.com/hichambendaoud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-primary/10">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;