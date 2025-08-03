import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      subtitle: "Languages",
      skills: [
        { name: "Python", icon: "🐍", color: "bg-green-500/10 text-green-600 border-green-500/20" },
        { name: "SQL", icon: "🗃️", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
        { name: "PHP", icon: "🌐", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
        { name: "JavaScript", icon: "⚡", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" },
      ],
      libraries: [
        { name: "Pandas", icon: "🐼", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
        { name: "NumPy", icon: "🔢", color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
      ]
    },
    {
      title: "Data Visualization",
      subtitle: "Tools",
      skills: [
        { name: "Power BI", icon: "📊", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" },
        { name: "Tableau", icon: "📈", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
      ],
      libraries: [
        { name: "Matplotlib", icon: "📉", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" },
        { name: "Seaborn", icon: "🌊", color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-gradient-to-r from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="group hover:shadow-card transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{category.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className={`${skill.color} px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default`}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
                
                {category.libraries && (
                  <>
                    <div className="border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground font-medium mb-3">
                        {category.title === "Programming" ? "Libraries" : "Python"}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {category.libraries.map((library) => (
                          <Badge
                            key={library.name}
                            variant="outline"
                            className={`${library.color} px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default`}
                          >
                            <span className="mr-2">{library.icon}</span>
                            {library.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;