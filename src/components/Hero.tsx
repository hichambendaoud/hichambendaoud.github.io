import { ArrowRight, Download, Github, Linkedin, Mail, Lightbulb, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Liste des réseaux sociaux avec les composants d'icônes
  const socials = [
    { Icon: Github, href: "https://github.com/hichambendaoud", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/hicham-ben-daoud-a40a80240/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:hichambendaoudofficiel@gmail.com", label: "Email" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-[#0B1120]">
      
      {/* Effets de lumière en arrière-plan (Glow) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Contenu Texte */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 whitespace-nowrap">
                Hicham Ben Daoud
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 mb-6">
              Data & Business Analyst
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              I transform complex data into clear, actionable business insights. Specializing in Business Intelligence, data visualization, and analytical workflows to drive strategic decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              {/* Dirna href="#projects" bach yhbt l section dyal projects smoothly */}
              <a href="#projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 group">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/pdf/CV_Hicham_Ben_Daoud.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-12 px-8 text-base border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="p-3 rounded-full bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-inner"
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Visuel / Photo - Smaller and Better Proportioned */}
          <div className="flex-1 relative animate-fade-in order-1 lg:order-2">
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] mx-auto">
              {/* Cercle lumineux de fond */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse" />
              
              {/* Conteneur de l'image */}
              <div className="absolute inset-2 rounded-full border-2 border-slate-700/50 bg-slate-800/50 backdrop-blur-sm overflow-hidden p-2 group shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                  <img 
                    src="/hero-me.png" 
                    alt="Hicham Ben Daoud" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://github.com/hichambendaoud.png';
                    }}
                  />
                </div>
              </div>

              {/* Badges Flottants Animés */}
              
              {/* Business Insights */}
              <div className="absolute -left-2 sm:-left-6 top-[15%] lg:top-[20%] z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl">
                  <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white whitespace-nowrap">Business Insights</span>
                </div>
              </div>

              {/* Power BI & Tableau */}
              <div className="absolute -right-2 sm:-right-6 bottom-[30%] lg:bottom-[25%] z-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl">
                  <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white whitespace-nowrap">Power BI & Tableau</span>
                </div>
              </div>

              {/* Analytical Pipelines */}
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl">
                  <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white whitespace-nowrap">Analytical Pipelines</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator for desktop */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;