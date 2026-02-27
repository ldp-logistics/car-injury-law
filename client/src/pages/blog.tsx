import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StickyCta } from "@/components/sticky-cta";
import { SeoHead } from "@/components/seo-head";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import { BLOG_POSTS_DATA } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Legal Insights & Resources | Admani Law Blog"
        description="Expert articles on personal injury law, car accident settlements, and insurance claims. Stay informed with Admani Law."
        canonicalUrl="https://www.carinjurylaw.com/blog"
      />
      <NavBar />
      
      <main className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-serif text-slate-900 mb-4">Legal Insights</h1>
            <p className="text-xl text-slate-600">Resources to help you understand your rights.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS_DATA.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-none shadow-md group cursor-pointer h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4 text-xs text-slate-500 font-bold uppercase tracking-wider">
                      <span className="text-secondary">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex-1" />
                    <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform mt-4">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}