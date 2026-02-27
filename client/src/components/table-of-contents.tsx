import { useState, useEffect } from "react";
import { List, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "statute", label: "Statute of Limitations" },
    { id: "fault-system", label: "Fault System" },
    { id: "accident-types", label: "Accident Types" },
    { id: "faq", label: "FAQ" },
    { id: "areas-served", label: "Areas Served" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // On mobile, close after click
      if (window.innerWidth < 768) setIsOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 bg-slate-50 border-b border-slate-100 cursor-pointer md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-primary text-sm uppercase tracking-wide">On This Page</h3>
        <button className="md:hidden text-slate-500">
          {isOpen ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
        </button>
      </div>
      
      <div className={cn(
        "transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"
      )}>
        <ul className="p-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm rounded transition-colors",
                  activeSection === section.id
                    ? "bg-secondary/10 text-primary font-bold border-l-2 border-secondary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                )}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}