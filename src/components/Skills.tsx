import { 
  Code2, 
  Database, 
  LayoutGrid, 
  BarChart4, 
  FileCode2,
  LineChart,
  Brain,
  Network
} from "lucide-react";

const Skills = () => {
  const skills = [
    { 
      name: "Python", 
      icon: <Code2 className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    },
    { 
      name: "Power BI", 
      icon: <BarChart4 className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    },
    { 
      name: "SQL", 
      icon: <Database className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    },
    { 
      name: "Tableau", 
      icon: <LineChart className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    },
    { 
      name: "Talend", 
      icon: <Network className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    },
    { 
      name: "Machine Learning", 
      icon: <Brain className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    },
    { 
      name: "Azure", 
      icon: <LayoutGrid className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    },
    { 
      name: "Django", 
      icon: <FileCode2 className="h-8 w-8 md:h-9 md:w-9 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" /> 
    }
  ];

  return (
    <section id="skills" className="py-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
            POWERING SOLUTIONS WITH
          </h2>
        </div>

        {/* Skills Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-20">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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