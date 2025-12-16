import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const ProjectsList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const allProjects = [
  {
      id: "hr-analytics-dashboard",
      title: "HR Analytics Dashboard",
      description: "An interactive Tableau dashboard built to consolidate HR data and reveal key workforce metrics and trends.",
      category: "Business Intelligence",
      image: "/uploads/HR_Dashboard/RHdash.png",
      technologies: ["Tableau", "Python"],
      code: "https://github.com/hichambendaoud/tableau-hr-dashboard",
      featured: false
    },
   {
      id: "customer-segmentation-tableau",
      title: "ShopEasy Marketing Analytics",
      description: "A Power BI dashboard using SQL and Python to analyze marketing ROI and customer sentiment.", // Shortened to fit
      category: "Business Intelligence",
      image: "/uploads/Marketing_Analytics/Overview.PNG",
      technologies: ["Power BI", "Python", "SQL"],
      code: "https://github.com/hichambendaoud/Marketing-Analytics-Business",
      featured: false
    },
      {
      id: "patient-records-analytics",
      title: "Patient Records Analytics",
      description: "Hospital patient record analysis using Power BI, Streamlit, and Python.",
      category: "Data visaulization",
      image: "/uploads/Hospital_Patien/Dashboard_Overview.PNG",
      technologies: ["Power BI", "Python", "Streamlit"],
      featured: false 
    },
    {
      id: "gitex-scraping-analysis", // UPDATED ID to match above
      title: "Gitex Exhibitor Analysis",
      description: "Web scraping and Power BI dashboard to analyze Gitex exhibitors and trends.",
      category: "Data Science",
      image: "/uploads/Gitex_Web_Scraping/dashboard_preview.png",
      technologies: ["Python", "Power BI", "Web Scraping"],
      featured: false 
    },
    {
      id: "etl-data-pipeline",
      title: "Automated ETL Data Pipeline",
      description: "Talend & Python pipelines reducing processing time by 30%.",
      category: "Data Engineering",
      image: "/uploads/Digital_Factory_ETL/Digital_Factory_architecturee.png", 
      technologies: ["Talend", "SQL", "Python"],
      featured: false 
    },
    {
      id: "audio-classification-ml",
      title: "Speech-to-Text & Audio Classification System",
      description: "deep learning system for speech recognition and audio classification deployed with Django.", 
      category: "Machine Learning",
      image: "/uploads/Speech_to_Text/accueil.PNG", 
      technologies: ["TensorFlow", "Django", "Python"],
      featured: false
    },
    // {
    //   id: "etl-pipeline-talend",
    //   title: "ETL Pipeline with Talend",
    //   description: "Automated ETL pipeline for customer data integration using Talend Open Studio.",
    //   category: "Data Engineering",
    //   image: "/uploads/47c40655-58cc-4a2c-a7ee-90e66e510247.png",
    //   technologies: ["Talend", "SQL", "Python", "Azure Data Factory"],
    //   featured: false
    // },
    // {
    //   id: "machine-learning-pipeline",
    //   title: "Machine Learning Pipeline",
    //   description: "End-to-end ML pipeline for predictive analytics using Python and scikit-learn.",
    //   category: "Machine Learning",
    //   image: "/uploads/d930e88d-54f3-467f-aeca-3f831210e27d.png",
    //   technologies: ["Python", "scikit-learn", "Pandas", "Flask"],
    //   featured: false
    // },
    // {
    //   id: "real-time-analytics",
    //   title: "Real-time Analytics Dashboard",
    //   description: "Real-time data analytics dashboard using Apache Kafka and Elasticsearch.",
    //   category: "Real-time Analytics",
    //   image: "/uploads/7bcaa7dc-b7f5-4790-a46a-428bdb2b0179.png",
    //   technologies: ["Kafka", "Elasticsearch", "React", "Python"],
    //   featured: false
    // }
  ];

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))];

  // Filter projects based on selection
  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link to="/" className="inline-block mb-8 animate-fade-in">
                <Button variant="ghost" className="group text-slate-400 hover:text-white hover:bg-slate-800">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Button>
            </Link>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">
                FULL PORTFOLIO
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              All Projects
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Browse projects by category to see my expertise in different areas of data and software engineering.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                // Toggle logic: if clicking active category, reset to "All" (unless it's already "All")
                onClick={() => setActiveCategory(prev => (prev === category && category !== "All") ? "All" : category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border border-slate-800 bg-[#111827] hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col"
              >
                {/* Image Container - Clickable Link */}
                <div className="relative overflow-hidden aspect-video shrink-0">
                  <Link to={`/projects/${project.id}`} className="block w-full h-full cursor-pointer relative group/image">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle darken on hover without text */}
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300" />
                  </Link>

                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-blue-600 text-white border-0 shadow-lg pointer-events-none">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader className="p-5 pb-2">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 text-xs px-2 py-0.5">
                      {project.category}
                    </Badge>
                  </div>
                  <Link to={`/projects/${project.id}`} className="hover:text-blue-400 transition-colors">
                    <CardTitle className="text-lg font-bold text-white line-clamp-1 leading-tight">
                        {project.title}
                    </CardTitle>
                  </Link>
                </CardHeader>

                <CardContent className="p-5 pt-0 flex flex-col gap-4 flex-grow">
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700 text-[10px] px-2 py-0.5">
                            {tech}
                        </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700 text-[10px] px-2 py-0.5">
                            +{project.technologies.length - 3}
                        </Badge>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                        <Link to={`/projects/${project.id}`}>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-slate-300 hover:text-white hover:bg-slate-800 px-2 -ml-2 h-8"
                            >
                                <Eye className="mr-2 h-4 w-4 text-blue-400" />
                                View Details
                            </Button>
                        </Link>
                        
                        <a
                            href="https://github.com/hichambendaoud"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800 rounded-md"
                            title="View Code"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
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