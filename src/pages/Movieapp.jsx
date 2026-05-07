import { motion } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const MovieAppCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-6 lg:px-20 font-sans selection:bg-[#DB007D] selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Navigation - With simple color transition */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#DB007D] transition-colors mb-12 group">
          <HiOutlineArrowLeft /> Project Index / MovieApp Case Study
        </Link>

        {/* Content Body */}
        <div className="space-y-32 text-lg leading-relaxed text-slate-900/90">
          
          {/* Section 1: Topic & Vision - Consecutive side-by-side */}
          <section className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">01. Topic</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">The Cinematic Concierge</h3>
            <p>
              MovieApp is a curated streaming ecosystem designed to bridge the gap between massive content libraries and human emotion. We began by refining the main onboarding entry points, focusing on immediate visual immersion and personalized language selection to reduce time-to-value.
            </p>
            <div className="flex flex-col md:flex-row gap-6 pt-10 items-center justify-center">
              <img src="/movie/homescreen.png" alt="Homescreen with personalized banners" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src="/movie/language.png" alt="Language selection with country flags" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
            <p className="text-sm text-slate-500 italic text-center">Fig 1: Reducing grid density to highlight premium, mood-aligned content.</p>
          </section>

          {/* Section 2: Problem Statement (PS) - PS and Auth pair side-by-side */}
          <section className="p-10 space-y-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">02. Problem Statement (PS)</h2>
              <h3 className="text-3xl font-bold">Solving "Choice Paralysis" & Auth Friction</h3>
              <p>
                Modern users spend an average of 18 minutes scrolling through streaming menus. This <strong>Decision Fatigue</strong> stems from poor information hierarchy. Furthermore, security anxiety can act as a drop-off point during commitment. My solution was to integrate high-trust design patterns and secure, Frictionless onboarding.
              </p>
              <div className="flex flex-col md:flex-row gap-6 pt-10 items-center justify-center">
                <img src="/movie/signin.png" alt="SignIn gate" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
                <img src="/movie/password.png" alt="Password management screen" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 pt-10 items-center justify-center border-t border-slate-200 mt-10">
              <img src="/movie/homescreen.png" alt="Cognitive Overload example" className="w-full md:w-1/2 max-w-xs opacity-60 rounded-xl" />
              <p className="text-sm opacity-60">Solving Choice Paralysis implies addressing the Cognitive Overload and Security Anxiety shown here.</p>
            </div>
          </section>

          {/* Section 3: Design Flow - Discovery pair side-by-side */}
          <section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">03. Design Flow</h2>
              <h3 className="text-3xl font-bold">Smart Discovery Logic</h3>
              <p>
                I replaced the standard blank search bar with a "Dynamic Exploration" hub. By displaying Top Searches and Recommended for You tags immediately, we reduce the need for the keyboard. The entire journey is divided into psychological phases: <strong>Discovery</strong>, <strong>Validation</strong>, and <strong>Commitment</strong>.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12 pt-6 items-center justify-center">
              <img src="/movie/screens.png" alt="Phase A: Discovery Hub" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src="/movie/screen 2.png" alt="Phase A: One-handed search with history" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 4: Validating Choices - Detailed pair side-by-side */}
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">04. Validation</h2>
              <h3 className="text-3xl font-bold">The Trust Architecture</h3>
              <p>
                Before a user commits time, they seek validation. The Show Details page acts as a cinematic lobby, while the integrated <strong>User Review System</strong> allows real-time feedback within the show view, reducing the risk of a "bad watch."
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <img src="/movie/shows.png" alt="Phase B: Validation - Show details and episodes" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src="/movie/review.png" alt="Phase B: Validation - Community ratings and sentiment flow" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 5: Subscription & Monetization - Consecutive pair side-by-side */}
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">05. Business Logic</h2>
              <h3 className="text-3xl font-bold">Frictionless Commitment</h3>
              <p>
                The subscription flow utilizes "Contrast Pricing" (e.g., Save 15% on annual). The commitment is frictionless, with clear value and a payment success screen that transitions directly into an immediate "Watch Now" call to action.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 pt-6 items-center justify-center">
              <img src="/movie/subscription.png" alt="Phase C: Commitment - Contrast pricing options" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src="/movie/payment.png" alt="Phase C: Commitment - Frictionless payment and immediate satisfaction" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 6: Security & User Governance - Consecutive pair side-by-side */}
          <section className="space-y-8 border-t border-slate-100 pt-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">06. Governance</h2>
            <h3 className="text-3xl font-bold">Identity Protection</h3>
            <p>
              I prioritized <strong>Biometric Security (FaceID/TouchID)</strong> within the settings to ensure that user identity, payment methods, and downloaded content remain secure, while allowing profiles and data management to be updated in real-time.
            </p>
            <div className="flex flex-col md:flex-row gap-6 pt-6 items-center justify-center">
              <img src="/movie/setting.png" alt="Identity hub for security toggles" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src="/movie/empty.png" alt="Fallback example of failure design" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
            <p className="text-sm opacity-60 text-center pt-4">This profile management and security hub addresses the 'Cognitive Overload' and 'Security Anxiety' mentioned in Phase 02.</p>
          </section>

          {/* Section 7: Edge Cases - consecutive pair side-by-side */}
          <section className="space-y-8 border-y border-slate-100 py-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">07. Resilience Design</h2>
            <h3 className="text-3xl font-bold">Empathetic Wayfinding</h3>
            <p>
              Edge cases are where UX lives or dies. I designed custom illustrated wayfinders for "Empty States" and "No Network." These screens guide the user back to their available downloaded content, ensuring the app is functional and useful even when disconnected.
            </p>
            <div className="flex flex-col md:flex-row gap-12 pt-6 items-center justify-center">
              <img src="/movie/empty.png" alt="Fallback: No network found state" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src="/movie/search.png" alt="Resilient Design: Downloading and storage management logic" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">08. Information Architecture</h2>
              <h3 className="text-3xl font-bold">Trust & Documentation</h3>
              <p>
                To build platform integrity, robust Help Center and Legal documentation modules were integrated. This reduces technical friction by providing instant answers and clear data terms for subscribers. The full FAQ and legal architecture flow is visible here.
              </p>
            </div>
            <img src="../movie/support.png" alt="Support FAQs and Legal logic structure" className="w-full max-w-sm rounded-2xl border border-slate-100 shadow-xl mx-auto" />
          </section>

          <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">09. Final Summary</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8">A Unified Cinematic Ecosystem</h3>
              <p className="max-w-2xl mx-auto opacity-90 font-medium">
                MovieApp succeeds by balancing the emotional core of cinema with the technical rigors of secure data and resilience. From smart discovery to immediate satisfaction and secure identity protection, it provides a 360-degree ecosystem for the digital cinephile.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-10 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="px-6 py-3 border border-white/30 rounded-full">Visual-First Flow</span>
                <span className="px-6 py-3 border border-white/30 rounded-full">Trusted Commitment</span>
                <span className="px-6 py-3 border border-white/30 rounded-full">Empathetic Resilience</span>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MovieAppCaseStudy;