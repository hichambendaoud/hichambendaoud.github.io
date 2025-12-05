import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock project data
  const projects: Record<string, any> = {
    "sales-performance-dashboard": {
      title: "HR Analytics Dashboard (Tableau Project)",
      category: "Business Intelligence",
      description: "Interactive Power BI report showing sales trends, regional performance, and KPI tracking.",
      fullDescription: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      image: ["/lovable-uploads/HR_Dashboard/RHdash.png", "/lovable-uploads/HR_Dashboard/DashDetailes.png"],
      technologies: ["Tableau", "Python"],
      problem: "HR managers needed a unified data (hires, attrition, demographics, salaries, etc.) to make informed decisions. Without a single interface, analysts had to manually combine reports or use separate tools. The goal was to create an end-to-end HR analytics solution that delivers both high-level insights and detailed employee records in one place.",
      solution: "A synthetic HR dataset was generated using ChatGPT prompts and the Python Faker library to simulate realistic employee data (demographics, job details, salary, performance, attrition). Using Tableau, Baraa built an interactive dashboard with two main views. The summary dashboard displays key visualizations – total hires/active/terminations, year-over-year hiring vs attrition trends, breakdowns of headcount by department and location, and demographic analysis (gender ratio, age and education distributions, performance vs education). The details view lists all employee records (name, department, position, gender, age, education, salary, etc.) and allows filtering on any column. Custom icons and graphics (from Flaticon/Photopea) were used to match the dashboard theme, and Tableau’s interactive filters (by gender, location, status, hire date) enable dynamic exploration.",
      results: [
        "The final HR dashboard delivers actionable insights at a glance. For example, stakeholders can instantly see total headcount vs attrition over time, identify departments or locations with the highest turnover, and spot demographic or salary imbalances (e.g. gender pay gaps by education level). Users can drill down or filter data (e.g. by department or hire date) to investigate issues. This project demonstrates Tableau proficiency in transforming raw HR data into a polished BI solution, enabling more data-driven HR decisions (such as targeting retention efforts or optimizing compensation) that were previously difficult to see.",
      ],
      links: {
        demo: "#",
        code: "https://github.com/hichambendaoud/tableau-hr-dashboard"
      }
    },
    "customer-segmentation-tableau": {
      title: "Marketing Analytics for an E-commerce Website",
      category: "Data Visualization",
      description: "Tableau dashboard performing RFM segmentation and cohort analysis for marketing campaigns.",
      fullDescription: "Comprehensive customer segmentation analysis using RFM methodology and cohort analysis to identify high-value customer segments for targeted marketing campaigns.",
      image: ["/lovable-uploads/Marketing_Analytics/Overview.PNG", "/lovable-uploads/Marketing_Analytics/Social_Media.PNG","/lovable-uploads/Marketing_Analytics/conversion_Details.PNG","/lovable-uploads/Marketing_Analytics/Customer_Review.PNG"],
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
      image: ["/lovable-uploads/47c40655-58cc-4a2c-a7ee-90e66e510247.png"],
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
      title: "Hospital Patient Data Analysis",
      category: "Data Science",
      description: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      fullDescription: "Built a sophisticated data visualization platform from scratch using modern web technologies to handle complex, multi-dimensional datasets that traditional tools couldn't manage effectively.",
      image: ["/lovable-uploads/Hospital_Patien/Dashboard_Overview.PNG","/lovable-uploads/Hospital_Patien/Data_Model.PNG"],
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
    ,
    "data-visualization-platform1": {
      title: "Hospital Patient Data Analysis",
      category: "Data Science",
      description: "Custom data visualization platform using D3.js and Python for complex dataset analysis.",
      fullDescription: "Built a sophisticated data visualization platform from scratch using modern web technologies to handle complex, multi-dimensional datasets that traditional tools couldn't manage effectively.",
      image: ["/lovable-uploads/Gitex_Web_Scraping/dashboard_preview.png"],
      technologies: ["Power BI", "Python", "excel"],
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

  const images = Array.isArray(project.image) ? project.image : [project.image];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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

          {/* Project Images Carousel */}
          {images.length > 0 && (
            <div className="relative mb-12 animate-fade-in">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full rounded-lg shadow-elegant max-h-[500px] object-contain"
              />

              {/* Left Arrow - show only if not first image */}
              {currentImageIndex > 0 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute -left-10 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary hover:scale-110 transition duration-200"
                  style={{ zIndex: 2 }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              )}

              {/* Right Arrow - show only if not last image */}
              {currentImageIndex < images.length - 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute -right-10 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary hover:scale-110 transition duration-200"
                  style={{ zIndex: 2 }}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              )}
            </div>
          )}

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
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="group">
                  <Eye className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </a>
              <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          {/* Project Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Problem Section */}
              <Card className="border-l-4 border-l-destructive/50 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </CardContent>
              </Card>

              {/* Solution Section */}
              <Card className="border-l-4 border-l-primary/50 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
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
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </a>
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
