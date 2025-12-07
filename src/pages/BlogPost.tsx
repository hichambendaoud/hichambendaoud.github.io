import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navigation from "@/components/Navigation";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog data
  const blogPosts: Record<string, any> = {
    "etl-pipeline-talend": {
      title: "How I Built an ETL Pipeline with Talend",
      date: "October 15, 2023",
      readTime: "8 min read",
      author: "Hicham Ben Daoud",
      excerpt: "A comprehensive guide to designing and implementing efficient ETL pipelines using Talend Open Studio.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["ETL", "Talend", "Data Engineering"],
      content: `
        <p>Building efficient ETL (Extract, Transform, Load) pipelines is crucial for any data-driven organization. In this comprehensive guide, I'll walk you through my experience designing and implementing ETL pipelines using Talend Open Studio.</p>
        
        <h2>The Challenge</h2>
        <p>Our organization was struggling with manual data integration processes that were both time-consuming and error-prone. We needed an automated solution that could handle multiple data sources, ensure data quality, and provide reliable error handling.</p>
        
        <h2>Why Talend?</h2>
        <p>After evaluating several ETL tools, we chose Talend Open Studio for several reasons:</p>
        <ul>
          <li>Open-source and cost-effective</li>
          <li>Robust data integration capabilities</li>
          <li>Strong community support</li>
          <li>Excellent documentation</li>
        </ul>
        
        <h2>Implementation Process</h2>
        <p>The implementation involved several key phases:</p>
        
        <h3>1. Data Source Analysis</h3>
        <p>We began by thoroughly analyzing our data sources, including databases, CSV files, and APIs. This helped us understand the data formats, quality issues, and transformation requirements.</p>
        
        <h3>2. Pipeline Design</h3>
        <p>Using Talend's visual interface, we designed the ETL workflows with proper error handling and logging mechanisms.</p>
        
        <h3>3. Testing and Validation</h3>
        <p>Comprehensive testing was performed to ensure data integrity and pipeline reliability.</p>
        
        <h2>Results</h2>
        <p>The implementation yielded impressive results:</p>
        <ul>
          <li>40% reduction in data processing time</li>
          <li>25% improvement in data accuracy</li>
          <li>Automated daily data refresh</li>
          <li>Comprehensive error logging and monitoring</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building ETL pipelines with Talend has significantly improved our data integration processes. The tool's flexibility and robust features make it an excellent choice for organizations looking to automate their data workflows.</p>
      `
    },
    // Default fallback for other IDs for demo purposes
     "powerbi-vs-tableau": {
        title: "Power BI vs Tableau: A Data Analyst's Perspective",
        date: "September 22, 2023",
        readTime: "10 min read",
        author: "Hicham Ben Daoud",
        excerpt: "An in-depth comparison of two leading data visualization tools based on real-world projects.",
        image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2070&auto=format&fit=crop",
        tags: ["Power BI", "Tableau", "Comparison"],
        content: "<p>Content placeholder...</p>"
      }
  };

  const post = blogPosts[slug || ""] || blogPosts["etl-pipeline-talend"]; 

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8 animate-fade-in">
            <Button variant="ghost" className="group text-slate-400 hover:text-white hover:bg-slate-800/50 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Articles
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-10 animate-fade-in-up">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm border-b border-slate-800 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="animate-fade-in">
             <div className="prose prose-lg max-w-none prose-invert 
                prose-headings:text-white prose-headings:font-bold 
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-slate-300 prose-ul:my-6 prose-li:my-2
                prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
             />
          </div>

        </article>
      </div>
    </div>
  );
};

export default BlogPost;