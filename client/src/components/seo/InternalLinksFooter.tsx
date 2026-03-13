import { Link } from "wouter";

interface InternalLinksFooterProps {
  links?: { label: string; href: string }[];
  title?: string;
}

export function InternalLinksFooter({ links, title = "Related Legal Resources" }: InternalLinksFooterProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold font-serif text-primary mb-6">{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="text-primary/70 hover:text-secondary font-medium transition-colors flex items-center gap-2 group"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-secondary group-hover:scale-125 transition-transform" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
