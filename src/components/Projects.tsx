import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Eye, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "atlas-labs-hr-dashboard",
      title: "Atlas Labs HR Analytics",
      description: "A comprehensive Power BI dashboard analyzing workforce demographics, performance, and attrition rates.",
      category: "Business Intelligence",
      image: "/uploads/atlas-labs-hr-dashboard/3_5_bookmarks_solution_page-0001.jpg",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      featured: true
    },
    {
      id: "hr-analytics-dashboard",
      title: "HR Analytics Dashboard",
      description: "An interactive Tableau dashboard built to consolidate HR data and reveal key workforce metrics.",
      category: "Business Intelligence",
      image: "/uploads/HR_Dashboard/RHdash.png",
      technologies: ["Tableau", "Python"],
      featured: false
    },
    {
      id: "customer-segmentation-tableau",
      title: "Marketing Analytics",
      description: "Tableau dashboard performing RFM segmentation and cohort analysis for marketing campaigns.",
      category: "Business Intelligence",
      image: "/uploads/Marketing_Analytics/Overview.PNG",
      technologies: ["Tableau", "Python", "SQL"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#0B1120] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3 h-3" />
            Selected Works
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Impactful Data</span>
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Turning complex datasets into visual narratives and strategic assets.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group flex flex-col overflow-hidden border-slate-800/60 bg-[#0F172A]/40 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 shadow-xl animate-fade-in relative h-full rounded-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image & Overlay */}
              <Link to={`/projects/${project.id}`} className="block relative overflow-hidden aspect-video cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
                
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-blue-600/80 text-white border-0 shadow-lg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                      Featured
                    </Badge>
                  </div>
                )}
              </Link>

              <CardHeader className="p-6 pb-2 space-y-3">
                <Badge variant="outline" className="w-fit text-emerald-400 border-emerald-400/20 bg-emerald-400/5 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5">
                  {project.category}
                </Badge>
                <Link to={`/projects/${project.id}`}>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </CardTitle>
                </Link>
              </CardHeader>

              <CardContent className="p-6 pt-0 flex flex-col flex-grow space-y-5">
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-slate-800/60 text-slate-400 border-slate-700/50 text-[10px] px-2.5 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-6 border-t border-slate-800/40">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full group h-11 text-xs font-bold uppercase tracking-[0.2em] bg-transparent border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 rounded-xl"
                    >
                      <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      DETAILS
                    </Button>
                  </Link>
                  <a
                    href="https://github.com/hichambendaoud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" className="h-11 w-11 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all rounded-xl">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>

              {/* Bottom Glow bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Footer Action - Updated for the requested hover effect */}
        <div className="text-center mt-20 animate-fade-in">
          <Link to="/projects">
            <Button 
              variant="ghost" 
              className="group h-12 px-8 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300 border border-slate-800/50 hover:border-blue-500"
            >
              <span className="text-sm font-bold tracking-wide">View All Projects</span>
              <ExternalLink className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;