import { FileSearch, Scale, Handshake, Gavel } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "1. Free Consultation",
    desc: "Tell us what happened. We review your case for free and explain your rights immediately."
  },
  {
    icon: Scale,
    title: "2. Investigation",
    desc: "Our team gathers evidence, police reports, and medical records to build a rock-solid case."
  },
  {
    icon: Handshake,
    title: "3. Negotiation",
    desc: "We demand maximum compensation from the insurance company. We handle all the talking."
  },
  {
    icon: Gavel,
    title: "4. Settlement or Trial",
    desc: "You get paid. If they refuse to pay what's fair, we are ready to take them to court."
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background decorative line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">The Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif">
            How We Win Your Case
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            The legal system is complex, but our process is simple. We handle the heavy lifting so you can focus on healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl h-full hover:bg-slate-800 transition-colors">
                <div className="h-14 w-14 bg-secondary text-primary rounded-lg flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}