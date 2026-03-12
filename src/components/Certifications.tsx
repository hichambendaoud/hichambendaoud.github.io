import { GraduationCap, Award, BarChart3, Bot, LayoutTemplate, Database, BookOpen, ExternalLink, Building2 } from "lucide-react";

const Certifications = () => {
  const education = [
    {
      degree: "Master In Computer Science",
      institution: "FST Errachidia",
      year: "2021 - 2023",
      description: "Computer science and complex systems engineering. Specialized in Data modeling, Advanced Algorithms, and Research."
    },
    {
      degree: "Licence in Software Engineering",
      institution: "FST Errachidia",
      year: "2017 - 2021", 
      description: "Core foundations of software development, database management, and system architecture."
    }
  ];

  const certifications = [
    {
      title: "Get Started with Tableau",
      issuer: "Tableau",
      date: "Jan 2025",
      icon: <LayoutTemplate className="w-6 h-6" />,
      color: "bg-indigo-400/10 text-indigo-400 group-hover:bg-indigo-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]",
      link: "https://www.credly.com/badges/07fe0f45-6074-4715-a619-f0c7e95f5bdd/linked_in_profile"
    },
    {
      title: "Generative AI Career Essentials",
      issuer: "Microsoft & LinkedIn",
      date: "Jan 2025",
      icon: <Bot className="w-6 h-6" />,
      color: "bg-blue-400/10 text-blue-400 group-hover:bg-blue-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      link: "https://www.linkedin.com/learning/certificates/a01e620f0ad5449f7201f4922361877de04fd4680afac9ee73035c84e7ec2d5a?trk=share_certificate"
    },
    {
      title: "Data Analyst Career Path",
      issuer: "Microsoft & LinkedIn",
      date: "Jan 2025",
      icon: <Database className="w-6 h-6" />,
      color: "bg-emerald-400/10 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      link: "https://www.linkedin.com/learning/certificates/17b55c6fa86a0350bb153e0e4f2329ee4cb6b3b59d898154e7e4a768801a5f83"
    },
    {
      title: "Power BI",
      issuer: "365 Data Science",
      date: "Nov 2024",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]",
      link: "https://learn.365datascience.com/certificates/CC-468D5D5867/"
    },
    {
      title: "Introduction to Data Science",
      issuer: "365 Data Science",
      date: "Nov 2024",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-pink-400/10 text-pink-400 group-hover:bg-pink-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]",
      link: "https://learn.365datascience.com/certificates/CC-46384FB54B/"
    },
    {
      title: "Mastering MS Power BI",
      issuer: "Udemy",
      date: "Sep 2024",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-orange-400/10 text-orange-400 group-hover:bg-orange-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-89648051-881b-44c9-8d56-f8fb70cd546f.jpg"
    },
    {
      title: "Analyste de Données",
      issuer: "UIR JobInTech",
      date: "Aug 2024",
      icon: <Database className="w-6 h-6" />,
      color: "bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]",
      link: "https://www.linkedin.com/posts/hicham-ben-daoud-a40a80240_jobintech-certification-dataanalysis-activity-7257907897534230529-wkDj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADv1hdABqwp6yktzsyXHXq-t7v3e7SzrjNw"
    },
    {
      title: "BigQuery for Data Analysts",
      issuer: "Google Cloud Skills Boost",
      date: "Mai 2025",
      icon: <Database className="w-6 h-6" />,
      color: "bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]",
      link: "https://www.skills.google/course_templates/865"
    },
    {
      title: "Databricks Fundamentals",
      issuer: "Databricks Academy",
      date: "Mai 2025",
      icon: <Database className="w-6 h-6" />,
      color: "bg-red-400/10 text-red-400 group-hover:bg-red-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(248,113,113,0.5)]",
      link: "https://credentials.databricks.com/31d34b24-892a-4f14-b822-e8ed8485716f"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0B1120] relative overflow-hidden text-slate-200">
      
      {/* Styles globaux pour garantir une boucle infinie parfaite */}
      <style>{`
        @keyframes marquee-infinite {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 35s linear infinite;
        }
      `}</style>

      {/* Effets de lumière en arrière-plan (Glow) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================
            EDUCATION SECTION 
        ========================================= */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4" />
              Academic Background
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Degrees</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative space-y-12">
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-5 top-4 bottom-4 w-0.5 -ml-px bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent -z-10"></div>

            {education.map((item, index) => (
              <div key={index} className="relative pl-14 md:pl-16 group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full border-2 bg-[#0B1120] border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)] z-10 group-hover:bg-blue-500/10 transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                
                {/* Education Card */}
                <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/50 backdrop-blur-sm p-6 md:p-8 hover:border-blue-500/40 hover:bg-slate-800/30 transition-all duration-500 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-4">
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                        <Building2 className="w-4 h-4 text-emerald-400/80" />
                        {item.institution}
                      </span>
                      <span className="hidden sm:block text-slate-600">|</span>
                      <span className="text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full text-xs font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            CERTIFICATIONS SECTION 
        ========================================= */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Continuous Learning
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Certifications</span>
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
            
            {/* Dégradés latéraux pour l'effet de fondu du Marquee */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0B1120] to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0B1120] to-transparent z-10"></div>

            <div className="flex w-full overflow-hidden group">
              
              {/* Premier groupe de certifications */}
              <div className="flex w-max shrink-0 animate-marquee-infinite gap-6 pr-6 group-hover:[animation-play-state:paused]">
                {certifications.map((cert, index) => (
                  <a 
                    key={`first-${index}`}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-[320px] md:w-[380px] flex-col justify-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/80 hover:border-emerald-500/40 hover:bg-slate-800/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 group/card cursor-pointer relative overflow-hidden shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${cert.color}`}>
                        {cert.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-bold text-white text-base md:text-lg leading-tight line-clamp-2 group-hover/card:text-emerald-400 transition-colors" title={cert.title}>
                            {cert.title}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/card:text-emerald-400 transition-colors shrink-0 mt-0.5" />
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-slate-400">
                          <span className="truncate">{cert.issuer}</span>
                          <span className="text-xs font-medium text-slate-500">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Deuxième groupe identique pour la boucle fluide */}
              <div aria-hidden="true" className="flex w-max shrink-0 animate-marquee-infinite gap-6 pr-6 group-hover:[animation-play-state:paused]">
                {certifications.map((cert, index) => (
                  <a 
                    key={`second-${index}`}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-[320px] md:w-[380px] flex-col justify-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/80 hover:border-emerald-500/40 hover:bg-slate-800/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 group/card cursor-pointer relative overflow-hidden shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${cert.color}`}>
                        {cert.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-bold text-white text-base md:text-lg leading-tight line-clamp-2 group-hover/card:text-emerald-400 transition-colors" title={cert.title}>
                            {cert.title}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/card:text-emerald-400 transition-colors shrink-0 mt-0.5" />
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-slate-400">
                          <span className="truncate">{cert.issuer}</span>
                          <span className="text-xs font-medium text-slate-500">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;