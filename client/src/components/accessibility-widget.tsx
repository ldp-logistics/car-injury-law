import { useState } from "react";
import { Eye, Type, Sun, Moon, X, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const toggleContrast = () => {
    setContrast(!contrast);
    document.documentElement.classList.toggle("high-contrast");
  };

  const toggleText = () => {
    setLargeText(!largeText);
    document.documentElement.classList.toggle("large-text");
  };

  return (
    <div className="fixed bottom-24 left-4 z-50 md:bottom-6 md:left-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 mb-2 origin-bottom-left"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-primary">Accessibility Tools</h4>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={toggleText}
                className={`w-full flex items-center justify-between p-3 rounded-md border transition-colors ${largeText ? 'bg-primary text-white border-primary' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}
              >
                <span className="flex items-center gap-2"><Type className="h-4 w-4" /> Larger Text</span>
                <span className="text-xs font-bold">{largeText ? 'ON' : 'OFF'}</span>
              </button>
              
              <button 
                onClick={toggleContrast}
                className={`w-full flex items-center justify-between p-3 rounded-md border transition-colors ${contrast ? 'bg-primary text-white border-primary' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}
              >
                <span className="flex items-center gap-2"><Eye className="h-4 w-4" /> High Contrast</span>
                <span className="text-xs font-bold">{contrast ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-12 w-12 bg-primary text-white shadow-lg hover:bg-primary/90"
        aria-label="Accessibility Options"
      >
        <Accessibility className="h-6 w-6" />
      </Button>
    </div>
  );
}