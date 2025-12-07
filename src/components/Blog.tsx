import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "data-pipeline-automation",
      title: "Automating Data Pipelines with Python & Airflow",
      excerpt: "Learn how to build robust, scalable ETL pipelines that save hours of manual work every week.",
      date: "Feb 15, 2025",
      readTime: "8 min read",
      category: "Data Engineering",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "ETL", "Automation"]
    },
    {
      id: "powerbi-advanced-dax",
      title: "Mastering DAX: Advanced Time Intelligence Patterns",
      excerpt: "Deep dive into complex DAX calculations for Year-over-Year growth, moving averages, and more.",
      date: "Jan 28, 2025",
      readTime: "12 min read",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Power BI", "DAX", "Analytics"]
    },
    {
      id: "ml-model-deployment",
      title: "Deploying Machine Learning Models with Django",
      excerpt: "A step-by-step guide to integrating your trained ML models into a production-ready web application.",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      tags: ["Django", "ML", "Deployment"]
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-fade-in-up">
          <div className="text-left">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Latest Insights
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              Thoughts, tutorials, and case studies on data & AI.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group overflow-hidden border border-slate-800 bg-[#111827] hover:border-slate-700 transition-all duration-300 hover:shadow-lg flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container - Clickable Link */}
              <div className="relative h-48 overflow-hidden">
                <Link to={`/blog/${post.id}`} className="block w-full h-full cursor-pointer">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle darken on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
                        </Button>
                    </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;