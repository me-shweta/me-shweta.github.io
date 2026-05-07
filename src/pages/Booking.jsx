import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import splashImg from '../assets/cab/splash.png';
import onboardingImg from '../assets/cab/onboarding.png';
import loginImg from '../assets/cab/login_linked.png';
import dashboardImg from '../assets/cab/dashboard.png';
import mapSearchImg from '../assets/cab/map_search.png';
import terminalImg from '../assets/cab/terminal_selection.png'; 
import comparisonImg from '../assets/cab/price_comparison.png';
import schedulingImg from '../assets/cab/scheduling.png';
import profileImg from '../assets/cab/profile.png';
import logoutImg from '../assets/cab/logout_modal.png';
import emptySearchImg from '../assets/cab/empty_search.png';
import addressMgmtImg from '../assets/cab/address_mgmt.png';
import searchActiveImg from '../assets/cab/search_active.png';
import redirectImg from '../assets/cab/redirecting.png';

const GoCheapCab = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-6 lg:px-20 font-sans selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB] transition-colors mb-12 group">
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Project Index / GoCheapCab Case Study
        </Link>

        <div className="space-y-32 text-lg leading-relaxed text-slate-900/90">
          
          {/* 01. Intro & Problem */}
          <section className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">01. OVERVIEW</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Consolidating the Mobility Market</h3>
            <p>
              In modern urban centers, the "last-mile" struggle isn't finding a ride—it’s finding the <strong>right ride</strong>. Users often face "Decision Paralysis" while toggling between four different apps to save a few dollars. GoCheapCab was born from a simple UX challenge: How can we consolidate a fragmented market into a single, high-performance interface?
            </p>
            <div className="pt-4 space-y-4">
              <h4 className="font-bold text-xl">The Problem Statement</h4>
              <p>
                Users are suffering from <strong>App Fatigue</strong>. The cognitive load required to open Uber, Ola, Indrive, and Rapido, enter the same destination four times, and manually compare prices is a significant friction point. To solve this, I designed a gateway that bridges the gap between the user's need for speed and the complexity of multi-app authentication.
              </p>
            </div>
            <div className="pt-6 space-y-8">

  <div className="space-y-4">
    <h4 className="font-bold text-2xl text-slate-900">Onboarding: Trust Through Integration</h4>
    <p className="text-md opacity-90">
      The first touchpoint of the app focuses on <strong>Permission and Personalization</strong>. To solve the cognitive load of "App Fatigue," I designed a gateway that bridges the gap between the user's need for speed and the complexity of multi-app authentication.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-900/90">
    <div className="space-y-2">
      <h5 className="font-bold text-lg">Location Strategy</h5>
      <p className="text-sm leading-relaxed opacity-80">
        We utilize a clean, minimal splash screen to request location permissions. By explaining <strong>why</strong> (so the driver can see you), we reduce "permission friction."
      </p>
    </div>

    <div className="space-y-2">
      <h5 className="font-bold text-lg">Unified Authentication</h5>
      <p className="text-sm leading-relaxed opacity-80">
        Recognizing that users want to get moving fast, we offer Social SSO alongside a <strong>"Continue as Guest"</strong> option for immediate price browsing.
      </p>
    </div>

    <div className="space-y-2">
      <h5 className="font-bold text-lg">The Aggregator Linkage</h5>
      <p className="text-sm leading-relaxed opacity-80">
        The <strong>"Secret Sauce."</strong> A centralized screen to link Uber/Ola accounts with clear status indicators (Linked vs. Not Linked) for API transparency.
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-6 pt-6 items-start">
    <div className="flex flex-col gap-3 w-full md:w-1/3">
      <img src={splashImg} alt="Location Strategy Splash" className="w-full rounded-2xl border shadow-xl" />
      <p className="text-[12px] text-slate-500 leading-tight italic">
        Fig 2.1: Clean, minimal splash screen for transparent location requests.
      </p>
    </div>
    <div className="flex flex-col gap-3 w-full md:w-1/3">
      <img src={onboardingImg} alt="Unified Authentication Flow" className="w-full rounded-2xl border shadow-xl" />
      <p className="text-[12px] text-slate-500 leading-tight italic">
        Fig 2.2: The Unified Auth gateway providing high-speed entry paths.
      </p>
    </div>
    <div className="flex flex-col gap-3 w-full md:w-1/3">
      <img src={loginImg} alt="Aggregator Linkage" className="w-full rounded-2xl border shadow-xl" />
      <p className="text-[12px] text-slate-500 leading-tight italic">
        Fig 2.3: Aggregator Linkage.
      </p>
    </div>
  </div>
</div>
          </section>

          {/* 02. Technical Logic & Aggregator Handshake */}
          <section className="p-8 space-y-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <h3 className="text-3xl font-bold">The Dashboard: Prioritizing Speed & Habits</h3>
              <p className="opacity-80">
                The main dashboard is designed using a modular card-based layout, ensuring that the most frequent actions are within the "thumb zone."
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-blue-400">Primary Actions:</h4>
                  <p className="text-base opacity-90">
                    Big, bold CTAs for "Book Your Cab Now" and "Schedule For Someone" cater to the two primary user personas: the immediate traveler and the planner.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-blue-400">Unified Pricing Hierarchy</h4>
                  <p className="text-base opacity-90">
                    The UI prioritizes <strong>Price scanability</strong>. By using a horizontal filter for categories like Bike or Auto, users can compare specific ride types across all linked platforms in one view.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-blue-400">Predictive UX:</h4>
                  <p className="text-base opacity-90">
                    The "Book Your Saved Rides" section uses historical data to suggest common routes (e.g., Office to Home). This reduces a 5-step booking process to just two taps.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-blue-400">Monetization & Engagement:</h4>
                  <p className="text-base opacity-90">
                    A subtle top-banner placement allows for internal promotions (like price comparison tips) or non-intrusive external partnerships without breaking the utility of the screen..
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 03. Interaction Precision */}
          <section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">03. Navigation & Search</h2>
              <h3 className="text-3xl font-bold">Precision & Temporal UX</h3>
              <p>
                The booking flow transitions into a map-heavy interface, providing visual reassurance that drivers are nearby.
              </p>
              <div className="pt-4 space-y-4">
                 <h4 className="text-xl font-bold">Real-time Visuals:</h4>
                 <p>
                    We use custom map markers to show proximity, with a central "Time-to-Pickup" bubble (e.g., "3 min") to give users instant value before they even type an address.
                 </p>
              </div>
              <h4 className="text-xl font-bold pt-4">Search Hierarchy:</h4>
              <p>
                The search bar is paired with "Select Current Location" and a list of "Frequently Visited" spots. We use distinct iconography (briefcases for work, houses for home) to aid in quick recognition.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img src={dashboardImg} alt="Terminal Selection" className="w-full md:w-1/3 max-w-[240px] rounded-xl shadow-lg" />
              <img src={mapSearchImg} alt="Redirecting logic" className="w-full md:w-1/3 max-w-[240px] rounded-xl shadow-lg" />
              <img src={terminalImg} alt="Terminal Selection" className="w-full md:w-1/3 max-w-[240px] rounded-xl shadow-lg" />
            </div>
          </section>

          <section className="space-y-12">
  <div className="space-y-6">
    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">04. COMPARATIVE ARCHITECTURE</h2>
    <h3 className="text-3xl font-bold">The Price Engine UI</h3>
    <p>
      The core value proposition of GoCheapCab is the comparison screen. Designing this required balancing high information density with rapid scannability.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-900/90 pt-4">
      <div className="space-y-2">
        <h4 className="font-bold text-lg text-slate-900">Vehicle-Type Filtering</h4>
        <p className="text-sm leading-relaxed opacity-80">
          We implemented a horizontal scroll for vehicle categories (Bike, Auto, Mini, Large, Port). This allows users to filter by "intent" first, reducing visual noise from irrelevant ride types.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-lg text-slate-900">The "Savings" Micro-copy</h4>
        <p className="text-sm leading-relaxed opacity-80">
          Notice the green text (e.g., "Saving Rs 200"). This is a Persuasive Design technique. By highlighting the delta between the cheapest option and others, we provide immediate dopamine rewards for using our app over a single provider.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-lg text-slate-900">Visual Hierarchy of Providers</h4>
        <p className="text-sm leading-relaxed opacity-80">
          Each card displays the provider’s logo (Ola, Uber, etc.) alongside price and per-person cost. This helps users make decisions based on both brand loyalty and budget.
        </p>
      </div>
    </div>

    <div className="pt-12 border-t border-slate-100">
      <h3 className="text-3xl font-bold mb-4">Scheduling & Temporal UX</h3>
      <p className="mb-8">
        Booking a ride for later is often hidden in sub-menus in other apps. In GoCheapCab, we brought it to the forefront:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h4 className="font-bold text-lg text-slate-900">The Time-Picker Drawer</h4>
          <p className="text-sm leading-relaxed opacity-80">
            We moved away from standard system wheels to a large, touch-friendly digital clock interface. This reduces "fat-finger" errors when selecting AM/PM or specific minutes during high-stress travel planning (like catching a flight).
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-lg text-slate-900">Contextual Confirmation</h4>
          <p className="text-sm leading-relaxed opacity-80">
            Before finalizing, a summary card shows the Pickup and Drop points clearly, ensuring the user feels in control before hitting "Confirm."
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-6 items-start justify-center pt-4">
    <div className="flex flex-col gap-3 w-full md:w-1/3">
      <img src={comparisonImg} alt="Price Comparison UI" className="w-full rounded-2xl border shadow-xl" />
      <p className="text-[12px] text-slate-500 leading-tight italic text-center">
        High-fidelity price comparison engine.
      </p>
    </div>
    <div className="flex flex-col gap-3 w-full md:w-1/3">
      <img src={schedulingImg} alt="Scheduling Interface" className="w-full rounded-2xl border shadow-xl" />
      <p className="text-[12px] text-slate-500 leading-tight italic text-center">
        Frictionless scheduling with touch-optimized clock.
      </p>
    </div>
  </div>
</section>

          {/* 04. User Centricity & Management */}
          <section className="space-y-12 border-t border-slate-100 pt-16">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">04. USER CENTRICITY</h2>
              <h3 className="text-3xl font-bold">Memory & Personalization</h3>
              <p>
                An aggregator is only as good as its memory. To ensure users feel at home, I centralized settings that are usually scattered across apps into a <strong>clean, list-based hierarchy</strong> that tracks everything from addresses to linked family accounts.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 max-w-7xl">
                <h4 className="font-bold mb-2">Information Architecture:</h4>
                <p className="text-md opacity-80 leading-normal">
                  The profile screen uses a clean, list-based hierarchy with descriptive sub-text (e.g., "Manage or edit your family accounts"). This reduces cognitive load, allowing users to find specific settings without hunting through menus.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 max-w-7xl">
                <h4 className="font-bold mb-2">The "Logout" Friction Guard:</h4>
                <p className="text-md opacity-80 leading-normal">
                  We implemented a high-contrast modal for the logout action. By darkening the background (background blur/overlay), we force the user to focus on the decision. The secondary action ("Back to Menu") is styled as a text link to ensure the primary "Logout Now" button remains the clear focal point, preventing accidental sign-outs.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col gap-2 w-full md:w-1/3">
                <img src={profileImg} alt="Profile" className="w-full rounded-xl shadow-lg" />
                <p className="text-[13px] text-slate-500 leading-tight italic">Modular list hierarchy for account settings.</p>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/3">
                <img src={logoutImg} alt="Logout Guard" className="w-full rounded-xl shadow-lg" />
                <p className="text-[13px] text-slate-500 leading-tight italic">Contextual overlay for intentional session exits.</p>
              </div>
            </div>
          </section>

          {/* 05. Advanced Locations & Accessibility */}
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">05. ADVANCED MOBILITY</h2>
              <h3 className="text-3xl font-bold">Second-Saving Location Management</h3>
              <p>
                In the context of ride-hailing, seconds matter. I improved the <strong>Saved Destinations</strong> logic to move beyond simple labels. Below is the implementation of <strong>Detailed Nicknaming</strong>, where users can define granular spots like "Saksham Office - Gate 2."
              </p>
              <h4 className="text-xl font-bold pt-4">Accessibility First Implementation</h4>
              <p>
                To ensure usability for commuters on the move, I prioritized:
              </p>
              <ul className="space-y-3 list-disc pl-5 opacity-90 text-base">
                <li><strong>Touch Targets:</strong> Every item in the location list adheres to a <strong>44pt × 44pt</strong> minimum.</li>
                <li><strong>Hinted Search:</strong> The UI provides predictive text to guide the user's intent instantly.</li>
              </ul>
              <h4 className="text-xl font-bold pt-4">Integrated Address Entry</h4>
              <p>
                When adding a new location, we’ve integrated the terminal selection (e.g., Exit 2 Terminal 1) directly into the "Add Address" flow. This ensures that a saved location isn't just a pinpoint on a map, but a precise pickup instruction that carries over to every future booking.
              </p>              
            </div>
            <div className="flex flex-col gap-4">
                <img src={addressMgmtImg} alt="Location Management UI" className="w-full max-w-[240px] rounded-xl shadow-lg border border-slate-100" />
                <p className="text-[14px] text-slate-500 italic">Example: The "Hinted Search" and "Saved Rides" modules working in tandem.</p>
            </div>
          </section>

          {/* 06. Search & Empty States */}
          <section className="space-y-12 border-y border-slate-100 py-16">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">06. ANTICIPATORY SEARCH</h2>
              <h3 className="text-3xl font-bold">Handling the Edge Cases</h3>
              <p>
                A polished UI shines during failure. When a search query yields no results, I designed a conversational <strong>Empty State</strong> to reduce user frustration and humanize the technology.
              </p>
              <p>
                 As shown in the following screens, the search flow remains consistent. Even when "No Hits" are found, the exit paths are clear, ensuring the user can reset and try again without friction.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img src={searchActiveImg} alt="Active Search" className="w-full md:w-1/3 max-w-[240px] rounded-xl shadow-lg" />
              <img src={emptySearchImg} alt="Empty State" className="w-full md:w-1/3 max-w-[240px] rounded-xl shadow-lg" />
            </div>
          </section>

          {/* Designer's Reflection & Toolkit */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">CONCLUSION</h2>
              <h3 className="text-3xl font-bold text-slate-800">The Challenge of Uniformity</h3>
              <p className="max-w-3xl">
                By adopting a neutral white frame and "Trust Blue" accents, I allowed partner brands (Ola, Uber, Indrive) to coexist as clean data points within a professional, unified ecosystem.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl space-y-4 max-w-2xl border border-slate-100">
                <h4 className="font-black uppercase text-xs tracking-widest text-slate-400">Technical Toolkit</h4>
                <div className="flex flex-wrap gap-3 text-xs font-bold">
                  <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600">Figma Mastery</span>
                  <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600">Atomic Components</span>
                  <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600">API State Handling</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GoCheapCab;