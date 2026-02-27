import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { STATE_DATA } from "@/data/state-data";
import { LazyMotion, domAnimation } from "framer-motion";
import Home from "@/pages/home";

/**
 * CLIENT-SIDE ROUTING CONFIGURATION
 * -------------------------------
 * This application uses wouter for lightweight client-side routing.
 * All routes are defined here.
 * 
 * SEO NOTE:
 * Since this is a SPA (Single Page Application), the initial HTML payload
 * is minimal. We use the <SeoHead> component on each page to dynamically
 * inject Title, Meta Tags, and JSON-LD Schema for crawlers that execute JS (like Google).
 */

// Lazy load pages for performance optimization
// Home is now statically imported for LCP optimization
const HomeES = lazy(() => import("@/pages/home-es")); // Spanish
const NotFound = lazy(() => import("@/pages/not-found"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy"));
const TermsOfService = lazy(() => import("@/pages/terms"));
const StateLandingPage = lazy(() => import("@/components/state-landing-page"));
const CityLandingPage = lazy(() => import("@/pages/city-landing-page")); // City

// New Pages
const AboutPage = lazy(() => import("@/pages/about"));
const AttorneyProfilePage = lazy(() => import("@/pages/attorney-profile")); // New Profile Page
const JoinNetworkPage = lazy(() => import("@/pages/join-network"));
const CalculatorPage = lazy(() => import("@/pages/calculator"));
const BlogPage = lazy(() => import("@/pages/blog"));
const BlogPostPage = lazy(() => import("@/pages/blog-post")); // Individual Blog Post
const CaseResultsPage = lazy(() => import("@/pages/case-results")); // Case Results
const GlossaryPage = lazy(() => import("@/pages/glossary")); // Glossary
const VsInsurancePage = lazy(() => import("@/pages/vs-insurance")); // Vs Insurance
const SitemapPage = lazy(() => import("@/pages/sitemap")); // Sitemap
const ThankYouPage = lazy(() => import("@/pages/thank-you"));
const SafetyResourcesPage = lazy(() => import("@/pages/safety-resources")); // Safety Resources

// Practice Areas
const TruckAccidentPage = lazy(() => import("@/pages/practice-areas/truck-accident"));
const JackknifeAccidentPage = lazy(() => import("@/pages/practice-areas/truck-accident/jackknife"));
const UnderrideAccidentPage = lazy(() => import("@/pages/practice-areas/truck-accident/underride"));
const MotorcycleAccidentPage = lazy(() => import("@/pages/practice-areas/motorcycle-accident"));
const MotorcycleStateLandingPage = lazy(() => import("@/components/motorcycle-state-landing-page"));
const TruckStateLandingPage = lazy(() => import("@/components/truck-state-landing-page"));
const PedestrianStateLandingPage = lazy(() => import("@/components/pedestrian-state-landing-page"));
const BusStateLandingPage = lazy(() => import("@/components/bus-state-landing-page"));
const WorkplaceStateLandingPage = lazy(() => import("@/components/workplace-state-landing-page"));
const SlipFallStateLandingPage = lazy(() => import("@/components/slip-fall-state-landing-page"));
const WrongfulDeathPage = lazy(() => import("@/pages/practice-areas/wrongful-death"));
const PersonalInjuryPage = lazy(() => import("@/pages/practice-areas/personal-injury"));
const PersonalInjuryStatePage = lazy(() => import("@/pages/practice-areas/personal-injury/state-page"));
const RideshareAccidentPage = lazy(() => import("@/pages/practice-areas/rideshare-accident"));
const CarAccidentPage = lazy(() => import("@/pages/practice-areas/car-accident"));
const PedestrianInjuryPage = lazy(() => import("@/pages/practice-areas/pedestrian-injury"));
const BusTransitInjuryPage = lazy(() => import("@/pages/practice-areas/bus-transit-injury"));
const WorkplaceInjuryPage = lazy(() => import("@/pages/practice-areas/workplace-injury"));
const MedicalMalpracticePage = lazy(() => import("@/pages/practice-areas/medical-malpractice"));
const MedicalMalpracticeStateLandingPage = lazy(() => import("@/components/medical-malpractice-state-landing-page"));
const SlipAndFallPage = lazy(() => import("@/pages/practice-areas/slip-and-fall"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
}

function Router() {
  return (
    <LazyMotion features={domAnimation}>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
        <Route path="/es" component={HomeES} />
        
        {/* Core Pages */}
        <Route path="/about" component={AboutPage} />
        <Route path="/attorneys/saad-admani" component={AttorneyProfilePage} />
        <Route path="/join-network" component={JoinNetworkPage} />
        <Route path="/settlement-calculator" component={CalculatorPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/case-results" component={CaseResultsPage} />
        <Route path="/glossary" component={GlossaryPage} />
        <Route path="/vs-insurance" component={VsInsurancePage} />
        <Route path="/sitemap" component={SitemapPage} />
        <Route path="/thank-you" component={ThankYouPage} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/safety-resources" component={SafetyResourcesPage} />

        {/* Practice Areas */}
        <Route path="/practice-areas/truck-accident" component={TruckAccidentPage} />
        <Route path="/practice-areas/truck-accident/jackknife" component={JackknifeAccidentPage} />
        <Route path="/practice-areas/truck-accident/underride" component={UnderrideAccidentPage} />
        <Route path="/practice-areas/motorcycle-accident" component={MotorcycleAccidentPage} />
        <Route path="/practice-areas/wrongful-death" component={WrongfulDeathPage} />
        <Route path="/practice-areas/personal-injury" component={PersonalInjuryPage} />
        
        {/* Personal Injury State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`pi-${state.slug}`} path={`/personal-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <PersonalInjuryStatePage stateData={state} />}
          </Route>
        ))}

        {/* Motorcycle Accident State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`moto-${state.slug}`} path={`/motorcycle-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <MotorcycleStateLandingPage data={state} />}
          </Route>
        ))}

        {/* Truck Accident State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`truck-${state.slug}`} path={`/truck-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <TruckStateLandingPage data={state} />}
          </Route>
        ))}

        {/* Pedestrian Injury State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`ped-${state.slug}`} path={`/pedestrian-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <PedestrianStateLandingPage data={state} />}
          </Route>
        ))}

        {/* Bus Accident State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`bus-${state.slug}`} path={`/bus-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <BusStateLandingPage data={state} />}
          </Route>
        ))}

        {/* Workplace Injury State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`work-${state.slug}`} path={`/workplace-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <WorkplaceStateLandingPage data={state} />}
          </Route>
        ))}

        {/* Medical Malpractice State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`med-${state.slug}`} path={`/medical-malpractice-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <MedicalMalpracticeStateLandingPage data={state} />}
          </Route>
        ))}

        {/* Slip and Fall State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={`fall-${state.slug}`} path={`/slip-and-fall-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}>
            {() => <SlipFallStateLandingPage data={state} />}
          </Route>
        ))}

        <Route path="/practice-areas/rideshare-accident" component={RideshareAccidentPage} />
        <Route path="/practice-areas/car-accident" component={CarAccidentPage} />
        <Route path="/practice-areas/pedestrian-injury" component={PedestrianInjuryPage} />
        <Route path="/practice-areas/bus-transit-injury" component={BusTransitInjuryPage} />
        <Route path="/practice-areas/workplace-injury" component={WorkplaceInjuryPage} />
        <Route path="/practice-areas/medical-malpractice" component={MedicalMalpracticePage} />
        <Route path="/practice-areas/slip-and-fall" component={SlipAndFallPage} />
        
        {/* Dynamic State Routes */}
        {Object.values(STATE_DATA).map((state) => (
          <Route key={state.slug} path={`/${state.slug}`}>
            {() => <StateLandingPage data={state} />}
          </Route>
        ))}

        {/* Dynamic City Routes: /state-slug/city-name */}
        {/* We construct this by iterating states, then their cities */}
        {Object.values(STATE_DATA).flatMap(state => 
          state.cityList.map(city => {
            const citySlug = city.toLowerCase().replace(/ /g, '-');
            return (
              <Route key={`${state.slug}-${citySlug}`} path={`/${state.slug}/${citySlug}`}>
                {() => <CityLandingPage stateData={state} city={city} />}
              </Route>
            );
          })
        )}

        <Route component={NotFound} />
        </Switch>
      </Suspense>
    </LazyMotion>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;