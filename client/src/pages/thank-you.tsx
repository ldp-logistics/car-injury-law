import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    // Defer confetti to avoid blocking main thread during initial render
    const timer = setTimeout(async () => {
      const confetti = (await import("canvas-confetti")).default;
      
      const end = Date.now() + 1500;
      const colors = ['#F59E0B', '#0F172A'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }, 500); // 500ms delay to allow UI to settle

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 font-serif">
            Application Received!
          </h1>
          
          <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100 space-y-6">
            <p className="text-xl text-slate-600 leading-relaxed">
              Thank you for trusting <strong className="text-slate-900">Admani Law</strong>. We have received your case details and are reviewing them immediately.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-secondary p-4 text-left">
              <h3 className="font-bold text-slate-900 mb-1">What happens next?</h3>
              <p className="text-slate-700">
                A member of our intake team will call you from a <strong>(201)</strong> or <strong>(888)</strong> area code within the next few minutes to verify your details. Please keep your phone nearby.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-4">Need immediate assistance?</p>
              <a href="tel:1-888-669-5559">
                <Button className="w-full h-16 text-xl bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-lg group">
                  <Phone className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                  Call 1-888-669-5559 Now
                </Button>
              </a>
            </div>
          </div>

          <div className="pt-8">
            <Link href="/">
              <Button variant="link" className="text-slate-500 hover:text-slate-900">
                Return to Homepage <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}