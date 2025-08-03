import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navigation from "@/components/Navigation";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog data - in a real app, this would come from an API or CMS
  const blogPosts: Record<string, any> = {
    "etl-pipeline-talend": {
      title: "How I Built an ETL Pipeline with Talend",
      date: "October 15, 2023",
      readTime: "8 min read",
      author: "Data Analyst",
      excerpt: "A comprehensive guide to designing and implementing efficient ETL pipelines using Talend Open Studio.",
      image: "/lovable-uploads/e9efeb21-3ee2-4db8-9f29-e6b7ce90cdc3.png",
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
        
        <h2>Lessons Learned</h2>
        <p>Throughout this project, I learned several valuable lessons about ETL pipeline design and implementation. Proper planning, thorough testing, and robust error handling are crucial for success.</p>
        
        <h2>Conclusion</h2>
        <p>Building ETL pipelines with Talend has significantly improved our data integration processes. The tool's flexibility and robust features make it an excellent choice for organizations looking to automate their data workflows.</p>
      `
    },
    "powerbi-vs-tableau": {
      title: "Power BI vs Tableau: A Data Analyst's Perspective",
      date: "September 22, 2023",
      readTime: "10 min read",
      author: "Data Analyst",
      excerpt: "An in-depth comparison of two leading data visualization tools based on real-world projects.",
      image: "/lovable-uploads/e9efeb21-3ee2-4db8-9f29-e6b7ce90cdc3.png",
      tags: ["Power BI", "Tableau", "Comparison"],
      content: `
        <p>As a data analyst who has worked extensively with both Power BI and Tableau, I'm often asked which tool is better. The answer, as with most things in data analysis, is: it depends.</p>
        
        <h2>My Background with Both Tools</h2>
        <p>Over the past three years, I've used both Power BI and Tableau for various projects, from simple reporting dashboards to complex data visualization solutions. This hands-on experience has given me unique insights into the strengths and weaknesses of each platform.</p>
        
        <h2>Power BI: Strengths and Use Cases</h2>
        <h3>Integration with Microsoft Ecosystem</h3>
        <p>Power BI's seamless integration with other Microsoft products is its biggest advantage. If your organization already uses Office 365, SharePoint, or Azure, Power BI feels like a natural extension.</p>
        
        <h3>Cost-Effectiveness</h3>
        <p>Power BI offers excellent value for money, especially for organizations already invested in the Microsoft ecosystem.</p>
        
        <h3>DAX Language</h3>
        <p>The Data Analysis Expressions (DAX) language is powerful for complex calculations and measures.</p>
        
        <h2>Tableau: Strengths and Use Cases</h2>
        <h3>Visualization Capabilities</h3>
        <p>Tableau excels in creating sophisticated, interactive visualizations. Its drag-and-drop interface is intuitive and powerful.</p>
        
        <h3>Data Connection Options</h3>
        <p>Tableau supports a wider range of data sources and has better performance with large datasets.</p>
        
        <h3>Advanced Analytics</h3>
        <p>Built-in statistical functions and R/Python integration make Tableau powerful for advanced analytics.</p>
        
        <h2>Real-World Project Comparison</h2>
        <p>I recently worked on two similar projects - one using Power BI and another using Tableau. Here's what I learned:</p>
        
        <h3>Sales Dashboard Project (Power BI)</h3>
        <p>For a sales dashboard integrated with Microsoft Dynamics, Power BI was the clear winner. The setup was straightforward, and the integration was seamless.</p>
        
        <h3>Customer Segmentation Analysis (Tableau)</h3>
        <p>For a complex customer segmentation project requiring advanced visualizations, Tableau's capabilities shined. The ability to create sophisticated charts and interactive filters was superior.</p>
        
        <h2>Decision Framework</h2>
        <p>Here's my framework for choosing between Power BI and Tableau:</p>
        
        <h3>Choose Power BI if:</h3>
        <ul>
          <li>You're heavily invested in Microsoft ecosystem</li>
          <li>Budget is a primary concern</li>
          <li>You need quick deployment and adoption</li>
          <li>Your use cases are primarily reporting-focused</li>
        </ul>
        
        <h3>Choose Tableau if:</h3>
        <ul>
          <li>You need advanced visualization capabilities</li>
          <li>Working with diverse data sources</li>
          <li>Require sophisticated analytics features</li>
          <li>Budget allows for higher licensing costs</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Both Power BI and Tableau are excellent tools, each with their own strengths. The key is understanding your specific needs and choosing the tool that best aligns with your requirements, budget, and existing technology stack.</p>
        
        <p>In my experience, many organizations benefit from having both tools in their toolkit, using each for their respective strengths.</p>
      `
    },
    "ml-arabic-speech": {
      title: "Improving ML Model Accuracy for Arabic Speech Recognition",
      date: "August 5, 2023",
      readTime: "12 min read",
      author: "Data Analyst",
      excerpt: "Technical case study on training and fine-tuning machine learning models for Arabic speech-to-text conversion.",
      image: "/lovable-uploads/e9efeb21-3ee2-4db8-9f29-e6b7ce90cdc3.png",
      tags: ["Machine Learning", "NLP", "Arabic"],
      content: `
        <p>Arabic speech recognition presents unique challenges due to the language's complex morphology, dialectal variations, and limited training data. This case study details my approach to improving model accuracy for Arabic speech-to-text conversion.</p>
        
        <h2>The Challenge</h2>
        <p>Arabic speech recognition faces several technical challenges:</p>
        <ul>
          <li>Dialectal variations across different regions</li>
          <li>Complex morphological structure</li>
          <li>Limited high-quality training datasets</li>
          <li>Right-to-left text processing requirements</li>
        </ul>
        
        <h2>Dataset Preparation</h2>
        <h3>Data Collection</h3>
        <p>We collected audio samples from various Arabic dialects, including Modern Standard Arabic (MSA), Egyptian, Levantine, and Gulf dialects. The dataset consisted of:</p>
        <ul>
          <li>50,000 hours of audio recordings</li>
          <li>Multiple speakers per dialect</li>
          <li>Varied recording conditions</li>
          <li>Professional transcriptions</li>
        </ul>
        
        <h3>Data Preprocessing</h3>
        <p>The preprocessing pipeline included:</p>
        <ul>
          <li>Audio normalization and noise reduction</li>
          <li>Text normalization for Arabic script</li>
          <li>Diacritization handling</li>
          <li>Data augmentation techniques</li>
        </ul>
        
        <h2>Model Architecture</h2>
        <h3>Base Model Selection</h3>
        <p>We started with a transformer-based architecture, specifically adapting the Wav2Vec2 model for Arabic speech recognition.</p>
        
        <h3>Fine-tuning Strategy</h3>
        <p>Our fine-tuning approach involved:</p>
        <ol>
          <li>Pre-training on a large Arabic text corpus</li>
          <li>Fine-tuning on dialect-specific data</li>
          <li>Multi-task learning for dialect identification</li>
          <li>Progressive unfreezing of model layers</li>
        </ol>
        
        <h2>Technical Implementation</h2>
        <h3>Model Training</h3>
        <p>The training process utilized:</p>
        <ul>
          <li>PyTorch framework</li>
          <li>Distributed training across multiple GPUs</li>
          <li>Custom loss functions for Arabic morphology</li>
          <li>Advanced learning rate scheduling</li>
        </ul>
        
        <h3>Evaluation Metrics</h3>
        <p>We evaluated model performance using:</p>
        <ul>
          <li>Word Error Rate (WER)</li>
          <li>Character Error Rate (CER)</li>
          <li>Dialect-specific accuracy</li>
          <li>Real-time factor (RTF)</li>
        </ul>
        
        <h2>Results and Improvements</h2>
        <h3>Performance Gains</h3>
        <p>Our optimized model achieved significant improvements:</p>
        <ul>
          <li>35% reduction in WER compared to baseline</li>
          <li>40% improvement in dialectal recognition</li>
          <li>25% faster inference time</li>
          <li>Better handling of code-switching scenarios</li>
        </ul>
        
        <h3>Dialect-Specific Results</h3>
        <p>Performance varied across dialects:</p>
        <ul>
          <li>MSA: 92% accuracy</li>
          <li>Egyptian: 89% accuracy</li>
          <li>Levantine: 87% accuracy</li>
          <li>Gulf: 85% accuracy</li>
        </ul>
        
        <h2>Key Insights</h2>
        <h3>Data Quality Matters</h3>
        <p>High-quality, diverse training data was crucial for model performance. Dialectal representation in the training set directly correlated with model accuracy.</p>
        
        <h3>Transfer Learning Benefits</h3>
        <p>Pre-training on large Arabic text corpora significantly improved convergence speed and final accuracy.</p>
        
        <h3>Multi-dialect Approach</h3>
        <p>Training a single model on multiple dialects with dialect identification proved more effective than separate models.</p>
        
        <h2>Challenges and Limitations</h2>
        <h3>Computational Requirements</h3>
        <p>Training required significant computational resources and time. Model inference needed optimization for real-world deployment.</p>
        
        <h3>Data Scarcity</h3>
        <p>Limited availability of high-quality dialectal data remained a constraint, especially for less common dialects.</p>
        
        <h2>Future Directions</h2>
        <p>Potential improvements include:</p>
        <ul>
          <li>Incorporating more dialectal variations</li>
          <li>Improving code-switching detection</li>
          <li>Optimizing for mobile deployment</li>
          <li>Adding punctuation and capitalization</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>This project demonstrated that significant improvements in Arabic speech recognition are achievable through careful data preparation, appropriate model architecture, and targeted fine-tuning strategies. The insights gained can be applied to other morphologically complex languages.</p>
        
        <p>The work contributes to making speech recognition technology more accessible for Arabic speakers and opens up new possibilities for Arabic language AI applications.</p>
      `
    }
  };

  const post = blogPosts[slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8 animate-fade-in">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Articles
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12 animate-fade-in-up">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12 animate-fade-in">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate-fade-in">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border animate-fade-in">
            <div className="flex justify-between items-center">
              <Link to="/blog">
                <Button variant="outline" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to All Articles
                </Button>
              </Link>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;