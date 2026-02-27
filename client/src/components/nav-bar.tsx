import { Phone, Menu, Globe, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReferralModal } from "./referral-modal";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [location, setLocation] = useLocation();

  const handleLangChange = (l: string) => {
    setLang(l);
    if (l === "ES") {
      setLocation("/es");
    } else {
      setLocation("/");
    }
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar for Urgency */}
      <div className="bg-slate-900 text-white text-xs py-1.5 text-center font-medium tracking-wide hidden sm:block border-b border-white/10">
        <span className="opacity-80">The Premier National Injury Network • Powered by <strong><a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/90 transition-colors">ADMANI LAW</a></strong></span>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center cursor-pointer group">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white h-10 w-10 flex items-center justify-center rounded-sm font-serif font-bold text-xl shadow-md group-hover:bg-primary/90 transition-colors">
                C
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-primary font-serif font-bold text-2xl leading-none tracking-tighter">CarInjuryLaw<span className="text-secondary">.com</span></span>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase ml-12 mt-0.5">
              A Division of <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Admani Law</a>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-6 mr-4">
              <Link href="/about">
                <span className="text-primary/80 font-bold hover:text-primary transition-colors text-sm uppercase tracking-wide cursor-pointer">About</span>
              </Link>
              <Link href="/blog">
                <span className="text-primary/80 font-bold hover:text-primary transition-colors text-sm uppercase tracking-wide cursor-pointer">Insights</span>
              </Link>
              <Link href="/glossary">
                <span className="text-primary/80 font-bold hover:text-primary transition-colors text-sm uppercase tracking-wide cursor-pointer">Glossary</span>
              </Link>
              <Link href="/settlement-calculator">
                <span className="text-primary/80 font-bold hover:text-primary transition-colors text-sm uppercase tracking-wide cursor-pointer">Calculator</span>
              </Link>
            </div>
            
            <ReferralModal />

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-primary px-2 font-bold">
                  <Globe className="h-4 w-4" />
                  {lang}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleLangChange("EN")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLangChange("ES")}>Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-10 w-px bg-gray-200 mx-2"></div>
            
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] text-destructive font-black uppercase tracking-wider animate-pulse">24/7 Emergency Line</span>
              <a href="tel:1-888-669-5559" className="flex items-center gap-2 text-2xl font-black text-primary hover:text-primary/80 font-serif leading-none tracking-tight">
                1-888-669-5559
              </a>
            </div>

            <Button onClick={scrollToForm} className="bg-secondary hover:bg-secondary/90 text-primary font-black shadow-md py-6 px-6 text-base uppercase tracking-wide">
              Free Case Review
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:1-888-669-5559" className="flex items-center justify-center bg-secondary h-10 w-10 rounded-full text-primary shadow-md animate-pulse" aria-label="Call Now">
              <Phone className="h-5 w-5 fill-current" />
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu className="h-8 w-8 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                   <div className="border-b pb-4 mb-2">
                     <span className="text-xl font-serif font-bold text-primary">CarInjuryLaw.com</span>
                     <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">A Division of <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Admani Law</a></p>
                   </div>

                  <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-primary">About Us</Link>
                  <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg font-bold text-primary">Legal Insights</Link>
                  <Link href="/settlement-calculator" onClick={() => setIsOpen(false)} className="text-lg font-bold text-primary">Calculator</Link>
                  <Link href="/join-network" onClick={() => setIsOpen(false)} className="text-lg font-bold text-primary">Attorney Referral</Link>
                  
                  <div className="h-px bg-gray-200 my-2" />
                  <div className="flex justify-between items-center">
                     <span className="text-sm font-bold text-gray-600">Language</span>
                     <div className="flex gap-2">
                       <button onClick={() => handleLangChange("EN")} className={`px-3 py-1 text-xs font-bold rounded ${lang === 'EN' ? 'bg-primary text-white' : 'bg-gray-100'}`}>EN</button>
                       <button onClick={() => handleLangChange("ES")} className={`px-3 py-1 text-xs font-bold rounded ${lang === 'ES' ? 'bg-primary text-white' : 'bg-gray-100'}`}>ES</button>
                     </div>
                  </div>
                  <Button onClick={scrollToForm} className="bg-destructive w-full text-lg h-14 mt-4 font-bold shadow-xl uppercase">GET HELP NOW</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}