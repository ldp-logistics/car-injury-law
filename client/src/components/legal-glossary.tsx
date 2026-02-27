import { Link } from "wouter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const terms = [
  { term: "Contingency Fee", def: "A payment model where the lawyer only gets paid if they win your case. The fee comes out of the settlement, not your pocket." },
  { term: "Liability", def: "Legal responsibility for an accident. Determining liability is the first step in any injury case." },
  { term: "Deposition", def: "A formal interview where witnesses answer questions under oath before a trial." },
  { term: "Statute of Limitations", def: "The strict legal deadline by which you must file a lawsuit or lose your right to sue." },
  { term: "Maximum Medical Improvement", def: "The point where your condition has stabilized and is unlikely to improve further. Settlements usually happen after this." },
  { term: "Uninsured Motorist (UM)", def: "Coverage that pays for your injuries if the at-fault driver has no insurance or flees the scene." },
];

export function LegalGlossary() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold font-serif text-primary"><Link href="/glossary" className="text-primary hover:underline font-semibold">Legal Terminology</Link> Decoded</h3>
          <p className="text-muted-foreground">Hover over common terms to understand what they mean.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <TooltipProvider>
            {terms.map((item, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <button className="bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-full text-sm font-bold text-primary flex items-center gap-2 transition-colors border border-slate-200">
                    {item.term}
                    <Info className="h-3 w-3 text-secondary" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-4 bg-slate-900 text-white border-slate-800">
                  <p className="font-bold mb-1 text-secondary">{item.term}</p>
                  <p className="text-xs leading-relaxed">{item.def}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}