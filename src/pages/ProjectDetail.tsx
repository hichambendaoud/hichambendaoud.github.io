import { useState, useRef, TouchEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Eye, ChevronLeft, ChevronRight, AlertCircle, Maximize2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  // Project Data matching your portfolio
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
    },
    "data-visualization-platform1": {
      title: "Gitex Web Scraping & Data Visualization",
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
    },
    "machine-learning-pipeline": {
      title: "Machine Learning Pipeline",
      category: "Machine Learning",
      description: "End-to-end ML pipeline for predictive analytics using Python and scikit-learn.",
      fullDescription: "Complete machine learning workflow from data preprocessing to model deployment, featuring automated feature selection and hyperparameter tuning.",
      image: ["/lovable-uploads/d930e88d-54f3-467f-aeca-3f831210e27d.png"],
      technologies: ["Python", "scikit-learn", "Pandas", "Flask"],
      problem: "Manual model training was inefficient and lacked reproducibility.",
      solution: "Built an automated pipeline with version control for data and models.",
      results: [
        "Reduced time-to-production by 50%",
        "Improved model accuracy by 15%",
        "Standardized deployment process"
      ],
      links: { demo: "#", code: "#" }
    },
    "real-time-analytics": {
      title: "Real-time Analytics Dashboard",
      category: "Real-time Analytics",
      description: "Real-time data analytics dashboard using Apache Kafka and Elasticsearch.",
      fullDescription: "High-throughput real-time analytics platform capable of processing millions of events per second with sub-second latency.",
      image: ["/lovable-uploads/7bcaa7dc-b7f5-4790-a46a-428bdb2b0179.png"],
      technologies: ["Kafka", "Elasticsearch", "React", "Python"],
      problem: "Existing batch processing could not provide immediate insights for time-critical decisions.",
      solution: "Implemented a streaming architecture using Kafka and Elasticsearch.",
      results: [
        "Achieved sub-second data latency",
        "Scaled to handle 50k events/second",
        "Enabled real-time fraud detection"
      ],
      links: { demo: "#", code: "#" }
    }
  };

  const project = projects[slug || ""];
  
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-slate-800/50 rounded-full">
                <AlertCircle className="h-12 w-12 text-slate-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Project Not Found</h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg mx-auto">
              The project you are looking for might have been removed or the link is incorrect.
            </p>
            <Link to="/projects">
              <Button variant="outline" className="h-12 px-8 text-base border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Return to Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = Array.isArray(project.image) ? project.image : [project.image];

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Swipe Handlers
  const onTouchStart = (e: TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentImageIndex < images.length - 1) {
      handleNextImage();
    }
    if (isRightSwipe && currentImageIndex > 0) {
      handlePrevImage();
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Link to="/projects">
              <Button variant="ghost" className="group text-slate-400 hover:text-white hover:bg-slate-800/50 pl-0">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Button>
            </Link>
          </div>

          {/* Project Images Carousel */}
          {images.length > 0 && (
            <div className="relative mb-12 animate-fade-in group">
              <div 
                className="overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-[#111827]"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full max-h-[600px] object-contain bg-[#020817]"
                />
              </div>

              {/* Full Screen Trigger - Top Right */}
              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
                    aria-label="View Fullscreen"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] h-[90vh] bg-[#0B1120]/95 border-slate-800 p-0 flex items-center justify-center focus:outline-none">
                    <div 
                        className="relative w-full h-full flex items-center justify-center group/fullscreen"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt={`${project.title} full screenshot`}
                            className="max-w-full max-h-full object-contain"
                        />
                        
                        {/* Fullscreen Navigation - Moved to bottom for mobile or hidden if single image */}
                        {images.length > 1 && (
                            <>
                                {currentImageIndex > 0 && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handlePrevImage();
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 opacity-0 md:opacity-0 md:group-hover/fullscreen:opacity-100 hidden md:block"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="h-8 w-8" />
                                    </button>
                                )}

                                {currentImageIndex < images.length - 1 && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNextImage();
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 opacity-0 md:opacity-0 md:group-hover/fullscreen:opacity-100 hidden md:block"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="h-8 w-8" />
                                    </button>
                                )}
                                
                                {/* Mobile Navigation Controls (Bottom) */}
                                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 md:hidden z-50">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handlePrevImage();
                                        }}
                                        disabled={currentImageIndex === 0}
                                        className={`p-3 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 ${currentImageIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'active:bg-black/70'}`}
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNextImage();
                                        }}
                                        disabled={currentImageIndex === images.length - 1}
                                        className={`p-3 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 ${currentImageIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'active:bg-black/70'}`}
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </DialogContent>
              </Dialog>

              {/* Navigation Arrows - Only show if multiple images and not at edges. Always visible on mobile, hover on desktop */}
              {images.length > 1 && (
                <>
                  {currentImageIndex > 0 && (
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 hidden md:block"
                      style={{ zIndex: 2 }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                  )}

                  {currentImageIndex < images.length - 1 && (
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 hidden md:block"
                      style={{ zIndex: 2 }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  )}
                  
                  {/* Mobile Navigation Controls (Bottom for main carousel too if desired, or rely on swipe) */}
                  {/* Since swipe is added, we can hide arrows on mobile to clear the view */}
                </>
              )}
              
              {/* Dots Indicator - Hidden unless hovering on desktop, visible on mobile if needed but keeping hover logic for cleaner look as requested previously */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Project Header */}
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-sm font-medium">
                    {project.category}
                  </Badge>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-4">
                  {project.fullDescription}
                </p>
              </div>

              {/* Details Sections */}
              <div className="space-y-8">
                {/* Problem Section */}
                <div className="animate-fade-in delay-100">
                   <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                     <span className="w-1 h-8 bg-red-500 rounded-full"></span>
                     The Problem
                   </h3>
                   <Card className="bg-[#111827] border-slate-800 shadow-sm h-full border-l-4 border-l-red-500/50">
                      <CardContent className="p-6">
                        <p className="text-slate-300 leading-relaxed text-lg">{project.problem}</p>
                      </CardContent>
                   </Card>
                </div>

                {/* Solution Section */}
                <div className="animate-fade-in delay-200">
                   <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                     <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                     The Solution
                   </h3>
                   <Card className="bg-[#111827] border-slate-800 shadow-sm h-full border-l-4 border-l-blue-500/50">
                      <CardContent className="p-6">
                        <p className="text-slate-300 leading-relaxed text-lg">{project.solution}</p>
                      </CardContent>
                   </Card>
                </div>

                {/* Results Section */}
                <div className="animate-fade-in delay-300">
                   <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                     <span className="w-1 h-8 bg-emerald-500 rounded-full"></span>
                     Results & Impact
                   </h3>
                   <Card className="bg-[#111827] border-slate-800 shadow-sm h-full border-l-4 border-l-emerald-500/50">
                      <CardContent className="p-6">
                        <ul className="space-y-4">
                          {project.results.map((result: string, index: number) => (
                            <li key={index} className="flex items-start text-slate-300">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                              <span className="leading-relaxed text-lg">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                   </Card>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Links Card */}
              <div className="sticky top-24 space-y-6">
                <Card className="bg-[#111827] border-slate-800 animate-fade-in shadow-lg">
                  <CardHeader className="border-b border-slate-800 pb-4">
                    <CardTitle className="text-lg font-bold text-white">Project Links</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold border-0 h-11 shadow-lg shadow-blue-900/20">
                        <Eye className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-11">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Technologies Card */}
                <Card className="bg-[#111827] border-slate-800 animate-fade-in shadow-lg">
                  <CardHeader className="border-b border-slate-800 pb-4">
                    <CardTitle className="text-lg font-bold text-white">Technologies</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;