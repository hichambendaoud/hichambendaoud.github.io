import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#0B1120] relative overflow-hidden text-slate-200">
      
      {/* Background Glows for consistency with Hero/Experience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header with Gradient Text */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Optimize Your Business?</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you need a one-off dashboard or a full-scale data pipeline, 
            let's discuss how data can solve your problems.
          </p>
        </div>

        {/* Contact Cards with Glassmorphism and Glow on Hover */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 animate-fade-in">
          
          {/* Email Card */}
          <a 
            href="mailto:hichambendaoudofficiel@gmail.com"
            className="w-full md:w-auto min-w-[320px] group"
          >
            <Card className="bg-slate-900/40 backdrop-blur-md border-slate-800 p-6 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-500/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-slate-200 font-semibold text-sm md:text-base group-hover:text-blue-400 transition-colors">
                    hichambendaoudofficiel<span className="text-blue-500 font-bold mx-0.5">[at]</span>gmail<span className="text-blue-500 font-bold mx-0.5">[dot]</span>com
                  </p>
                </div>
              </div>
            </Card>
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/212694131308" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto min-w-[320px] group"
          >
            <Card className="bg-slate-900/40 backdrop-blur-md border-slate-800 p-6 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:border-green-500/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                  <svg 
                    className="w-6 h-6 text-green-500" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">WhatsApp</p>
                  <p className="text-slate-200 font-semibold text-sm md:text-base group-hover:text-green-400 transition-colors">
                    +212 694 13 ** **
                  </p>
                </div>
              </div>
            </Card>
          </a>

        </div>

        {/* Footer Text */}
        <div className="animate-fade-in pt-8 border-t border-slate-800/50" style={{ animationDelay: '200ms' }}>
          <p className="text-slate-500 text-sm">
            © 2025 Hicham Ben Daoud. Based in Morocco, serving the world.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;