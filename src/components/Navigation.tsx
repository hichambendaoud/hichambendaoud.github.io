import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-80px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    if (location.pathname === "/") {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Certifications", href: "/#certifications" },
    // { name: "Blog", href: "/#blog" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
        if (location.pathname !== "/") {
            window.location.href = "/";
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHireMeClick = () => {
    setIsMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== "/") {
       window.location.href = "/#contact";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Changed to Name */}
          <Link 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              handleLogoClick();
            }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r text-white from-blue-400 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 truncate"
          >
            Hicham <span className="text-primary">BEN DAOUD</span> 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative",
                  location.pathname === "/" && activeSection === item.href.substring(2)
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {item.name}
                {location.pathname === "/" && activeSection === item.href.substring(2) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Hire Me & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
                {/* Glowing border with pulse animation - Always visible */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 animate-pulse"></div>
                <Button 
                  className="relative hidden md:inline-flex h-9 px-4 text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg border-0 transition-all duration-300"
                  onClick={handleHireMeClick}
                >
                  Hire Me
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-lg",
                    location.pathname === "/" && activeSection === item.href.substring(2)
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button 
                  className="w-full h-9 px-4 text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold border-0 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                  onClick={handleHireMeClick}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;