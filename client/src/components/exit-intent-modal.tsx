import { Link } from "wouter";
import { useState, useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ExitIntentModal() {
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if moving mouse towards top of viewport (tabs/url bar)
      if (e.clientY <= 0 && !hasShown) {
        setShowModal(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleGetReview = () => {
    setShowModal(false);
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!showModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-xl shadow-2xl max-w-lg w-full relative overflow-hidden border-t-8 border-destructive"
        >
          <button 
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            
            <h2 className="text-3xl font-bold text-primary mb-2 font-serif">Wait! Don't Leave Empty Handed.</h2>
            <p className="text-lg text-muted-foreground mb-6">
              You only have a limited time to file your <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">injury claim</Link>. Find out if you qualify for <Link href="/settlement-calculator" className="text-primary hover:underline font-semibold">compensation</Link> instantly.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
              <p className="font-bold text-primary text-lg">Call Priority Line:</p>
              <p className="text-3xl font-bold text-secondary font-serif">1-888-669-5559</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button 
                className="w-full bg-destructive hover:bg-destructive/90 text-white font-bold text-lg h-12"
                onClick={handleGetReview}
              >
                GET MY FREE CASE REVIEW
              </Button>
              <button 
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-400 underline hover:text-gray-600"
              >
                No thanks, I don't want compensation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}