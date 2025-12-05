
import React, { useState } from "react";
import { 
  Code, 
  Database, 
  BarChart, 
  LineChart,
  Table,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  // State for mobile collapsible sections
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    languages: true,
    libraries: true,
    tools: true,
    pythonViz: true
  });

  // Toggle function for collapsible sections
  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Icon component for skills
  const SkillIcon = ({ skill }: { skill: string }) => {
    switch (skill.toLowerCase()) {
      case 'python':
        return <Code className="h-5 w-5 text-blue-500" />;
      case 'sql':
        return <Database className="h-5 w-5 text-amber-500" />;
      case 'php':
        return <Code className="h-5 w-5 text-purple-700" />;
      case 'javascript':
      case 'js':
        return <Code className="h-5 w-5 text-yellow-500" />;
      case 'power bi':
        return <BarChart className="h-5 w-5 text-yellow-500" />;
      case 'tableau':
        return <LineChart className="h-5 w-5 text-green-500" />;
      case 'pandas':
        return <Table className="h-5 w-5 text-purple-500" />;
      case 'numpy':
        return <Code className="h-5 w-5 text-blue-700" />;
      case 'matplotlib':
        return <LineChart className="h-5 w-5 text-red-500" />;
      case 'seaborn':
        return <LineChart className="h-5 w-5 text-teal-500" />;
      default:
        return <Code className="h-5 w-5 text-gray-500" />;
    }
  };

  // Component for a skill item with icon
  const SkillItem = ({ skill }: { skill: string }) => (
    <div className="flex items-center gap-1.5">
      <SkillIcon skill={skill} />
      <span>{skill}</span>
    </div>
  );

  // Component for a skill category
  const SkillCategory = ({ 
    title, 
    skills, 
    categoryId 
  }: { 
    title: string; 
    skills: string[];
    categoryId: string;
  }) => {
    const isOpen = openCategories[categoryId];
    
    return (
      <div className="mb-4">
        {/* Desktop view - always expanded */}
        <div className="hidden md:block">
          <h4 className="text-sm font-medium mb-2">{title}</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Mobile view - collapsible */}
        <Collapsible
          open={isOpen}
          onOpenChange={() => toggleCategory(categoryId)}
          className="md:hidden"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
            <h4 className="text-sm font-medium">{title}</h4>
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  };

  return (
    <section id="skills" className="py-12 bg-secondary/30 dark:bg-secondary/10">
      <div className="container px-4 md:px-6">
        <h2 className="section-title text-center mb-10">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            
            <Card className="p-4">
              <SkillCategory 
                title="Languages" 
                skills={["Python", "SQL", "PHP", "JavaScript"]} 
                categoryId="languages"
              />
              
              <Separator className="my-3" />
              
              <SkillCategory 
                title="Libraries" 
                skills={["Pandas", "NumPy"]} 
                categoryId="libraries"
              />
            </Card>
          </div>

          {/* Data Visualization Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Data Visualization</h3>
            
            <Card className="p-4">
              <SkillCategory 
                title="Tools" 
                skills={["Power BI", "Tableau"]} 
                categoryId="tools"
              />
              
              <Separator className="my-3" />
              
              <SkillCategory 
                title="Python" 
                skills={["Matplotlib", "Seaborn"]} 
                categoryId="pythonViz"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;