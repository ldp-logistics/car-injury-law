import { Link } from "wouter";
import { Timer, AlertCircle } from "lucide-react";

export function DeadlineWarning() {
  return (
    <section className="bg-amber-50 border-y border-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-amber-200/50">
          <div className="flex-shrink-0 bg-destructive/10 p-6 rounded-full animate-pulse">
            <Timer className="h-10 w-10 text-destructive" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 font-serif">
              <AlertCircle className="h-6 w-6 text-destructive fill-destructive/20" />
              Urgent: Statute of Limitations Warning
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Legal deadlines (Statutes of Limitations) restrict the time you have to file a lawsuit. If you wait too long, <strong className="text-destructive">you will be forever barred from receiving compensation</strong>, regardless of how severe your injuries are.
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-medium">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full border border-red-200">Evidence Disappears</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full border border-red-200">Witnesses Forget</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full border border-red-200">Deadlines Expire</span>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto bg-primary text-white font-bold py-3 px-6 rounded hover:bg-primary/90 transition-colors shadow-lg">
              Check Your Deadline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}