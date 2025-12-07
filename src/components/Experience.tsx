import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Bot } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Data Analyst Trainee",
      company: "JobInTech",
      location: "Rabat, Morocco",
      period: "Apr 2024 - Aug 2024",
      icon: <Briefcase className="w-5 h-5" />,
      active: true,
      achievements: [
        "Designed and automated ETL pipelines (Talend, Python, SSIS) to streamline data processing, reducing preparation time by 30%",
        "Developed optimized SQL queries and created Power BI dashboards (DAX) to track strategic KPIs",
        "Implemented a data quality control system, improving analysis reliability by 25%",
        "Collaborated in Agile Scrum mode with stakeholders to align analyses with business needs"
      ]
    },
    {
      id: 2,
      role: "Machine Learning Engineer Intern (PFE)",
      company: "ZJS CONSULTING",
      location: "Remote",
      period: "Feb 2023 - Sep 2023",
      icon: <Bot className="w-5 h-5" />,
      active: false,
      achievements: [
        "Developed a text generation and audio classification model using Python, TensorFlow, and Keras",
        "Created a web application (Django) integrating an ML API for speech recognition, achieving a 15% increase in transcription accuracy",
        "Authored comprehensive technical documentation to ensure result reproducibility"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20  text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My professional journey in data analysis, engineering, and machine learning
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[18px] md:left-[19px] top-4 bottom-4 w-0.5 bg-slate-800"></div>

          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="relative pl-14 md:pl-16 group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Icon */}
              <div className={`absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full border-2 bg-[#0B1120] z-10 transition-all duration-300 ${
                experience.active 
                  ? 'border-blue-500 text-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]' 
                  : 'border-slate-700 text-slate-500'
              }`}>
                {experience.icon}
              </div>

              {/* Card */}
              <div className="rounded-xl border border-slate-800 bg-[#111827] p-6 hover:border-slate-700 transition-all duration-300 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {experience.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="font-medium text-slate-300">{experience.company}</span>
                      <span className="text-slate-600">|</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <Badge className={`w-fit text-xs px-3 py-1 font-medium border-none ${
                    experience.active 
                      ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}>
                    {experience.period}
                  </Badge>
                </div>

                <ul className="space-y-3">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full shrink-0 opacity-70" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;