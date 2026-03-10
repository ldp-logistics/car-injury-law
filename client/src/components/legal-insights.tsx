import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "5 Things Never to Say to an Insurance Adjuster",
    category: "Legal Tips",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop"
  },
  {
    title: "Understanding Your Policy: Uninsured Motorist Coverage",
    category: "Insurance",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=400&h=250&fit=crop"
  },
  {
    title: "What to Do Immediately After a Truck Accident",
    category: "Guides",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1605218427368-35b0f996d916?w=400&h=250&fit=crop"
  }
];

export function LegalInsights() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-bold tracking-wider text-sm uppercase">Knowledge Base</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-primary">
              Latest Legal Insights
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-primary">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <BookOpen className="h-3 w-3" />
                  {article.readTime}
                </div>
                <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium flex items-center gap-1 mt-4">
                  Read Article <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}