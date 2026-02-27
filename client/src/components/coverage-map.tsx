import { InteractiveMap } from "./interactive-map";

export function CoverageMap() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">Nationwide Network</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 font-serif">
            Licensed In Your State
          </h2>
        </div>
        <InteractiveMap />
      </div>
    </section>
  );
}