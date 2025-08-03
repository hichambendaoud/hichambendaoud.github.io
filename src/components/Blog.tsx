import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "etl-pipeline-talend",
      title: "How I Built an ETL Pipeline with Talend",
      excerpt: "A comprehensive guide to designing and implementing efficient ETL pipelines using Talend Open Studio.",
      date: "October 15, 2023",
      readTime: "8 min read",
      icon: "📊",
      tags: ["ETL", "Talend", "Data Engineering"]
    },
    {
      id: "powerbi-vs-tableau",
      title: "Power BI vs Tableau: A Data Analyst's Perspective",
      excerpt: "An in-depth comparison of two leading data visualization tools based on real-world projects.",
      date: "September 22, 2023",
      readTime: "10 min read",
      icon: "📈",
      tags: ["Power BI", "Tableau", "Comparison"]
    },
    {
      id: "ml-arabic-speech",
      title: "Improving ML Model Accuracy for Arabic Speech Recognition",
      excerpt: "Technical case study on training and fine-tuning machine learning models for Arabic speech-to-text conversion.",
      date: "August 5, 2023",
      readTime: "12 min read",
      icon: "🎤",
      tags: ["Machine Learning", "NLP", "Arabic"]
    }
  ];

  return (
    <section id="blog" className="py-16 lg:py-24 bg-gradient-to-r from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16 animate-fade-in-up">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Data Stories & Case Studies
              </span>
            </h2>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group overflow-hidden hover:shadow-card transition-all duration-500 animate-fade-in border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 text-2xl">
                  {post.icon}
                </div>
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
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;