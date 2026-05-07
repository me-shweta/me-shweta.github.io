import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyLayout from './CaseStudyLayout';

const TrustLoan = () => {
  const screens = [
    { label: "Loan Catalog", img: "/path-to-catalog" },
    { label: "Disbursement", img: "/path-to-disbursement" },
    { label: "Apply Flow", img: "/path-to-apply" },
    { label: "Application Status", img: "/path-to-applied" },
    { label: "Branch Locator", img: "/path-to-map" },
    { label: "Rejection Handling", img: "/path-to-rejected" }
  ];

  return (
    <CaseStudyLayout 
      title="TrustLoan App" 
      category="Fintech Design"
      description="Financial apps can feel cold and intimidating. I focused on making the loan process transparent, using 'chunked' information and clear progress tracking to keep users confident."
    >
      <section className="space-y-24">
        
        {/* The Strategy: Reducing Anxiety */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Designing for Trust</h2>
            <p className="text-lg opacity-75 leading-relaxed">
              When users upload sensitive documents, they need to know exactly where they stand. 
              I implemented a <strong>checklist-driven dashboard</strong> that breaks the process into 
              three simple phases: Form, Upload, and Disbursement. No surprises, just clarity.
            </p>
          </div>
          <div className="bg-[#155e75]/5 dark:bg-[#155e75]/20 p-8 rounded-2xl border-l-4 border-[#155e75]">
            <h3 className="font-bold text-[#155e75] dark:text-[#22d3ee] uppercase text-xs tracking-widest mb-4">Design Pillars</h3>
            <ul className="space-y-4 text-sm font-medium opacity-80">
              <li>• Real-time progress "Checklists"</li>
              <li>• Empathetic Error Recovery (Resolve Now)</li>
              <li>• Geo-spatial trust (Branch Locator)</li>
            </ul>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-3 p-6 bg-gray-50 dark:bg-white/5 rounded-xl">
            <div className="w-10 h-10 bg-green-600/10 text-green-600 rounded-full flex items-center justify-center font-bold mb-2">01</div>
            <h4 className="font-bold uppercase text-xs tracking-widest">Visual Feedback</h4>
            <p className="text-xs opacity-70 leading-relaxed">Persistent progress bars so the user never has to guess 'what happens next.'</p>
          </div>
          <div className="space-y-3 p-6 bg-gray-50 dark:bg-white/5 rounded-xl">
            <div className="w-10 h-10 bg-red-600/10 text-red-600 rounded-full flex items-center justify-center font-bold mb-2">02</div>
            <h4 className="font-bold uppercase text-xs tracking-widest">Direct Recovery</h4>
            <p className="text-xs opacity-70 leading-relaxed">Instead of a vague 'Error' message, I designed a 'Resolve Now' hub for document fixes.</p>
          </div>
          <div className="space-y-3 p-6 bg-gray-50 dark:bg-white/5 rounded-xl">
            <div className="w-10 h-10 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center font-bold mb-2">03</div>
            <h4 className="font-bold uppercase text-xs tracking-widest">Bridge to Physical</h4>
            <p className="text-xs opacity-70 leading-relaxed">The branch locator proves that a real building exists, adding a layer of institutional trust.</p>
          </div>
        </div>

        {/* Visual Implementation Gallery */}
        <div className="space-y-12">
          <div className="flex justify-between items-center border-b border-black/5 pb-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40">End-to-End Flow</h3>
            <div className="h-1 flex-1 mx-8 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: '100%' }} 
                transition={{ duration: 2 }}
                className="h-full bg-[#155e75]" 
               />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {screens.map((screen, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/5 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-[#155e75]/30">
                  <img 
                    src={screen.img} 
                    alt={screen.label} 
                    className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <p className="mt-4 text-[10px] text-center font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                  {screen.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="max-w-3xl mx-auto text-center py-12 border-t border-black/5">
          <h4 className="text-xl font-bold mb-4">Accessibility First</h4>
          <p className="opacity-70 leading-relaxed">
            Fintech shouldn't be just for the tech-savvy. I built a multi-modal upload 
            system—allowing digital signatures, camera captures, or file attachments—to 
            ensure that users of all ages and technical literacies can complete their 
            application without friction.
          </p>
        </div>

      </section>
    </CaseStudyLayout>
  );
};

export default TrustLoan;