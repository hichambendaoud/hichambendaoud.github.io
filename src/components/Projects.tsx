import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "sales-performance-dashboard",
      title: "Sales Performance Power BI Dashboard",
      description: "Interactive Power BI report showing sales trends, regional performance, and KPI tracking.",
      category: "Business Intelligence",
      image: "/lovable-uploads/d930e88d-54f3-467f-aeca-3f831210e27d.png",
      technologies: ["Power BI", "SQL", "DAX", "Azure Data Factory"],
      featured: true
    },
    {
      id: "customer-segmentation-tableau",
      title: "Customer Segmentation with Tableau",
      description: "Tableau dashboard performing RFM segmentation and cohort analysis for marketing campaigns.",
      category: "Data Visualization",
      image: "/lovable-uploads/7bcaa7dc-b7f5-4790-a46a-428bdb2b0179.png",
      technologies: ["Tableau", "Python", "Pandas", "SQL"],
      featured: true
    },
    {
      id: "etl-pipeline-talend",
      title: "ETL Pipeline with Talend",
      description: "Automated ETL pipeline for customer data integration using Talend Open Studio.",
      category: "Data Engineering",
      image: "/lovable-uploads/47c40655-58cc-4a2c-a7ee-90e66e510247.png",
      technologies: ["Talend", "SQL", "Python", "Azure Data Factory"],
      featured: false
    },
    {
      id: "data-visualization-platform",
      title: "Custom Data Visualization Platform",
      description: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      category: "Data Science",
      image: "/lovable-uploads/3b82656f-6846-4cca-bdc7-e81d0184db2e.png",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects Showcase
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of data analysis, visualization, and development projects demonstrating technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-card transition-all duration-500 animate-fade-in border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="glass" className="flex-1">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button size="sm" variant="glass">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <Button variant="outline" className="w-full group">
                      <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      View Details
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
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