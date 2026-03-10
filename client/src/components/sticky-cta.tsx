import { Phone, MessageSquare } from "lucide-react";

export function StickyCta() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 pb-safe-area flex items-center gap-3">
      <a 
        href="tel:1-888-669-5559" 
        className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors uppercase tracking-wide text-sm"
      >
        <Phone className="h-4 w-4 fill-current" />
        Call 24/7
      </a>
      <button 
        onClick={scrollToForm}
        className="flex-1 bg-secondary hover:bg-secondary/90 text-primary font-bold h-12 rounded-lg shadow-sm transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2"
      >
        <MessageSquare className="h-4 w-4" />
        Free Review
      </button>
      
      {/* Safe Area Spacing for iPhone X+ */}
      <style>{`
        .pb-safe-area {
          padding-bottom: env(safe-area-inset-bottom, 20px);
        }
      `}</style>
    </div>
  );
}