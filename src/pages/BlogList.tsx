import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const allBlogPosts = [
    {
      id: "etl-pipeline-talend",
      title: "How I Built an ETL Pipeline with Talend",
      excerpt: "A comprehensive guide to designing and implementing efficient ETL pipelines using Talend Open Studio.",
      date: "October 15, 2023",
      readTime: "8 min read",
      category: "Data Engineering",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["ETL", "Talend", "Data Engineering"],
      featured: true
    },
    {
      id: "powerbi-vs-tableau",
      title: "Power BI vs Tableau: A Data Analyst's Perspective",
      excerpt: "An in-depth comparison of two leading data visualization tools based on real-world projects.",
      date: "September 22, 2023",
      readTime: "10 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2070&auto=format&fit=crop",
      tags: ["Power BI", "Tableau", "Comparison"],
      featured: true
    },
    {
      id: "ml-arabic-speech",
      title: "Improving ML Model Accuracy for Arabic Speech Recognition",
      excerpt: "Technical case study on training and fine-tuning machine learning models for Arabic speech-to-text conversion.",
      date: "August 5, 2023",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      tags: ["Machine Learning", "NLP", "Arabic"],
      featured: true
    },
    {
      id: "data-cleaning-python",
      title: "Advanced Data Cleaning Techniques in Python",
      excerpt: "Explore sophisticated data cleaning methods using Pandas and NumPy for better data quality.",
      date: "July 18, 2023",
      readTime: "7 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
      tags: ["Python", "Pandas", "Data Cleaning"],
      featured: false
    },
    {
      id: "sql-optimization-tips",
      title: "SQL Query Optimization for Large Datasets",
      excerpt: "Performance tuning strategies for SQL queries when working with big data.",
      date: "June 30, 2023",
      readTime: "9 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2121&auto=format&fit=crop",
      tags: ["SQL", "Performance", "Database"],
      featured: false
    },
    {
      id: "dashboard-design-principles",
      title: "Dashboard Design Principles for Data Analysts",
      excerpt: "Best practices for creating effective and user-friendly data dashboards.",
      date: "June 12, 2023",
      readTime: "6 min read",
      category: "Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Dashboard", "UX", "Design"],
      featured: false
    }
  ];

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(allBlogPosts.map(p => p.category)))];

  // Filter posts based on selection
  const filteredPosts = activeCategory === "All" 
    ? allBlogPosts 
    : allBlogPosts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link to="/" className="inline-block mb-8 animate-fade-in">
                <Button variant="ghost" className="group text-slate-400 hover:text-white hover:bg-slate-800">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Button>
            </Link>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">
                BLOG
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Data Stories & Insights
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Insights, tutorials, and case studies from the world of data analysis, visualization, and machine learning
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                // Toggle logic: if clicking active category, reset to "All" (unless it's already "All")
                onClick={() => setActiveCategory(prev => (prev === category && category !== "All") ? "All" : category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border border-slate-800 bg-[#111827] hover:border-slate-700 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container - Clickable Link */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <Link to={`/blog/${post.id}`} className="block w-full h-full cursor-pointer relative group/image">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300" />
                  </Link>
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3 pt-5 px-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="group-hover:text-blue-400 transition-colors">
                    <CardTitle className="text-xl font-bold text-white line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0 flex flex-col flex-grow justify-between gap-4">
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                      <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-xs font-medium text-slate-500">#{tag}</span>
                          ))}
                      </div>
                      <Link to={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0 h-auto font-semibold">
                              Read More
                              <ArrowRight className="ml-1.5 h-3 w-3" />
                          </Button>
                      </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;