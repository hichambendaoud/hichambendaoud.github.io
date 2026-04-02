import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Building2, Bot, LineChart } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Business & Data Analyst Intern",
      company: "AGH DATA AGENCY HOLDING SA",
      location: "Remote",
      period: "Jan 2026 - Mar 2026",
      icon: <LineChart className="w-5 h-5" />,
      active: true,
      achievements: [
        "Conducted competitive benchmarking to map the market landscape, authored Agile User Stories, and modeled business workflows using BPMN/UML diagrams for a mobile app project.",
        "Structured the functional backlog within Odoo ERP and produced modular feature documentation.",
        "Designed Python scraping scripts (BeautifulSoup, Scrapy) and queried public APIs to collect 800–1,000 records, enforcing strict quality checkpoints (D+3, D+7, D+10).",
        "Cleaned and normalized datasets, handled missing values, and stored structured outputs in SQL/CSV databases.",
        "Documented all data sources in a comprehensive data dictionary complete with reliability scores.",
        "Delivered interactive dashboards (Power BI) surfacing KPIs such as data volume, usability rate, category breakdown, and anomaly detection.",
        "Ensured rigorous data quality management and GDPR compliance throughout the project lifecycle."
      ]
    },
    {
      id: 2,
      role: "Data Analyst Trainee",
      company: "JobInTech",
      location: "Rabat, Morocco",
      period: "Apr 2024 - Aug 2024",
      icon: <Briefcase className="w-5 h-5" />,
      active: false,
      achievements: [
        "Designed and automated ETL pipelines (Talend, Python, SSIS) to streamline data processing, reducing preparation time by 30%.",
        "Developed optimized SQL queries and created Power BI dashboards (DAX) to track strategic KPIs.",
        "Implemented a data quality control system, improving analysis reliability by 25%.",
        "Collaborated in Agile Scrum mode with stakeholders to align analyses with business needs."
      ]
    },
    {
      id: 3,
      role: "Machine Learning Engineer Intern (PFE)",
      company: "ZJS CONSULTING",
      location: "Remote",
      period: "Feb 2023 - Sep 2023",
      icon: <Bot className="w-5 h-5" />,
      active: false,
      achievements: [
        "Developed a text generation and audio classification model using Python, TensorFlow, and Keras.",
        "Created a web application (Django) integrating an ML API for speech recognition, achieving a 15% increase in transcription accuracy.",
        "Authored comprehensive technical documentation to ensure result reproducibility."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0B1120] relative overflow-hidden text-slate-200">
      
      {/* Effets de lumière en arrière-plan (Glow) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de la section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Experience</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My professional journey in data analysis, engineering, and machine learning
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Ligne verticale de la timeline avec dégradé */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent"></div>

          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="relative pl-14 md:pl-16 group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icône de la Timeline */}
              <div className={`absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full border-2 bg-[#0B1120] z-10 transition-all duration-500 ${
                experience.active 
                  ? 'border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:bg-blue-500/10' 
                  : 'border-slate-700 text-slate-500 group-hover:border-slate-500 group-hover:text-slate-300'
              }`}>
                {experience.icon}
              </div>

              {/* Carte de l'expérience */}
              <div className={`rounded-2xl border p-6 md:p-8 backdrop-blur-sm transition-all duration-500 shadow-sm relative overflow-hidden ${
                experience.active
                  ? 'border-blue-500/20 bg-slate-800/30 hover:bg-slate-800/50 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                  : 'border-slate-800/80 bg-[#111827]/50 hover:border-slate-700 hover:bg-[#111827]/80'
              }`}>
                
                {/* Lueur interne très subtile sur hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${experience.active ? 'text-white group-hover:text-blue-400' : 'text-slate-200'}`}>
                        {experience.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400 text-sm">
                        <div className="flex items-center gap-1.5 font-medium text-slate-300">
                          <Building2 className="w-4 h-4 text-emerald-400/80" />
                          {experience.company}
                        </div>
                        <div className="hidden sm:block text-slate-600">|</div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-blue-400/80" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    <Badge className={`w-fit text-xs px-3 py-1 font-medium border-none shrink-0 ${
                      experience.active 
                        ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' 
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700'
                    }`}>
                      {experience.period}
                    </Badge>
                  </div>

                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed group/item">
                        <span className={`mr-4 mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                          experience.active ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-slate-600 group-hover/item:bg-emerald-400/50'
                        }`} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;