import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! I'm the intake specialist for Car Injury Law.", isUser: false },
    { text: "Do you have questions about a potential case? I'm here to help 24/7.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue("");

    // Simulate bot typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for reaching out. To better assist you, please call our priority line at 1-888-669-5559 or fill out the free case review form on this page.", 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-lg shadow-2xl border border-gray-200 w-[320px] md:w-[350px] mb-4 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-secondary text-primary font-bold">AI</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Intake Specialist</p>
                  <p className="text-blue-200 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    3 Agents Online Now
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 h-8 w-8">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.isUser 
                        ? 'bg-secondary text-primary font-medium rounded-br-none' 
                        : 'bg-white border border-gray-200 text-gray-800 shadow-sm rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..." 
                aria-label="Type a message..."
                className="flex-1 bg-gray-100 border-none rounded-full px-4 text-sm focus:ring-1 focus:ring-secondary focus:outline-none"
              />
              <Button size="icon" onClick={handleSend} className="bg-primary hover:bg-primary/90 rounded-full h-9 w-9" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary hover:bg-secondary/90 text-primary rounded-full p-4 shadow-lg flex items-center gap-2 font-bold group"
      >
        <MessageSquare className="h-6 w-6 fill-current" />
        <span className="hidden md:inline max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Chat With Us
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white"></span>
        )}
      </motion.button>
    </div>
  );
}