import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const CaseStudyLayout = ({ title, category, description, children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a0b21] text-black dark:text-white transition-colors duration-500">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-[#1a0b21]/80 backdrop-blur-md border-b border-black/5 p-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity group">
            <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#DB007D] dark:text-[#FFCE13]">{category}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6 bg-[#F3EAFD] dark:bg-[#2d1438] border-b-2 border-black/5 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
              {title}
            </h1>
            <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed font-medium">
              {description}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-black/5 dark:border-white/5 text-center bg-gray-50 dark:bg-black/20">
        <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Enjoyed the deep dive?</h2>
        <Link to="/#contact" className="inline-block bg-black dark:bg-[#DB007D] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-lg">
          Let's talk about your project
        </Link>
      </footer>
    </div>
  );
};

export default CaseStudyLayout;