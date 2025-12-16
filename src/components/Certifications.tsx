import { GraduationCap, Award, BarChart3, Bot, LayoutTemplate, Database, BookOpen, ExternalLink } from "lucide-react";

const Certifications = () => {
  const education = [
    {
      degree: "Master In Computer Science",
      institution: "FST Errachidia",
      year: "2021 - 2023",
      description: "Engineering of Complex Systems. Specialized in Data modeling, Advanced Algorithms, and Research."
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
      icon: <LayoutTemplate className="w-5 h-5 text-indigo-400" />,
      color: "bg-indigo-400/10",
      link: "https://www.credly.com/badges/07fe0f45-6074-4715-a619-f0c7e95f5bdd/linked_in_profile"
    },
    {
      title: "Generative AI Career Essentials",
      issuer: "Microsoft & LinkedIn",
      date: "Jan 2025",
      icon: <Bot className="w-5 h-5 text-blue-400" />,
      color: "bg-blue-400/10",
      link: "https://www.linkedin.com/learning/certificates/a01e620f0ad5449f7201f4922361877de04fd4680afac9ee73035c84e7ec2d5a?trk=share_certificate"
    },
    {
      title: "Data Analyst Career Path",
      issuer: "Microsoft & LinkedIn",
      date: "Jan 2025",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "bg-emerald-400/10",
      link: "https://www.linkedin.com/learning/certificates/17b55c6fa86a0350bb153e0e4f2329ee4cb6b3b59d898154e7e4a768801a5f83"
    },
    {
      title: "Power BI",
      issuer: "365 Data Science",
      date: "Nov 2024",
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      color: "bg-amber-400/10",
      link: "https://learn.365datascience.com/certificates/CC-468D5D5867/"
    },
    {
      title: "Introduction to Data Science",
      issuer: "365 Data Science",
      date: "Nov 2024",
      icon: <BookOpen className="w-5 h-5 text-pink-400" />,
      color: "bg-pink-400/10",
      link: "https://learn.365datascience.com/certificates/CC-46384FB54B/"
    },
    {
      title: "Mastering MS Power BI",
      issuer: "Udemy",
      date: "Sep 2024",
      icon: <BarChart3 className="w-5 h-5 text-orange-400" />,
      color: "bg-orange-400/10",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-89648051-881b-44c9-8d56-f8fb70cd546f.jpg"
    },
    {
      title: "Analyste de Données",
      issuer: "UIR JobInTech",
      date: "Aug 2024",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      color: "bg-cyan-400/10",
      link: "https://www.linkedin.com/posts/hicham-ben-daoud-a40a80240_jobintech-certification-dataanalysis-activity-7257907897534230529-wkDj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADv1hdABqwp6yktzsyXHXq-t7v3e7SzrjNw"
    }
  ];

  return (
    <section id="certifications" className="py-20  text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Education Section */}
        <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
               <GraduationCap className="w-8 h-8 text-blue-500" />
               <h2 className="text-3xl font-bold text-white text-center">Education</h2>
            </div>

            <div className="max-w-3xl mx-auto relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm mb-2">
                      <span className="text-blue-400 font-medium">{item.institution}</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-slate-400">{item.year}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Certifications Marquee Section */}
        <div>
            <div className="flex items-center justify-center gap-3 mb-10">
               <div className="relative">
                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                 <Award className="w-8 h-8 text-blue-500" /> 
               </div>
               <h2 className="text-3xl font-bold text-white text-center">Certifications</h2>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="flex w-full overflow-hidden mask-gradient-x">
                    <div className="flex w-max animate-scroll gap-4 py-4 hover:[animation-play-state:paused]">
                        {/* Duplicate the array to create seamless loop effect */}
                        {[...certifications, ...certifications].map((cert, index) => (
                            <a 
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-w-[300px] items-center gap-3 p-4 rounded-xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer select-none relative"
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {cert.icon}
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                        <h4 className="font-bold text-white text-sm truncate group-hover:text-blue-400 transition-colors" title={cert.title}>
                                            {cert.title}
                                        </h4>
                                        <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                                        <span className="truncate max-w-[120px]">{cert.issuer}</span>
                                        <span className="text-slate-600">|</span>
                                        <span className="whitespace-nowrap">{cert.date}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0B1120] to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0B1120] to-transparent"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;