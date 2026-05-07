import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

// Import all images from your assets folder
import homescreenImg from '../assets/movie/homescreen.png';
import languageImg from '../assets/movie/language.png';
import signinImg from '../assets/movie/signin.png';
import passwordImg from '../assets/movie/password.png';
import screensImg from '../assets/movie/screens.png';
import screen2Img from '../assets/movie/screen2.png'; 
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
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Project Index / MovieApp Case Study
        </Link>

        <div className="space-y-32 text-lg leading-relaxed text-slate-900/90">
          
          {/* Section 1: Topic */}
          <section className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">01. Topic</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">The Cinematic Concierge</h3>
            <p>
              MovieApp is a curated streaming ecosystem designed to bridge the gap between massive content libraries and human emotion. The core design intent was to move away from "database-style" layouts and toward <strong>"Experience Design."</strong> By prioritizing <strong>"glanceability,"</strong> the interface allows users to feel the mood of a film through high-fidelity hero banners. The fundamental principle here is <em>Aesthetic-Usability</em>: an interface that looks premium feels more intuitive to the user.
            </p>
            <p className="pt-4">
              <strong>The Relevance of Onboarding:</strong> Onboarding is the "handshake" of the app. I designed a multi-step flow that focuses on immediate value. By providing a <strong>Language Selection screen containing 20+ localized options</strong>, we eliminate the feeling of "foreign software" instantly, ensuring that 20+ global cultures feel native to the platform from the very first tap.
            </p>
            <div className="flex flex-col md:flex-row gap-6 pt-10 items-center justify-center">
              <img src={homescreenImg} alt="Homescreen" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src={languageImg} alt="Language selection" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
            <p className="text-sm text-slate-500 italic text-center">Fig 1: Reducing grid density to highlight premium content and localized onboarding.</p>
          </section>

          {/* Section 2: Problem Statement */}
          <section className="p-10 space-y-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">02. Problem Statement (PS)</h2>
              <h3 className="text-3xl font-bold">Solving "Choice Paralysis" & Auth Friction</h3>
              <p>
                Modern users spend an average of 18 minutes scrolling through streaming menus before picking a title. This <strong>Decision Fatigue</strong> is often exacerbated by cluttered authentication gates. The design fundamental applied here is <strong>Progressive Disclosure</strong>: asking for information only when necessary and keeping the UI "quiet" to reduce cognitive load during the sign-in and recovery process.
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
                The standard blank search bar is a UX "dead end." I replaced it with a <strong>"Dynamic Exploration Hub."</strong> I innovated the categorization system to be <strong>Defined by Emotions</strong>—allowing users to <strong>Search as per their Mood</strong>. Whether they feel "Brave," "Thoughtful," or "Energetic," the app maps content to their current psychological state.
              </p>
              <p>
                The layout is optimized for the <strong>"Thumb Zone,"</strong> placing category chips and search results where they are physically easiest to reach on modern large-screen smartphones, minimizing the "reach" effort for a truly ergonomic experience.
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
                Users search for content, but they <em>commit</em> to watching based on trust. To increase the "Confidence-to-Play" ratio, I integrated a <strong>Social Proofing System</strong>. Real-time community feedback and star ratings are placed adjacent to the "Play" button, using peer validation to reassure users.
              </p>
              <p>
                <strong>Multi-Platform Aggregation:</strong> One of the project's core strengths is <strong>Embedding Netflix, Prime Video, Hotstar, and Sony Live</strong> within one single interface. This eliminates "App-Hopping" fatigue, allowing the user to validate content quality and immediately know where it is hosted, creating a central hub for all digital entertainment.
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
              <p>
                Monetization was designed around the <strong>"Decoy Effect"</strong> and <strong>"Contrast Pricing."</strong> By highlighting the 15% savings on the annual tier, the UI nudges users toward higher-value choices without being intrusive. The technical goal was a "2-tap checkout," stripping away secondary navigation to prevent cart abandonment and maximize conversion.
              </p>
              <div className="flex flex-col md:flex-row gap-6 pt-6 items-center justify-center">
                <img src={subscriptionImg} alt="Pricing" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
                <img src={paymentImg} alt="Payment flow" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              </div>
            </div>
          </section>

          {/* Section 6: Governance */}
          <section className="space-y-8 border-t border-slate-100 pt-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">06. Governance</h2>
            <h3 className="text-3xl font-bold">Identity Protection & Safety</h3>
            <p>
              Trust is the foundation of any subscription platform. I implemented <strong>Biometric Toggles (FaceID/TouchID)</strong> as a core fundamental of the Settings hub. The intent is to provide "Invisible Security"—high-level protection for payment data and profiles that doesn't feel like a chore for the user to manage.
            </p>
            <div className="flex flex-col md:flex-row gap-6 pt-6 items-center justify-center">
              <img src={settingImg} alt="Security settings" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
              <img src={emptyImg} alt="Failure design" className="w-full md:w-1/2 max-w-sm rounded-2xl border border-slate-100 shadow-xl" />
            </div>
          </section>

          {/* Section 7: Resilience */}
          <section className="space-y-8 border-y border-slate-100 py-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#DB007D]">07. Resilience Design</h2>
            <h3 className="text-3xl font-bold">Empathetic Wayfinding</h3>
            <p>
              Connectivity issues are unavoidable, but user frustration isn't. I dedicated a significant portion of the design to <strong>Negative States and Error Screens</strong>. Whether it is a <strong>Loss of Internet or Network</strong>, the app doesn't just show a generic error.
            </p>
            <p>
              I designed <strong>"Empathetic Empty States"</strong> that guide the user directly to their Download Library. The intent was to turn a technical failure into a positive "offline viewing" moment, ensuring the app remains useful even without a connection.
            </p>
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
              <p>
                The <strong>Information Architecture (IA)</strong> was structured to empower users. By integrating a searchable FAQ and transparent legal terms, we establish brand integrity. The fundamental goal is self-service: reducing support tickets while giving users full transparency over their data and subscription terms.
              </p>
            </div>
            <img src={supportImg} alt="Support FAQs" className="w-full max-w-sm rounded-2xl border border-slate-100 shadow-xl mx-auto" />
          </section>

          {/* Final Summary - REDUCED BOX SIZE */}
          <section className="flex justify-center pb-20">
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl max-w-2xl">
                <div className="relative z-10 space-y-6">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#DB007D]">09. Final Summary</h2>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight">A Unified Cinematic Ecosystem</h3>
                <p className="opacity-70 text-base md:text-md leading-relaxed">
                    MovieApp succeeds by balancing the emotional core of cinema with the technical rigors of secure data and resilience. By merging the biggest streaming giants (Netflix, Prime, Sony) into a single mood-driven hub, the platform stands as a testament to the future of unified, empathetic digital entertainment.
                </p>
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MovieApp;