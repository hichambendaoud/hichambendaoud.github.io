import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 min-h-[80vh]">
      
      {/* TEXT SIDE (Left) */}
      <div className="flex-1 text-center md:text-left animate-fade-in-up">
        
        {/* Availability Badge */}
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full animate-pulse border border-primary/20">
          Available for new opportunities
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
          Turning Raw Data into <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Business Growth
          </span>
        </h1>
        
        {/* Bio */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Hi, I'm <strong className="text-foreground">Hicham Ben Daoud</strong>. I build automated data pipelines, interactive dashboards, and AI solutions that help businesses make smarter decisions. Specialized in Python, Power BI, and Azure.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          
          <a href="/cv.pdf" download="CV_Hicham_Ben_Daoud.pdf">
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" /> 
              Download CV
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center md:justify-start space-x-6">
          <a
            href="https://linkedin.com/in/hicham-ben-daoud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="mailto:hicham.bendaoudd@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* IMAGE SIDE (Right) */}
      <div className="flex-1 flex justify-center animate-fade-in">
        {/* Increased dimensions here for a larger circle */}
        <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-border/50 shadow-2xl group cursor-pointer hover:border-primary/50 transition-colors duration-500">
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all z-10 duration-500"></div>
          {/* Image */}
          <img 
            src="/images/hicham_profile.png" 
            alt="Hicham Ben Daoud" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        {/* Optional Floating Decoration Elements */}
         <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl hidden lg:block"></div>
         <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-float blur-xl hidden lg:block" style={{ animationDelay: "1s" }}></div>

      </div>
    </section>
  );
};

export default Hero;