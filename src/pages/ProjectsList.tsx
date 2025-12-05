import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ProjectsList = () => {
  const allProjects = [
    {
      id: "sales-performance-dashboard",
      title: "HR Analytics Dashboard (Tableau Project)",
      description: "Interactive Power BI report showing sales trends, regional performance, and KPI tracking.",
      category: "Business Intelligence",
      image: "/lovable-uploads/HR_Dashboard/RHdash.png",
      technologies: ["Tableau", "Python"],
      featured: true
    },
    {
      id: "customer-segmentation-tableau",
      title: "Marketing Analytics for an E-commerce Website",
      description: "Tableau dashboard performing RFM segmentation and cohort analysis for marketing campaigns.",
      category: "Data Visualization",
      image: "/lovable-uploads/Marketing_Analytics/Overview.PNG",
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
      title: "Hospital Patient Data Analysis",
      description: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      category: "Data Science",
      image: "/lovable-uploads/Hospital_Patien/Dashboard_Overview.PNG",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      featured: false
    },
     {
      id: "data-visualization-platform1",
      title: "Gitex Web Scraping & Data Visualization",
      description: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      category: "Data Science",
      image: "/lovable-uploads/Gitex_Web_Scraping/dashboard_preview.png",
      technologies: ["Power BI", "Python", "excel"],
      featured: false
    },
    {
      id: "machine-learning-pipeline",
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for predictive analytics using Python and scikit-learn.",
      category: "Machine Learning",
      image: "/lovable-uploads/d930e88d-54f3-467f-aeca-3f831210e27d.png",
      technologies: ["Python", "scikit-learn", "Pandas", "Flask"],
      featured: false
    },
    {
      id: "real-time-analytics",
      title: "Real-time Analytics Dashboard",
      description: "Real-time data analytics dashboard using Apache Kafka and Elasticsearch.",
      category: "Real-time Analytics",
      image: "/lovable-uploads/7bcaa7dc-b7f5-4790-a46a-428bdb2b0179.png",
      technologies: ["Kafka", "Elasticsearch", "React", "Python"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of data analysis, visualization, and development projects showcasing technical expertise across various domains
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-card transition-all duration-500 animate-fade-in border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-accent text-white border-0">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Link to={`/projects/${project.id}`} className="flex-1">
                        <Button size="sm" variant="glass" className="w-full">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </Link>
                      <a
                        href="https://github.com/hichambendaoud" // Replace with project.github if available
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="glass">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Link to={`/projects/${project.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full group">
                        <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Details
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;