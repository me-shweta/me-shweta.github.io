import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyLayout from './CaseStudyLayout';

const GoCheapCab = () => {
  const journeyScreens = [
    { label: "Location", img: "/path-to-location" },
    { label: "Login Dashboard", img: "/path-to-login" },
    { label: "Booking Main", img: "/path-to-booking" },
    { label: "Category Selection", img: "/path-to-category" },
    { label: "Scheduling Flow", img: "/path-to-schedule" },
    { label: "Comparative View", img: "/path-to-compare" }
  ];

  return (
    <CaseStudyLayout 
      title="Cab Booking App" 
      category="Product Design"
      description="Urban mobility is fragmented. I designed a unified interface that aggregates major providers into one view, turning a 3-minute comparison struggle into a 5-second decision."
    >
      <section className="space-y-24">
        
        {/* The "Why" - Problem Statement */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Designing for the "Commuter in a Hurry"</h2>
            <p className="text-lg opacity-75 leading-relaxed">
              When you're late for a meeting, you don't have time to "app-hop." I focused on 
              <strong> Speed and Clarity</strong>. By capturing coordinates once and injecting them 
              into all providers simultaneously, I removed the most annoying part of booking a ride: 
              typing your address three different times.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200/50">
                <p className="text-2xl font-bold text-green-600">Seconds</p>
                <p className="text-xs uppercase opacity-60">vs. Minutes to book</p>
             </div>
             <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200/50">
                <p className="text-2xl font-bold text-blue-600">4-in-1</p>
                <p className="text-xs uppercase opacity-60">Provider Sync</p>
             </div>
          </div>
        </div>

        {/* Feature Deep Dive */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="font-bold uppercase text-xs tracking-widest text-[#DB007D]">Route Injection</h4>
            <p className="text-sm opacity-70">Single-entry coordinates that sync across Ola, Uber, and Rapido instantly.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold uppercase text-xs tracking-widest text-[#DB007D]">The One-View</h4>
            <p className="text-sm opacity-70">A vertical scroll of side-by-side pricing. No more switching tabs to find the cheapest Auto.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold uppercase text-xs tracking-widest text-[#DB007D]">Account Linking</h4>
            <p className="text-sm opacity-70">A secure OAuth workflow that clearly shows which apps are linked and ready to go.</p>
          </div>
        </div>

        {/* Visual Gallery */}
        <div className="space-y-10">
          <div className="border-b border-black/10 dark:border-white/10 pb-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Interface Implementation</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {journeyScreens.map((screen, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 dark:border-white/10 transition-all duration-500 group-hover:shadow-2xl">
                  <img src={screen.img} alt={screen.label} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="mt-4 text-[10px] text-center font-bold uppercase tracking-widest opacity-40">{screen.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Architecture Note */}
        <div className="bg-black text-white p-12 rounded-[2rem] text-center space-y-4">
          <h2 className="text-2xl font-black uppercase">Technical Justification</h2>
          <p className="max-w-2xl mx-auto opacity-70 text-sm leading-relaxed">
            The app uses automated data synchronization to pull real-time APIs. 
            By designing a "Split-Card" interface, I enabled users to compare 
            Bike, Auto, and Mini categories in a single gesture, hitting the 
            core heuristic of efficiency and flexibility.
          </p>
        </div>

      </section>
    </CaseStudyLayout>
  );
};

export default GoCheapCab;