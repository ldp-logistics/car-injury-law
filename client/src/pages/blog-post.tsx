import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { SeoHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2, ArrowLeft, Lightbulb } from "lucide-react";
import { Link, useRoute } from "wouter";
import { BLOG_POSTS_DATA } from "@/data/blog-posts";
import attorneyImg from "@assets/alicia_dawson_paralegal.jpg";

export default function BlogPostPage() {
  const [match, params] = useRoute("/blog/:slug");
  const post = BLOG_POSTS_DATA.find(p => p.slug === params?.slug);

  if (!post) {
    return <div>Post not found</div>; // Or redirect to 404
  }

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title={`${post.title} | Admani Law Blog`}
        description={`Read our legal guide on: ${post.title}. Expert insights from Senior Paralegal Alicia Dawson.`}
        canonicalUrl={`https://www.carinjurylaw.com/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": [post.image],
          "datePublished": post.date,
          "dateModified": post.date,
          "author": [{
              "@type": "Person",
              "name": post.author,
              "url": "https://www.carinjurylaw.com/attorneys/alicia-dawson"
          }],
          "publisher": {
              "@type": "Organization",
              "name": "Admani Law",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.carinjurylaw.com/logo.png"
              }
          },
          "description": `Read our legal guide on: ${post.title}. Expert insights from Senior Paralegal Alicia Dawson.`
        }}
      />
      <NavBar />
      
      <main className="pt-10 pb-20">
        {/* Article Header */}
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
          </Link>
          
          <div className="flex gap-3 mb-6">
            <Badge variant="secondary" className="font-bold">{post.category}</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={attorneyImg} />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold text-slate-900">{post.author}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary" aria-label="Share this post">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Article Image */}
        <div className="container mx-auto px-4 max-w-5xl mb-12">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          
          {/* AI Summary / Key Takeaways Box */}
          {post.takeaways && (
            <div id="key-takeaways" className="bg-slate-50 border-l-4 border-secondary p-6 rounded-r-xl mb-12 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-secondary fill-current" />
                <h2 className="font-bold font-serif text-lg text-primary">Key Takeaways</h2>
              </div>
              <ul className="space-y-2">
                {post.takeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                    <span className="bg-secondary/20 text-secondary font-bold rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <article className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Author Bio / CTA */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-16 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
              <img src={attorneyImg} alt="Alicia Dawson" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-bold font-serif text-primary mb-2">About the Author</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Alicia Dawson is a Senior Paralegal at Car Injury Law with over 15 years of experience in <Link href="/practice-areas/personal-injury" className="text-black hover:underline font-semibold">personal injury</Link> claims. She specializes in case management, client advocacy, and navigating complex insurance procedures to support accident victims.
              </p>
              <Button onClick={scrollToForm} className="bg-secondary text-primary font-bold hover:bg-secondary/90">
                Get a Free Case Evaluation
              </Button>
            </div>
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}