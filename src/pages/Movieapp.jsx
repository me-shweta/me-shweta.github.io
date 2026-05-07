import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

// Import all images from your assets folder
import homescreenImg from '../assets/movie/homescreen.png';
import languageImg from '../assets/movie/language.png';
import signinImg from '../assets/movie/signin.png';
import passwordImg from '../assets/movie/password.png';
import screensImg from '../assets/movie/screens.png';
import screen2Img from '../assets/movie/screen2.png'; // Renamed from "screen 2.png"
import showsImg from '../assets/movie/shows.png';
import reviewImg from '../assets/movie/review.png';
import subscriptionImg from '../assets/movie/subscription.png';
import paymentImg from '../assets/movie/payment.png';
import settingImg from '../assets/movie/setting.png';
import emptyImg from '../assets/movie/empty.png';
import searchImg from '../assets/movie/search.png';
import supportImg from '../assets/movie/support.png';

const MovieApp = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-6 lg:px-20 font-sans selection:bg-[#DB007D] selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#DB007D] transition-colors mb-12 group">
          <HiOutlineArrowLeft /> Project Index / MovieApp Case Study
        </Link>

        <div className="space-y-32 text-lg leading-relaxed text-slate-900/90">
          
          {/* Section 1: Topic */}
          <section className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">01. Topic</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">The Cinematic Concierge</h3>
            <p>
              MovieApp is a curated streaming ecosystem designed to bridge the gap between massive content libraries and human emotion.
            </p>
            <div className="flex flex-col md:flex-row gap-6 pt-10 items-center justify-center">
              <img src={homescreenImg} alt="Homescreen" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src={languageImg} alt="Language selection" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
            <p className="text-sm text-slate-500 italic text-center">Fig 1: Reducing grid density to highlight premium content.</p>
          </section>

          {/* Section 2: Problem Statement */}
          <section className="p-10 space-y-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">02. Problem Statement (PS)</h2>
              <h3 className="text-3xl font-bold">Solving "Choice Paralysis" & Auth Friction</h3>
              <p>
                Modern users spend an average of 18 minutes scrolling through streaming menus. This <strong>Decision Fatigue</strong> stems from poor information hierarchy.
              </p>
              <div className="flex flex-col md:flex-row gap-6 pt-10 items-center justify-center">
                <img src={signinImg} alt="SignIn gate" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
                <img src={passwordImg} alt="Password management" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              </div>
            </div>
          </section>

          {/* Section 3: Design Flow */}
          <section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">03. Design Flow</h2>
              <h3 className="text-3xl font-bold">Smart Discovery Logic</h3>
              <p>
                I replaced the standard blank search bar with a "Dynamic Exploration" hub.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12 pt-6 items-center justify-center">
              <img src={screensImg} alt="Discovery Hub" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src={screen2Img} alt="One-handed search" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 4: Validation */}
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">04. Validation</h2>
              <h3 className="text-3xl font-bold">The Trust Architecture</h3>
              <p>
                The Show Details page acts as a cinematic lobby, while the integrated <strong>User Review System</strong> allows real-time feedback.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <img src={showsImg} alt="Show details" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src={reviewImg} alt="Community ratings" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 5: Business Logic */}
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">05. Business Logic</h2>
              <h3 className="text-3xl font-bold">Frictionless Commitment</h3>
              <div className="flex flex-col md:flex-row gap-6 pt-6 items-center justify-center">
                <img src={subscriptionImg} alt="Pricing" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
                <img src={paymentImg} alt="Payment flow" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              </div>
            </div>
          </section>

          {/* Section 6: Governance */}
          <section className="space-y-8 border-t border-slate-100 pt-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">06. Governance</h2>
            <h3 className="text-3xl font-bold">Identity Protection</h3>
            <div className="flex flex-col md:flex-row gap-6 pt-6 items-center justify-center">
              <img src={settingImg} alt="Security settings" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src={emptyImg} alt="Failure design" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 7: Resilience */}
          <section className="space-y-8 border-y border-slate-100 py-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">07. Resilience Design</h2>
            <h3 className="text-3xl font-bold">Empathetic Wayfinding</h3>
            <div className="flex flex-col md:flex-row gap-12 pt-6 items-center justify-center">
              <img src={emptyImg} alt="No network state" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src={searchImg} alt="Storage management" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 8: IA */}
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">08. Information Architecture</h2>
              <h3 className="text-3xl font-bold">Trust & Documentation</h3>
            </div>
            <img src={supportImg} alt="Support FAQs" className="w-full max-w-sm rounded-2xl border border-slate-100 shadow-xl mx-auto" />
          </section>

          {/* Final Summary */}
          <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">09. Final Summary</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8">A Unified Cinematic Ecosystem</h3>
              <p className="max-w-2xl mx-auto opacity-90 font-medium">
                MovieApp succeeds by balancing the emotional core of cinema with the technical rigors of secure data and resilience.
              </p>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MovieApp;