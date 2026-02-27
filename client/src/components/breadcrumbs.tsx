import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm text-muted-foreground bg-background/50 backdrop-blur-sm sticky top-24 z-30 border-b border-border/50">
      <div className="container mx-auto px-4">
        <ol className="flex items-center flex-wrap gap-2">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-300" />
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="font-bold text-primary" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}