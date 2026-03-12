import { 
  Code2, 
  Database, 
  LayoutGrid, 
  BarChart4, 
  LineChart,
  Brain,
  Network,
  Snowflake,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skills = [
    { 
      name: "Python", 
      icon: <Code2 className="h-8 w-8 md:h-10 md:w-10" />,
      color: "group-hover:text-[#3776AB]"
    },
    { 
      name: "Power BI", 
      icon: <BarChart4 className="h-8 w-8 md:h-10 md:w-10" />,
      color: "group-hover:text-[#F2C811]"
    },
    { 
      name: "SQL Server", 
      icon: <Database className="h-8 w-8 md:h-10 md:w-10" />,
      color: "group-hover:text-[#CC2927]"
    },
    { 
      name: "Tableau", 
      icon: <LineChart className="h-8 w-8 md:h-10 md:w-10" />,
      color: "group-hover:text-[#E97627]"
    },
    // { 
    //   name: "Talend", 
    //   icon: <Network className="h-8 w-8 md:h-10 md:w-10" />,
    //   color: "group-hover:text-[#FF0000]"
    // },
    { 
      name: "Machine Learning", 
      icon: <Brain className="h-8 w-8 md:h-10 md:w-10" />,
      color: "group-hover:text-[#A855F7]"
    },
    { 
      name: "Azure", 
      icon: <LayoutGrid className="h-8 w-8 md:h-10 md:w-10" />,
      color: "group-hover:text-[#0078D4]"
    },
    { 
      name: "Snowflake", 
      icon: <Snowflake className="h-8 w-8 md:h-10 md:w-10" />,
      color: "group-hover:text-[#29B5E8]"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-[#0B1120] relative overflow-hidden">
      {/* Background Glows for consistency with Hero section */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-slate-500 mb-2">
            Powering Solutions With
          </h2>
        </div>

        {/* Skills Row - Minimalist Style matching image */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`text-slate-400 transition-all duration-300 group-hover:scale-110 mb-4 ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="text-[10px] md:text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;