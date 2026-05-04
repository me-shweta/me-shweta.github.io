import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { GraduationCap, Briefcase, Trophy } from 'lucide-react';

const InteractiveCard = ({ children, className, hoverBg = "bg-pink-100" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`${className} group relative overflow-hidden transition-all duration-200`}
    >
      {/* THE FILLING ANIMATION OVERLAY */}
      <div className={`absolute inset-0 z-0 translate-y-[101%] transition-transform duration-500 ease-in-out group-hover:translate-y-0 ${hoverBg}`} />
      
      {/* CONTENT (TranslateZ keeps it above the filling overlay) */}
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const titles = ["UI/UX Designer", "Researcher", "Problem Solver", "Visual Storyteller"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative bg-[#E6E0F8] dark:bg-[#1a0b21] overflow-x-hidden min-h-screen transition-colors duration-500">
      
      {/* SECTION 1: TYPOGRAPHIC COVER */}
      <div className="min-h-screen flex flex-col items-center justify-center relative px-6 lg:px-20">
        <div className="absolute top-50 left-10 md:left-10 lg:left-40 z-20">
          <span className="px-6 py-2 bg-white dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-full font-heading font-black text-xs uppercase shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_#DB007D] dark:text-white">UX/UI</span>
        </div>
        <div className="absolute top-1/2 right-10 lg:right-60 rotate-12 z-20">
          <span className="px-6 py-2 bg-white dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-full font-heading font-black text-xs uppercase shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_#DB007D] dark:text-white">2026</span>
        </div>

        <div className="text-center relative pt-15 md:pt-28">
          <div className="absolute left-[-50px] top-0 w-48 h-48 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 dark:from-[#3F194D] dark:to-[#DB007D] blur-[60px] opacity-40 z-0" />
          <h1 className="font-heading font-black text-[8rem] md:text-[10rem] lg:text-[14rem] leading-[0.85] text-black dark:text-white tracking-tighter uppercase relative z-10">
            P<span className="text-[#DB007D]">★</span>RT<br/>FOLIO
          </h1>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="mt-12 px-12 py-4 bg-white dark:bg-[#DB007D] border-2 border-black dark:border-white/20 rounded-2xl shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_#3F194D] cursor-pointer z-10"
          onClick={() => document.getElementById('details-card').scrollIntoView({ behavior: 'smooth' })}
        >
          <p className="text-black dark:text-white font-heading font-black text-base uppercase tracking-[0.2em]">SHWETA MEENA →</p>
        </motion.div>
      </div>

      {/* SECTION 2: THE MAIN DETAILS CARD */}
      <div id="details-card" className="w-full px-4 md:px-10 lg:container lg:mx-auto lg:px-14 pb-24">
        <div id="hero-main" className="bg-white dark:bg-[#2d1438] rounded-[2rem] md:rounded-[3rem] px-5 md:px-10 py-4 md:py-6 ...">
          
          <div className="grid lg:grid-cols-12 gap-6">
            
            <div className="lg:col-span-8">
              <header className="mb-3">
                <h2 className="font-heading font-black text-5xl md:text-5xl mb-2 leading-[1.0] text-black dark:text-white tracking-tighter uppercase">
                  Shweta Meena, <br /> 
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-[#DB007D] block"
                    >
                      {titles[index]}
                    </motion.span>
                  </AnimatePresence>
                </h2>
                <p className="text-xl md:text-1xl font-medium text-black dark:text-white opacity-70 dark:opacity-90 leading-relaxed max-w-none mb-4 pr-10">
                  I am a UI/UX Designer and Researcher passionate about building purposeful digital solutions. I enjoy deconstructing complex challenges into intuitive, human-centric experiences while pursuing my B.Tech at Cluster Innovation Centre, University of Delhi.
                </p>

<div className="flex flex-wrap gap-3 mb-4">
  {[
    'Strategy', 
    'UI/UX Design', 
    'User Research', 
    'Design Systems', 
    'Prototyping', 
    'Visual Design', 
    'Interaction Design'
  ].map((tag, i) => (
    <motion.button
      key={i}
      /* Professional Micro-interactions */
      whileHover={{ 
        scale: 1.05, 
        y: -3,
        // Using a more subtle "elevation" shadow for professional look
        boxShadow: document.documentElement.classList.contains('dark') 
          ? "0px 8px 20px rgba(0,0,0,0.4)" 
          : "4px 4px 0px rgba(0,0,0,1)" 
      }}
      whileTap={{ 
        scale: 0.98, 
        y: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)" 
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`px-4 py-1.5 border-2 border-black dark:border-white/10 rounded-full font-black text-[10px] uppercase shadow-[2px_2px_0px_black] dark:shadow-none transition-all duration-200 relative group overflow-hidden ${
        i % 4 === 0 ? 'bg-[#FFCE13] text-black' : 
        i % 4 === 1 ? 'bg-[#E39FC1] text-black' : 
        i % 4 === 2 ? 'bg-[#9AB4E6] text-black' : 
        'bg-[#A7E614] text-black'
      } dark:bg-opacity-20 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black`}
    >
      {/* Dark mode inner-glow effect */}
      <div className="absolute inset-0 opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      
      <span className="relative z-10">{tag}</span>
    </motion.button>
  ))}
</div>
              </header>

              {/* INFORMATION GRID: Education, Experience, Awards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-6 border-t-2 border-black/5 dark:border-white/5">
                
                {/* Education Box - Fills with Pink */}
                <InteractiveCard 
                  hoverBg="bg-[#FDF2F8] dark:bg-[#DB007D]/40"
                  className="bg-white dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-[1.5rem] p-5 shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_#DB007D] flex flex-col transition-all text-black dark:text-white"
                >
                  <h3 className="font-heading font-black text-lg mb-4 uppercase text-[#DB007D] dark:text-[#FFCE13] flex items-center gap-2">
                    <GraduationCap size={20} /> Education
                  </h3>
                  <div className="space-y-5 flex-grow">
                    <div>
                      <h4 className="font-black text-xs uppercase leading-tight">Graduation</h4>
                      <h4 className="text-[14px] font-bold opacity-70 dark:opacity-100">B.Tech in IT & MI</h4>
                      <p className="text-[12px] font-bold opacity-60 dark:opacity-80">Cluster Innovation Centre, DU</p>
                      <p className="text-[12px] font-bold opacity-60 dark:opacity-80">9.5 CGPA</p>
                      <p className="text-[12px] font-black text-[#DB007D] dark:text-[#FFCE13] uppercase mb-1">Pursuing (2026)</p>
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase leading-tight">Intermediate (XII)</h4>
                      <p className="text-[12px] font-bold opacity-60 dark:opacity-80">RPVV Dwarka-10, New Delhi</p>
                      <p className="text-[12px] font-black text-[#DB007D] dark:text-[#FFCE13] mt-1">93.46% (PCM + CS)</p>
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase leading-tight">Matriculation (X)</h4>
                      <p className="text-[12px] font-bold opacity-60 dark:opacity-80">RPVV Dwarka-10, New Delhi</p>
                      <p className="text-[12px] font-black text-[#DB007D] dark:text-[#FFCE13] mt-1">89.83%</p>
                    </div>
                  </div>
                </InteractiveCard>

                {/* Experience Box - Fills with Lime */}
                <InteractiveCard 
                  hoverBg="bg-[#F7FEE7] dark:bg-[#A7E614]/30"
                  className="bg-white dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-[1.5rem] p-5 shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_#A7E614] flex flex-col transition-all text-black dark:text-white"
                >
                  <h3 className="font-heading font-black text-lg mb-4 uppercase text-[#A7E614] flex items-center gap-2">
                    <Briefcase size={20} /> Internships
                  </h3>
                  <div className="space-y-5 flex-grow">
                    <div>
                      <h4 className="font-black text-xs uppercase leading-tight">UI & UX Intern</h4>
                      <p className="text-[14px] font-bold opacity-70 dark:opacity-100 mb-2">Mobile Byte Sensei</p>
                      <p className="text-[12px] font-black text-[#A7E614] uppercase mb-1">June 2025 — Nov 2025</p>
                      <p className="text-[11px] opacity-60 dark:opacity-80">Focusing on industry-standard mobile architecture and product design workflows for high-impact mobile projects.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase leading-tight">Social Media & UI/UX Intern</h4>
                      <p className="text-[13px] font-bold opacity-70 dark:opacity-100 mb-2">Livebuy | Udhmodya Foundation</p>
                      <p className="text-[12px] font-black text-[#A7E614] uppercase mb-1">July 2024 — Dec 2024</p>
                      <p className="text-[11px] opacity-60 dark:opacity-80">Managed social media, PR, content creation, and Pinterest optimization. Boosted Pinterest reach to 50K+ views in 1 month and improved SEO rankings to the top of SERP.</p>
                    </div>
                  </div>
                </InteractiveCard>

                {/* Awards Box - Fills with Blue */}
                <InteractiveCard 
                  hoverBg="bg-[#EFF6FF] dark:bg-[#9AB4E6]/30"
                  className="bg-white dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-[1.5rem] p-5 shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_#9AB4E6] flex flex-col transition-all text-black dark:text-white"
                >
                  <h3 className="font-heading font-black text-lg mb-4 uppercase text-[#9AB4E6] flex items-center gap-2">
                    <Trophy size={20} /> Awards
                  </h3>
                  <div className="space-y-5 flex-grow">
                    <div>
                      <h4 className="font-black text-xs uppercase leading-tight">Smart India Hackathon 2024 </h4>
                      <p className="text-[14px] font-bold opacity-70 dark:opacity-100 mb-2">Grand Finalist</p>
                      <p className="text-[11px] opacity-60 dark:opacity-80">Represented Delhi University at SIH 2024. Shortlisted among 111 teams (Problem Statement 1720) and ranked in the Top 6 finalists.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase leading-tight">Entrepreneurship Programme </h4>
                      <p className="text-[14px] font-bold opacity-70 dark:opacity-100 mb-2">First Position</p>
                      <p className="text-[11px] opacity-60 dark:opacity-80">RPVV Sector-10 Dwarka, New Delhi. Developed an innovative venture concept and presented a strategic pitch to a panel of judges, securing first place among 20+ competing teams</p>
                    </div>
                  </div>
                </InteractiveCard>

              </div>
            </div>

            {/* Profile Side */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <InteractiveCard 
                  hoverBg="bg-transparent"
                  className="bg-[#fff7c5] dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-[2.5rem] p-6 shadow-[8px_8px_0px_black] dark:shadow-[8px_8px_0px_#DB007D] text-center transition-none"
                >
                  <img src="/my-avatar.png" alt="Shweta" className="w-full h-auto rounded-[2rem] border-2 border-black dark:border-white/20 mb-6" />
                  <p className="font-heading font-black text-3xl uppercase tracking-tighter text-black dark:text-white">Shweta Meena</p>
                  <p className="text-[10px] font-bold opacity-50 dark:opacity-70 uppercase tracking-[0.1em] mt-3 text-black dark:text-white">Love to interact with people and ideas alike.</p>
                </InteractiveCard>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero