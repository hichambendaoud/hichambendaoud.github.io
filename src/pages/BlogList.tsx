import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const BlogList = () => {
  const allBlogPosts = [
    {
      id: "etl-pipeline-talend",
      title: "How I Built an ETL Pipeline with Talend",
      excerpt: "A comprehensive guide to designing and implementing efficient ETL pipelines using Talend Open Studio.",
      date: "October 15, 2023",
      readTime: "8 min read",
      icon: "📊",
      tags: ["ETL", "Talend", "Data Engineering"],
      featured: true
    },
    {
      id: "powerbi-vs-tableau",
      title: "Power BI vs Tableau: A Data Analyst's Perspective",
      excerpt: "An in-depth comparison of two leading data visualization tools based on real-world projects.",
      date: "September 22, 2023",
      readTime: "10 min read",
      icon: "📈",
      tags: ["Power BI", "Tableau", "Comparison"],
      featured: true
    },
    {
      id: "ml-arabic-speech",
      title: "Improving ML Model Accuracy for Arabic Speech Recognition",
      excerpt: "Technical case study on training and fine-tuning machine learning models for Arabic speech-to-text conversion.",
      date: "August 5, 2023",
      readTime: "12 min read",
      icon: "🎤",
      tags: ["Machine Learning", "NLP", "Arabic"],
      featured: true
    },
    {
      id: "data-cleaning-python",
      title: "Advanced Data Cleaning Techniques in Python",
      excerpt: "Explore sophisticated data cleaning methods using Pandas and NumPy for better data quality.",
      date: "July 18, 2023",
      readTime: "7 min read",
      icon: "🧹",
      tags: ["Python", "Pandas", "Data Cleaning"],
      featured: false
    },
    {
      id: "sql-optimization-tips",
      title: "SQL Query Optimization for Large Datasets",
      excerpt: "Performance tuning strategies for SQL queries when working with big data.",
      date: "June 30, 2023",
      readTime: "9 min read",
      icon: "⚡",
      tags: ["SQL", "Performance", "Database"],
      featured: false
    },
    {
      id: "dashboard-design-principles",
      title: "Dashboard Design Principles for Data Analysts",
      excerpt: "Best practices for creating effective and user-friendly data dashboards.",
      date: "June 12, 2023",
      readTime: "6 min read",
      icon: "🎨",
      tags: ["Dashboard", "UX", "Design"],
      featured: false
    }
  ];

  const featuredPosts = allBlogPosts.filter(post => post.featured);
  const regularPosts = allBlogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Data Stories & Case Studies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and case studies from the world of data analysis, visualization, and machine learning
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group overflow-hidden hover:shadow-card transition-all duration-500 animate-fade-in border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 text-2xl">
                      {post.icon}
                    </div>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 w-fit">
                      Featured
                    </Badge>
                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link to={`/blog/${post.id}`} className="block">
                      <Button variant="ghost" className="w-full justify-start p-0 h-auto font-semibold text-primary group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">All Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group hover:shadow-card transition-all duration-500 animate-fade-in border-0 bg-card/30 backdrop-blur-sm"
                  style={{ animationDelay: `${(index + featuredPosts.length) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg text-xl flex-shrink-0">
                        {post.icon}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                          
                          <Link to={`/blog/${post.id}`}>
                            <Button variant="ghost" size="sm" className="group">
                              Read
                              <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;