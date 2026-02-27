import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const recentActivity = [
  { name: "Michael S.", location: "Texas", action: "received a free case review", time: "2 minutes ago" },
  { name: "Jennifer L.", location: "Florida", action: "started a consultation", time: "12 minutes ago" },
  { name: "David R.", location: "California", action: "qualified for compensation", time: "4 minutes ago" },
  { name: "Sarah W.", location: "Ohio", action: "spoke with an attorney", time: "8 minutes ago" },
  { name: "Robert M.", location: "New York", action: "filed a claim", time: "15 minutes ago" },
];

export function SocialProof() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(() => setIsVisible(true), 8000);

    // Cycle through activities
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % recentActivity.length);
        setIsVisible(true);
      }, 2000); // Wait for exit animation
    }, 24000); // Show every 24 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-24 left-4 z-40 bg-white rounded-lg shadow-lg border border-secondary/20 p-4 max-w-xs hidden md:flex items-center gap-3"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-primary">
              {recentActivity[current].name} from {recentActivity[current].location}
            </p>
            <p className="text-xs text-muted-foreground">
              Just {recentActivity[current].action}
            </p>
            <p className="text-[10px] text-gray-400 mt-1">Verified • {recentActivity[current].time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}