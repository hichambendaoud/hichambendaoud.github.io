import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";

const ProjectDetail = () => {
  const { slug } = useParams();

  // Mock project data - in a real app, this would come from an API or CMS
  const projects: Record<string, any> = {
    "sales-performance-dashboard": {
      title: "Sales Performance Power BI Dashboard",
      category: "Business Intelligence",
      description: "Interactive Power BI report showing sales trends, regional performance, and KPI tracking.",
      fullDescription: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      image: "/lovable-uploads/d930e88d-54f3-467f-aeca-3f831210e27d.png",
      technologies: ["Power BI", "SQL", "DAX", "Azure Data Factory"],
      problem: "Existing visualization tools couldn't handle the complexity and scale of multi-dimensional datasets required for advanced data exploration.",
      solution: "Developed a custom visualization platform using D3.js for interactive charts and Python for data processing, enabling complex multi-dimensional data exploration.",
      results: [
        "Processed datasets 10x larger than previous tools",
        "Reduced analysis time from days to hours",
        "Enabled discovery of previously hidden data patterns",
        "Adopted by 3 major research institutions"
      ],
      links: {
        demo: "#",
        code: "#"
      }
    },
    "customer-segmentation-tableau": {
      title: "Customer Segmentation with Tableau",
      category: "Data Visualization",
      description: "Tableau dashboard performing RFM segmentation and cohort analysis for marketing campaigns.",
      fullDescription: "Comprehensive customer segmentation analysis using RFM methodology and cohort analysis to identify high-value customer segments for targeted marketing campaigns.",
      image: "/lovable-uploads/7bcaa7dc-b7f5-4790-a46a-428bdb2b0179.png",
      technologies: ["Tableau", "Python", "Pandas", "SQL"],
      problem: "Marketing team needed to identify high-value customer segments for targeted campaigns but lacked proper segmentation tools.",
      solution: "Built a comprehensive Tableau dashboard with RFM segmentation and cohort analysis to identify customer patterns and lifetime value.",
      results: [
        "Identified 5 distinct customer segments",
        "Improved campaign targeting by 45%",
        "Increased customer retention by 30%",
        "Reduced customer acquisition costs by 25%"
      ],
      links: {
        demo: "#",
        code: "#"
      }
    },
    "etl-pipeline-talend": {
      title: "ETL Pipeline with Talend",
      category: "Data Engineering",
      description: "Automated ETL pipeline for customer data integration using Talend Open Studio.",
      fullDescription: "End-to-end ETL pipeline design and implementation using Talend Open Studio for automated customer data integration from multiple sources.",
      image: "/lovable-uploads/47c40655-58cc-4a2c-a7ee-90e66e510247.png",
      technologies: ["Talend", "SQL", "Python", "Azure Data Factory"],
      problem: "Manual data integration process was time-consuming and error-prone, causing delays in reporting and analysis.",
      solution: "Designed and implemented automated ETL pipelines using Talend Open Studio with robust error handling and data quality checks.",
      results: [
        "Reduced data processing time by 40%",
        "Improved data accuracy by 25%",
        "Automated daily data refresh process",
        "Implemented comprehensive error logging"
      ],
      links: {
        demo: "#",
        code: "#"
      }
    },
    "data-visualization-platform": {
      title: "Custom Data Visualization Platform",
      category: "Data Science",
      description: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      fullDescription: "Built a sophisticated data visualization platform from scratch using modern web technologies to handle complex, multi-dimensional datasets that traditional tools couldn't manage effectively.",
      image: "/lovable-uploads/3b82656f-6846-4cca-bdc7-e81d0184db2e.png",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      problem: "Traditional visualization tools couldn't handle the complexity and scale of multi-dimensional datasets required for advanced research.",
      solution: "Developed a custom platform with D3.js for interactive visualizations and Python/Flask backend for real-time data processing.",
      results: [
        "Processed datasets 10x larger than previous tools",
        "Enabled real-time collaborative analysis",
        "Reduced insight discovery time by 60%",
        "Adopted by multiple research institutions"
      ],
      links: {
        demo: "#",
        code: "#"
      }
    }
  };

  const project = projects[slug || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link to="/projects" className="inline-block mb-8 animate-fade-in">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {project.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" className="group">
                <Eye className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
              <Button variant="outline" className="group">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12 animate-fade-in">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          {/* Project Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Problem Section */}
              <Card className="border-l-4 border-l-destructive/50 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </CardContent>
              </Card>

              {/* Solution Section */}
              <Card className="border-l-4 border-l-primary/50 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="border-l-4 border-l-accent/50 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Results & Impact</h3>
                  <ul className="space-y-3">
                    {project.results.map((result: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Links */}
              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">Project Links</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;