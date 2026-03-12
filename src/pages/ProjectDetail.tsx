import { useState, useRef, TouchEvent, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, ChevronLeft, ChevronRight, AlertCircle, Maximize2, Sparkles, Target, Lightbulb, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Swipe state - reduced minimum distance for faster/more responsive swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 30;

  // Project Data
  const projects: Record<string, any> = {
    "atlas-labs-hr-dashboard": {
      title: "Atlas Labs HR & Attrition Analytics",
      category: "Business Intelligence",
      description: "A comprehensive Power BI reporting solution for Atlas Labs to monitor workforce metrics, demographics, and attrition.",
      fullDescription: "An interactive Power BI dashboard designed for Atlas Labs to provide deep insights into their 1,470 employees. The solution is divided into four main sections using bookmarks: Overview, Demographics, Performance Tracker, and Attrition, enabling HR leaders to drill down into the root causes of employee turnover.",
      image: [
        "/uploads/atlas-labs-hr-dashboard/3_5_bookmarks_solution_page-0001.jpg",
        "/uploads/atlas-labs-hr-dashboard/3_5_bookmarks_solution_page-0002.jpg",
        "/uploads/atlas-labs-hr-dashboard/3_5_bookmarks_solution_page-0003.jpg",
        "/uploads/atlas-labs-hr-dashboard/3_5_bookmarks_solution_page-0004.jpg"
      ],
      technologies: ["Power BI", "DAX", "Data Modeling"],
      problem: "Atlas Labs needed a centralized way to monitor their workforce of 1,470 employees. They struggled to understand the underlying causes of their 16.1% attrition rate and lacked visibility into employee performance, demographics, and historical hiring trends across their departments.",
      solution: [
        "Data Modeling: Structured the raw HR data into a robust data model suitable for time-series and categorical analysis.",
        "DAX Measures: Created dynamic measures for Attrition Rate (16.1%), Active/Inactive Employees, and average performance ratings.",
        "Interactive Navigation: Implemented an intuitive bookmark-based navigation system with four dedicated views.",
        "Visual Analytics: Built targeted visuals including Attrition by Department/Job Role and Hiring Trends."
      ],
      results: [
        "Identified an overall attrition rate of 16.1%, highlighting specific retention challenges in Sales and Tech.",
        "Visualized hiring trends from 2012 to 2022, providing clarity on historical workforce growth.",
        "Correlated performance ratings with job satisfaction to pinpoint drivers of turnover.",
        "Delivered a centralized reporting tool that eliminated manual data aggregation."
      ],
      links: { demo: "#", code: "https://github.com/hichambendaoud" }
    },
    "hr-analytics-dashboard": {
      title: "HR Analytics Dashboard",
      category: "Business Intelligence",
      description: "A comprehensive Tableau dashboard for HR Managers to analyze workforce demographics, income, and attrition trends.",
      fullDescription: "An interactive analytics solution designed to provide HR Managers with both high-level insights and granular employee details. The dashboard facilitates the analysis of hiring trends, demographic distributions, and income correlations to support data-driven workforce decisions.",
      image: ["/uploads/HR_Dashboard/RHdash.png", "/uploads/HR_Dashboard/DashDetailes.png"],
      technologies: ["Tableau", "Python"],
      problem: "HR Managers lacked a unified view of their workforce data. They needed a solution to move away from scattered reports and answer critical questions about employee retention, diversity, and compensation.",
      solution: "I developed a dynamic Tableau dashboard divided into three strategic sections: 'Overview' for KPIs, 'Demographics' for distributions, and 'Income Analysis' to correlate salaries with performance. I also implemented a 'Details' sheet for row-level investigation.",
      results: [
        "Enabled real-time monitoring of key workforce metrics including Total Hires and Attrition.",
        "Visualized demographic data to help identify diversity gaps across departments.",
        "Provided clear correlation analysis between income and performance ratings.",
        "Streamlined the reporting process by consolidating summary views and detailed records."
      ],
      links: { demo: "#", code: "https://github.com/hichambendaoud/tableau-hr-dashboard" }
    },
    "customer-segmentation-tableau": {
      title: "ShopEasy Marketing Analytics",
      category: "Business Intelligence",
      description: "A Power BI dashboard integrating SQL and Python to analyze marketing performance, conversion trends, and customer sentiment.",
      fullDescription: "A comprehensive data analytics project for 'ShopEasy', an online retailer facing engagement challenges. This solution utilizes SQL for data preparation, Python for sentiment analysis, and Power BI to visualize key metrics across conversion rates, social media engagement, and customer feedback.",
      image: ["/uploads/Marketing_Analytics/Overview.PNG", "/uploads/Marketing_Analytics/conversion_Details.PNG", "/uploads/Marketing_Analytics/Social_Media.PNG", "/uploads/Marketing_Analytics/Customer_Review.PNG"],
      technologies: ["Power BI", "Python", "SQL"],
      problem: "ShopEasy faced a significant decline in customer engagement and conversion rates despite high investments. They lacked visibility into which content types were actually driving interactions.",
      solution: [
        "Data Cleaning: Used SQL to clean and structure the raw data, ensuring high accuracy.",
        "Sentiment Analysis: Performed advanced analysis with Python to categorize customer reviews.",
        "Visualization: Built targeted Power BI views to track Click-Through Rates (CTR) and seasonal peaks."
      ],
      results: [
        "Identified January as the peak month with a 19.6% conversion rate.",
        "Revealed that while social media views declined, the CTR remained strong at 15.37%.",
        "Pinpointed 'Blog' content as the primary driver of views.",
        "Recommended targeting high-performing categories like Kayaks for seasonal promotions."
      ],
      links: { demo: "#", code: "https://github.com/hichambendaoud/Marketing-Analytics-Business" }
    },
    "patient-records-analytics": {  
      title: "Patient Records Analytics",
      category: "Data visualization",
      description: "A dual-interface analytics solution using Power BI and Streamlit to analyze hospital patient records.",
      fullDescription: "A comprehensive healthcare data project that analyzes hospital patient records. This solution provides two distinct interfaces: a Power BI dashboard for overview metrics and a Streamlit web application for interactive exploration.",
      image: ["/uploads/Hospital_Patien/Dashboard_Overview.PNG", "/uploads/Hospital_Patien/Data_Model.PNG"],
      technologies: ["Power BI", "Python", "Streamlit", "Pandas"],
      problem: "There was a need to process raw healthcare data to uncover key insights regarding patient admissions, treatment costs, and hospital performance.",
      solution: "I built a complete solution using Python for the backend. I created automation scripts for cleaning and EDA, then developed a Power BI report for static reporting and a Streamlit app for interactive exploration.",
      results: [
        "Automated the data cleaning process using Python scripts.",
        "Delivered a Power BI dashboard visualizing metrics like total admissions and costs.",
        "Built a custom Streamlit web app for interactive filtering.",
        "Established a clear Data Model to structure relationships."
      ],
      links: { demo: "#", code: "https://github.com/hichambendaoud/Patient-record" }
    },
    "gitex-scraping-analysis": { 
      title: "Gitex Exhibitor Analysis",
      category: "Data Science",
      description: "A project scraping Gitex exhibitor data to analyze industry trends and Microsoft partnership potential.",
      fullDescription: "An end-to-end data engineering and analytics project focused on the Gitex technology exhibition. I built a Python-based web scraper to extract profiles and developed a Power BI dashboard to identify partnership opportunities.",
      image: ["/uploads/Gitex_Web_Scraping/dashboard_preview.png"], 
      technologies: ["Python", "Power BI", "Web Scraping"],
      problem: "Extracting exhibitor data was a manual, time-consuming process. Stakeholders needed to identify companies quickly based on region or tech focus.",
      solution: "I developed a Python script to automate extraction of company profiles. I implemented a 'likelihood analysis' algorithm to score companies based on potential Microsoft product integration.",
      results: [
        "Successfully scraped and normalized profiles for 123+ companies.",
        "Identified 'AI' and 'Innovation' as the top trending keywords.",
        "Created a 'Microsoft Integration Score' to prioritize potential partnerships.",
        "Visualized geographic distribution, highlighting presence from Africa and Europe."
      ],
      links: { demo: "#", code: "https://github.com/hichambendaoud/Gitex-Scraping-Project" }
    },
    "etl-data-pipeline": {
      title: "Digital Factory: Automated ETL System",
      category: "Data Engineering",
      description: "A centralized data warehouse system for university performance management, automating ETL processes.",
      fullDescription: "I designed a complete architecture comprising an ETL process to ingest data from diverse sources, a data warehouse for storage, and Power BI dashboards for strategic KPIs.",
      image: ["/uploads/Digital_Factory_ETL/Digital_Factory_architecturee.png"], 
      technologies: ["Talend", "Python", "SQL Server", "Power BI"],
      problem: "Data management faced critical challenges: inconsistent data, scattered files, and inefficient manual reporting processes.",
      solution: [
        "ETL Process: Developed automated scripts using Talend and Python for extraction and validation.",
        "Data Modeling: Designed relational and multidimensional models (Star Schema).",
        "Data Warehouse: Built a centralized repository optimized for analytical querying.",
        "BI Portal: Created interactive dashboards for strategic KPI visualization."
      ],
      results: [
        "30% reduction in data preparation time through ETL automation.",
        "25% improvement in data reliability by implementing quality checks.",
        "Successfully centralized disparate data sources into a single warehouse.",
        "Delivered dashboards that reduced reporting time from days to minutes."
      ],
      links: { demo: "#", code: "#" }
    },
    "audio-classification-ml": {
      title: "Audio Classification System",
      category: "Machine Learning",
      description: "A Deep Learning model for audio classification and text generation integrated into a Django web app.",
      fullDescription: "An end-to-end Machine Learning project combining NLP and Audio Analysis using TensorFlow/Keras to classify signals and generate text.",
      image: ["/uploads/Speech_to_Text/accueil.PNG", "/uploads/Speech_to_Text/service.PNG", "/uploads/Speech_to_Text/Creat_space.PNG", "/uploads/Speech_to_Text/Chose_Langue.PNG"], 
      technologies: ["Python", "TensorFlow", "Django", "Librosa"],
      problem: "The goal was to improve the accuracy of automated transcriptions and audio recognition beyond standard models.",
      solution: "I developed custom models using TensorFlow/Keras for audio classification and wrapped the system in a Django web app for real-time predictions.",
      results: [
        "Achieved a 15% increase in transcription accuracy.",
        "Successfully deployed the model via a Django web application.",
        "Documented technical specifications to ensure reproducibility."
      ],
      links: { demo: "#", code: "#" }
    },
    "sql-data-warehouse-project": {
      title: "SQL Data Warehouse from Scratch",
      category: "Data warehousing",
      description: "Modern data warehouse implementation using SQL Server and ETL processes with Bronze, Silver, and Gold architecture.",
      fullDescription: "A comprehensive data engineering project that builds a modern data warehouse from the ground up using SQL Server and Medallion Architecture.",
      image: ["/uploads/sql-data-warehouse-project/sql_data_warehouse.png"],
      technologies: ["SQL Server", "T-SQL", "ETL", "Data Modeling"],
      problem: "Businesses struggle with fragmented data across ERP & CRM systems, leading to inconsistent reporting and slow performance.",
      solution: [
        "Bronze Layer: Created procedures to load raw data from ERP and CRM systems.",
        "Silver Layer: Developed T-SQL scripts to clean, normalize, and handle nulls.",
        "Gold Layer: Designed a Star Schema optimized for reporting tools.",
        "Automation: Implemented master ETL stored procedures for orchestration."
      ],
      results: [
        "Established a scalable architecture for integrating new data sources.",
        "Improved query performance by denormalizing data into a Star Schema.",
        "Ensured data consistency via validation checks in the Silver layer.",
        "Reduced manual data preparation time significantly."
      ],
      links: { demo: "#", code: "https://github.com/hichambendaoud/sql-data-warehouse-project" }
    }
  };

  const project = projects[slug || ""];

  const images = project ? (Array.isArray(project.image) ? project.image : [project.image]) : [];

  // Callbacks for ultra-fast navigation
  const handleNextImage = useCallback(() => {
    if (currentImageIndex < images.length - 1) setCurrentImageIndex(prev => prev + 1);
  }, [currentImageIndex, images.length]);

  const handlePrevImage = useCallback(() => {
    if (currentImageIndex > 0) setCurrentImageIndex(prev => prev - 1);
  }, [currentImageIndex]);

  // Keyboard navigation for fast switching
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "ArrowLeft") handlePrevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextImage, handlePrevImage]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <AlertCircle className="h-16 w-16 text-slate-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-white">Project Not Found</h1>
            <Link to="/projects">
              <Button variant="outline" className="border-slate-700 text-slate-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

    if (isLeftSwipe) handleNextImage();
    if (isRightSwipe) handlePrevImage();
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 relative overflow-hidden">
      <Navigation />

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Action */}
          <div className="mb-12 animate-fade-in">
            <Link to="/projects">
              <Button variant="ghost" className="group text-slate-400 hover:text-white hover:bg-slate-800/50 pl-0">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          {/* Featured Visual with Fast Carousel */}
          <div className="relative mb-16 animate-fade-in group">
            <div 
              className="overflow-hidden rounded-3xl border border-slate-800/60 bg-[#0F172A]/60 backdrop-blur-xl shadow-2xl relative flex items-center justify-center min-h-[300px] md:min-h-[500px]"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                key={currentImageIndex} // Forces a quick re-render animation when changing image
                src={images[currentImageIndex]}
                alt={project.title}
                className="w-full max-h-[650px] object-contain bg-[#020817]/40 animate-in fade-in zoom-in-[0.98] duration-200"
              />
              
              {/* Fullscreen Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="absolute top-6 right-6 p-3 rounded-xl bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-blue-600 transition-all duration-300 backdrop-blur-md border border-white/10 z-10">
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </DialogTrigger>
                {/* Fixed the overflow issue by using max-h-[95vh] and wrapping the image perfectly */}
                <DialogContent className="max-w-[95vw] h-[95vh] bg-[#0B1120]/98 border-slate-800 p-2 sm:p-6 flex flex-col items-center justify-center overflow-hidden">
                  <div 
                    className="relative w-full h-full flex items-center justify-center"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <img 
                      key={`fs-${currentImageIndex}`}
                      src={images[currentImageIndex]} 
                      className="max-w-full max-h-full object-contain animate-in fade-in zoom-in-[0.98] duration-200" 
                      alt="Fullscreen view" 
                    />

                    {/* Navigation Arrows inside Fullscreen */}
                    {images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} 
                          disabled={currentImageIndex === 0} 
                          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl bg-black/50 text-white hover:bg-blue-600 disabled:opacity-0 transition-all z-50 backdrop-blur-sm border border-white/10"
                        >
                          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleNextImage(); }} 
                          disabled={currentImageIndex === images.length - 1} 
                          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl bg-black/50 text-white hover:bg-blue-600 disabled:opacity-0 transition-all z-50 backdrop-blur-sm border border-white/10"
                        >
                          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
                        </button>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Normal View Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} 
                    disabled={currentImageIndex === 0} 
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/40 text-white opacity-0 group-hover:opacity-100 hover:bg-blue-600 disabled:opacity-0 transition-all hidden md:block z-10"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }} 
                    disabled={currentImageIndex === images.length - 1} 
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/40 text-white opacity-0 group-hover:opacity-100 hover:bg-blue-600 disabled:opacity-0 transition-all hidden md:block z-10"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md z-10">
                    {images.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-blue-400 w-6' : 'bg-white/30 hover:bg-white/60'}`} 
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Project Content */}
            <div className="lg:col-span-8 space-y-16">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3" />
                  Project Insight
                </div>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                  {project.title.split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{project.title.split(' ').slice(-1)}</span>
                </h1>
                <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl">
                  {project.fullDescription}
                </p>
              </div>

              <div className="grid gap-10">
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                    <Target className="w-5 h-5 text-red-400" />
                    The Challenge
                  </h3>
                  <Card className="bg-[#0F172A]/40 backdrop-blur-xl border-slate-800/60 border-l-4 border-l-red-500/40 rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <p className="text-slate-300 leading-relaxed text-lg font-light italic">"{project.problem}"</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                    The Solution
                  </h3>
                  <Card className="bg-[#0F172A]/40 backdrop-blur-xl border-slate-800/60 border-l-4 border-l-blue-500/40 rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      {Array.isArray(project.solution) ? (
                        <ul className="space-y-5">
                          {project.solution.map((item: string, i: number) => (
                            <li key={i} className="flex items-start text-slate-300 gap-4 group">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                              <span className="text-lg font-light">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-300 text-lg font-light">{project.solution}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    Impact & Results
                  </h3>
                  <Card className="bg-[#0F172A]/40 backdrop-blur-xl border-slate-800/60 border-l-4 border-l-emerald-500/40 rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <ul className="space-y-5">
                        {project.results.map((result: string, i: number) => (
                          <li key={i} className="flex items-start text-slate-300 gap-4 group">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                            <span className="text-lg font-light">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-8 animate-fade-in">
                <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
                  <CardHeader className="border-b border-slate-800/60 p-6">
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Project Hub</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full h-12 bg-transparent border-slate-700 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all rounded-xl shadow-lg">
                        <Github className="mr-2 h-4 w-4" />
                        Explore Source Code
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
                  <CardHeader className="border-b border-slate-800/60 p-6">
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-800/40 text-slate-300 border-slate-700/50 px-3.5 py-1.5 text-xs rounded-lg hover:text-blue-400 transition-colors">
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