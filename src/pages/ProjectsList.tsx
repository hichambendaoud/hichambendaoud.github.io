import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowLeft, Eye, Layout, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const ProjectsList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const allProjects = [
    {
      id: "atlas-labs-hr-dashboard",
      title: "Atlas Labs HR & Attrition Analytics",
      description: "A comprehensive Power BI reporting solution for Atlas Labs to monitor workforce metrics, demographics, and attrition.",
      category: "Business Intelligence",
      image: "/uploads/atlas-labs-hr-dashboard/3_5_bookmarks_solution_page-0001.jpg",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      code: "https://github.com/hichambendaoud",
      featured: true
    },
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
      description: "A Power BI dashboard using SQL and Python to analyze marketing ROI and customer sentiment.",
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
      category: "Data visualization",
      image: "/uploads/Hospital_Patien/Dashboard_Overview.PNG",
      technologies: ["Power BI", "Python", "Streamlit"],
      featured: false 
    },
    {
      id: "gitex-scraping-analysis",
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
    {
      id: "sql-data-warehouse-project",
      title: "SQL Data Warehouse from Scratch",
      description: "A comprehensive data engineering project building a modern data warehouse using SQL Server, performing ETL with Medallion Architecture.",
      category: "Data warehousing",
      image: "/uploads/sql-data-warehouse-project/sql_data_warehouse.png", 
      technologies: ["SQL Server", "ETL", "Data Modeling", "TSQL"],
      code: "https://github.com/hichambendaoud/sql-data-warehouse-project",
      featured: false
    }
  ];

  const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))];

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 relative overflow-hidden">
      <Navigation />

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link to="/" className="inline-block mb-12 animate-fade-in">
            <Button variant="ghost" className="group text-slate-400 hover:text-white hover:bg-slate-800/50 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3" />
              Full Portfolio
            </div>
            <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Explore my complete archive of implementations across BI, Data Science, and Engineering.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(prev => (prev === category && category !== "All") ? "All" : category)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-slate-800/30 text-slate-400 border-slate-700/50 hover:border-slate-500 hover:text-white backdrop-blur-sm"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 animate-fade-in-up">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group flex flex-col overflow-hidden border-slate-800/60 bg-[#0F172A]/40 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 shadow-xl relative h-full rounded-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Internal glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video shrink-0">
                  <Link to={`/projects/${project.id}`} className="block w-full h-full cursor-pointer relative overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
                  </Link>

                  {project.featured && (
                    <div className="absolute top-3 left-3">
                        <Badge className="bg-blue-600/80 text-white border-0 shadow-lg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                            Featured
                        </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="p-6 pb-2 space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="text-emerald-400 border-emerald-400/20 bg-emerald-400/5 text-[8px] uppercase tracking-wider font-bold px-2 py-0.5">
                      {project.category}
                    </Badge>
                  </div>
                  <Link to={`/projects/${project.id}`} className="block">
                    <CardTitle className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-1 leading-tight">
                        {project.title}
                    </CardTitle>
                  </Link>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex flex-col gap-6 flex-grow">
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 font-light italic">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-800/40 text-slate-400 border-slate-700/50 text-[9px] px-2 py-0.5 group-hover:text-blue-300 group-hover:border-blue-500/20 transition-all">
                            {tech}
                        </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-slate-800/40 text-slate-400 border-slate-700/50 text-[9px] px-2 py-0.5">
                            +{project.technologies.length - 3}
                        </Badge>
                        )}
                    </div>

                    <div className="flex items-center gap-3 pt-6 border-t border-slate-800/40">
                        <Link to={`/projects/${project.id}`} className="flex-1">
                            <Button 
                                variant="outline" 
                                className="w-full group h-11 text-[10px] font-bold uppercase tracking-[0.2em] bg-transparent border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500 rounded-xl"
                            >
                                <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                DETAILS
                            </Button>
                        </Link>
                        
                        <a
                            href={project.code || "https://github.com/hichambendaoud"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-11 w-11 flex items-center justify-center border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all rounded-xl shrink-0"
                            title="View Code"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
                  </div>
                </CardContent>
                
                {/* Bottom Glow bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;