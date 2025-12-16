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
    "hr-analytics-dashboard": {
      title: "HR Analytics Dashboard",
      category: "Business Intelligence",
      description: "A comprehensive Tableau dashboard for HR Managers to analyze workforce demographics, income, and attrition trends.",
      fullDescription: "An interactive analytics solution designed to provide HR Managers with both high-level insights and granular employee details. The dashboard facilitates the analysis of hiring trends, demographic distributions, and income correlations to support data-driven workforce decisions.",
      // Update these paths to your actual HR Dashboard screenshots
    image: ["/uploads/HR_Dashboard/RHdash.png", "/uploads/HR_Dashboard/DashDetailes.png"],
      technologies: ["Tableau", "Python"],
      problem: "HR Managers lacked a unified view of their workforce data. They needed a solution to move away from scattered reports and answer critical questions about employee retention, diversity, and compensation. Specifically, they required a dual-view system: a high-level summary for strategic insights and a detailed list for individual employee records.",
      solution: "I developed a dynamic Tableau dashboard divided into three strategic sections: 'Overview' for KPIs like hiring and active employees, 'Demographics' to analyze age, gender, and education distributions, and 'Income Analysis' to correlate salaries with education and performance. I also implemented a 'Details' sheet allowing for row-level investigation of specific employee records.",
      results: [
        "Enabled real-time monitoring of key workforce metrics including Total Hires, Active Employees, and Attrition rates.",
        "Visualized demographic data to help Identify diversity gaps and age distribution trends across departments.",
        "Provided clear correlation analysis between income, education, and performance ratings to ensure fair compensation practices.",
        "Streamlined the reporting process by consolidating summary views and detailed records into a single interactive interface."
      ],
      links: {
        demo: "#", // Add your Tableau Public link here
        code: "https://github.com/hichambendaoud/tableau-hr-dashboard" // Add your Repo link here
      }
    },
    // "customer-segmentation-tableau": {
    //   title: "Marketing Analytics for an E-commerce Website",
    //   category: "Data Visualization",
    //   description: "Tableau dashboard performing RFM segmentation and cohort analysis for marketing campaigns.",
    //   fullDescription: "Comprehensive customer segmentation analysis using RFM methodology and cohort analysis to identify high-value customer segments for targeted marketing campaigns.",
    //   image: ["/uploads/Marketing_Analytics/Overview.PNG", "/uploads/Marketing_Analytics/Social_Media.PNG","/uploads/Marketing_Analytics/conversion_Details.PNG","/uploads/Marketing_Analytics/Customer_Review.PNG"],
    //   technologies: ["Tableau", "Python", "Pandas", "SQL"],
    //   problem: "Marketing team needed to identify high-value customer segments for targeted campaigns but lacked proper segmentation tools.",
    //   solution: "Built a comprehensive Tableau dashboard with RFM segmentation and cohort analysis to identify customer patterns and lifetime value.",
    //   results: [
    //     "Identified 5 distinct customer segments",
    //     "Improved campaign targeting by 45%",
    //     "Increased customer retention by 30%",
    //     "Reduced customer acquisition costs by 25%"
    //   ],
    //   links: {
    //     demo: "#",
    //     code: "#"
    //   }
    // },
    "customer-segmentation-tableau": {
      title: "ShopEasy Marketing Analytics",
      category: "Business Intelligence",
      description: "A Power BI dashboard integrating SQL and Python to analyze marketing performance, conversion trends, and customer sentiment.",
      fullDescription: "A comprehensive data analytics project for 'ShopEasy', an online retailer facing engagement challenges. This solution utilizes SQL for data preparation, Python for sentiment analysis, and Power BI to visualize key metrics across conversion rates, social media engagement, and customer feedback.",
      image: ["/uploads/Marketing_Analytics/Overview.PNG", "/uploads/Marketing_Analytics/conversion_Details.PNG", "/uploads/Marketing_Analytics/Social_Media.PNG", "/uploads/Marketing_Analytics/Customer_Review.PNG"],
      technologies: ["Power BI", "Python", "SQL"],
      problem: "ShopEasy faced a significant decline in customer engagement and conversion rates despite high investments in new marketing campaigns. Specific issues included a drop in social media views in the second half of the year, a need to improve the average customer rating of 3.7 to the target of 4.0, and a lack of visibility into which content types were actually driving interactions.",
      // Inside your projects object
      solution: [
        "Data Cleaning: Used SQL to clean and structure the raw data, ensuring high accuracy for the analysis.",
        "Sentiment Analysis: Performed advanced analysis with Python to categorize 275+ positive and 82+ negative reviews.",
        "Visualization: Built targeted Power BI views to track Click-Through Rates (CTR), seasonal conversion peaks, and product performance."
      ],
      results: [
        "Identified January as the peak performance month with a 19.6% conversion rate, driven largely by seasonal demand for Ski Boots (150% conversion).",
        "Revealed that while social media views declined, the Click-Through Rate remained strong at 15.37%, indicating a need for optimized Call-to-Actions rather than just more content.",
        "Pinpointed 'Blog' content as the primary driver of views, leading to a recommendation to revitalize video and user-generated content strategies.",
        "Recommended targeting high-performing categories like Kayaks and Baseball Gloves for seasonal promotions to boost sales during low-conversion months like May."
      ],
      links: {
        demo: "#", // Add your live Power BI link if available
        code: "https://github.com/hichambendaoud/Marketing-Analytics-Business"
      }
    },
    "patient-records-analytics": {  // UPDATED ID (was data-visualization-platform)
      title: "Patient Records Analytics",
      category: "Data visaulization",
      description: "A dual-interface analytics solution using Power BI and Streamlit to analyze hospital patient records.",
      fullDescription: "A comprehensive healthcare data project that analyzes hospital patient records. This solution provides two distinct interfaces for stakeholders: a Power BI dashboard for overview performance metrics and a Streamlit web application for interactive data exploration. It includes a complete data pipeline from cleaning to visualization.",
      image: ["/uploads/Hospital_Patien/Dashboard_Overview.PNG", "/uploads/Hospital_Patien/Data_Model.PNG"],
      technologies: ["Power BI", "Python", "Streamlit", "Pandas", "Matplotlib"],
      problem: "The project aims to provide detailed analysis of hospital patient records. There was a need to process raw data to uncover key insights regarding patient admissions, average treatment costs, and overall hospital performance metrics.",
      solution: "I built a complete solution using Python for the backend and two frontend tools. I created a `clean.ipynb` notebook to automate data cleaning and `eda_functions.py` for exploratory data analysis. I then developed a Power BI report for static reporting and a Streamlit application (`app.py`) for a web-based, interactive experience.",
      results: [
        "Automated the data cleaning process using Python scripts to prepare raw patient records for analysis.",
        "Delivered a Power BI dashboard visualizing key metrics like total admissions and average costs.",
        "Built a custom Streamlit web app allowing for interactive filtering and presentation of findings.",
        "Established a clear Data Model to structure relationships between patient and hospital data."
      ],
      links: {
        demo: "#", 
        code: "https://github.com/hichambendaoud/Patient-record"
      }
    },
    // "etl-pipeline-talend": {
    //   title: "ETL Pipeline with Talend",
    //   category: "Data Engineering",
    //   description: "Automated ETL pipeline for customer data integration using Talend Open Studio.",
    //   fullDescription: "End-to-end ETL pipeline design and implementation using Talend Open Studio for automated customer data integration from multiple sources.",
    //   image: ["/uploads/47c40655-58cc-4a2c-a7ee-90e66e510247.png"],
    //   technologies: ["Talend", "SQL", "Python", "Azure Data Factory"],
    //   problem: "Manual data integration process was time-consuming and error-prone, causing delays in reporting and analysis.",
    //   solution: "Designed and implemented automated ETL pipelines using Talend Open Studio with robust error handling and data quality checks.",
    //   results: [
    //     "Reduced data processing time by 40%",
    //     "Improved data accuracy by 25%",
    //     "Automated daily data refresh process",
    //     "Implemented comprehensive error logging"
    //   ],
    //   links: {
    //     demo: "#",
    //     code: "#"
    //   }
    // },
    "gitex-scraping-analysis": { // UPDATED ID
      title: "Gitex Exhibitor Analysis",
      category: "Data Science",
      description: "A comprehensive project scraping Gitex exhibitor data to analyze industry trends and Microsoft partnership potential.",
      fullDescription: "An end-to-end data engineering and analytics project focused on the Gitex technology exhibition. I built a Python-based web scraper to extract detailed company profiles, normalized the data for analysis, and developed a Power BI dashboard to identify key industry trends and partnership opportunities.",
      image: ["/uploads/Gitex_Web_Scraping/dashboard_preview.png"], // Matches your provided path
      technologies: ["Python", "Power BI", "Pandas", "Web Scraping"],
      problem: "Extracting and analyzing exhibitor data from the Gitex website was a manual, time consuming process. Stakeholders needed a way to quickly identify companies based on specific criteria such as region or technology focus without browsing thousands of individual profile pages.",
      solution: "I developed a Python script (Jupyter Notebook) to automate the extraction of company names, regions, and descriptions. I implemented a 'likelihood analysis' algorithm to score companies based on their potential to integrate Microsoft products using keyword matching. The final dataset was visualized in an interactive Power BI dashboard.",
      results: [
        "successfully scraped and normalized profiles for 123+ companies across multiple regions.",
        "Identified 'AI', 'Innovation', and 'Technology' as the top trending keywords in exhibitor descriptions.",
        "Created a 'Microsoft Integration Score' to help prioritize potential B2B partnerships.",
        "Visualized the geographic distribution of exhibitors, highlighting top presence from Africa and Europe."
      ],
      links: {
        demo: "#", 
        code: "https://github.com/hichambendaoud/Gitex-Scraping-Project"
      }
    },
    "etl-data-pipeline": {
      title: "Digital Factory: Automated ETL & BI System",
      category: "Data Engineering",
      description: "A centralized data warehouse system for university performance management, automating ETL processes and enabling strategic decision-making.",
      fullDescription: "The 'Digital Factory' project was initiated by the Performance Steering Directorate (DPP) to centralize and valorize academic and administrative data. The goal was to replace manual, error-prone processes with a robust, automated system. I designed a complete architecture comprising an ETL process to ingest data from diverse sources, a data warehouse for historical storage, and interactive Power BI dashboards for strategic KPIs.",
      image: "/uploads/Digital_Factory_ETL/Digital_Factory_architecturee.png", // Placeholder until you create the diagram
      technologies: ["Talend", "Python", "SQL Server", "SSIS", "Power BI", "UML"],
      problem: "The university's data management faced critical challenges: inconsistent data due to manual entry, scattered information across disparate files, lack of a unified data model, and inefficient manual reporting processes that hindered strategic decision-making.",
      solution: [
        [<strong className="text-foreground">ETL Process (Extraction, Transformation, Loading):</strong> ," Developed automated scripts using Talend and Python to extract data from various information systems and Excel files. This layer handles data cleaning, deduplication, and validation to ensure integrity.", ],
        [<strong className="text-foreground">Data Modeling: </strong>," Designed relational and multidimensional models (Star Schema) to structure academic and administrative data effectively." ],
        [<strong className="text-foreground">Data Warehouse: </strong>," Built a centralized, secure repository to store historical and enriched data, optimized for analytical querying." ],
        [<strong className="text-foreground">BI Portal: </strong>," Created interactive Power BI dashboards that connect to the warehouse, providing dynamic visualization of key performance indicators (KPIs) for the directorate." ]
      ],
      results: [
        "30% reduction in data preparation time through the automation of ETL pipelines.",
        "25% improvement in data reliability by implementing automated quality checks and validation rules.",
        "Successfully centralized disparate data sources into a single, secure Data Warehouse.",
        "Delivered dynamic dashboards that reduced the time required for strategic reporting from days to minutes."
      ],
      links: {
        demo: "#", 
        code: "#" 
      }
    },
    "audio-classification-ml": {
      title: "Speech-to-Text & Audio Classification System",
      category: "Machine Learning",
      description: "A Deep Learning model for audio classification and text generation integrated into a Django web app.",
      fullDescription: "An end-to-end Machine Learning project combining Natural Language Processing (NLP) and Audio Analysis. I developed deep learning models using TensorFlow and Keras to classify audio signals and generate text. The models were deployed via a Django web application to provide a user-friendly interface for real-time predictions.",image: ["/uploads/Speech_to_Text/accueil.PNG", "/uploads/Speech_to_Text/service.PNG", "/uploads/Speech_to_Text/Creat_space.PNG", "/uploads/Speech_to_Text/Chose_Langue.PNG", "/uploads/Speech_to_Text/Micro_page.PNG", "/uploads/Speech_to_Text/start_speech.PNG"], 
      technologies: ["Python", "TensorFlow", "Keras", "Django", "Librosa"],
      problem: "The goal was to improve the accuracy of automated transcriptions and audio recognition, which required sophisticated deep learning architectures beyond standard models.",
      solution: "I developed custom models using TensorFlow/Keras for audio classification. I integrated these models into a web-based platform using Django. Finally, I wrapped the model in a **Django** web app that allows users to record voice inputs and view real-time transcriptions.",
      results: [
        "Achieved a 15% increase in transcription accuracy compared to the baseline model.",
        "Successfully deployed the model via a Django web application for real-time usage.",
        "Documented technical specifications to ensure reproducibility of results."
      ],
      links: {
        demo: "#", 
        code: "#" 
      }
    },
    // "machine-learning-pipeline": {
    //   title: "Machine Learning Pipeline",
    //   category: "Machine Learning",
    //   description: "End-to-end ML pipeline for predictive analytics using Python and scikit-learn.",
    //   fullDescription: "Complete machine learning workflow from data preprocessing to model deployment, featuring automated feature selection and hyperparameter tuning.",
    //   image: ["/uploads/d930e88d-54f3-467f-aeca-3f831210e27d.png"],
    //   technologies: ["Python", "scikit-learn", "Pandas", "Flask"],
    //   problem: "Manual model training was inefficient and lacked reproducibility.",
    //   solution: "Built an automated pipeline with version control for data and models.",
    //   results: [
    //     "Reduced time-to-production by 50%",
    //     "Improved model accuracy by 15%",
    //     "Standardized deployment process"
    //   ],
    //   links: { demo: "#", code: "#" }
    // },
    // "real-time-analytics": {
    //   title: "Real-time Analytics Dashboard",
    //   category: "Real-time Analytics",
    //   description: "Real-time data analytics dashboard using Apache Kafka and Elasticsearch.",
    //   fullDescription: "High-throughput real-time analytics platform capable of processing millions of events per second with sub-second latency.",
    //   image: ["/uploads/7bcaa7dc-b7f5-4790-a46a-428bdb2b0179.png"],
    //   technologies: ["Kafka", "Elasticsearch", "React", "Python"],
    //   problem: "Existing batch processing could not provide immediate insights for time-critical decisions.",
    //   solution: "Implemented a streaming architecture using Kafka and Elasticsearch.",
    //   results: [
    //     "Achieved sub-second data latency",
    //     "Scaled to handle 50k events/second",
    //     "Enabled real-time fraud detection"
    //   ],
    //   links: { demo: "#", code: "#" }
    // }
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
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
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
                        
                        {/* Fullscreen Navigation */}
                        {images.length > 1 && (
                            <>
                                {currentImageIndex > 0 && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handlePrevImage();
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 opacity-0 group-hover/fullscreen:opacity-100 hidden md:block"
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
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 opacity-0 group-hover/fullscreen:opacity-100 hidden md:block"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="h-8 w-8" />
                                    </button>
                                )}
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 hidden md:block"
                      style={{ zIndex: 2 }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                  )}

                  {currentImageIndex < images.length - 1 && (
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/10 hidden md:block"
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
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
                      {Array.isArray(project.solution) ? (
                        <ul className="space-y-4">
                          {project.solution.map((item: string, index: number) => (
                            <li key={index} className="flex items-start text-slate-300">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                              <span className="leading-relaxed text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-300 leading-relaxed text-lg">{project.solution}</p>
                      )}
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
                    {/* <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold border-0 h-11 shadow-lg shadow-blue-900/20">
                        <Eye className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a> */}
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