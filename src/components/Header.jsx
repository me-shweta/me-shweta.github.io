import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// NOTE: I am assuming your path for AnimatedThemeToggler is correct based on your provided snippet
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about') // Default to about on load
  const [scrollProgress, setScrollProgress] = useState(0)
  const observer = useRef(null)

  const navItems = [
    { name: 'About', id: 'hero-main' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    // 1. SCROLL STATE (for scaling/coloring)
    const handleScroll = () => {
      // Scale state
      setIsScrolled(window.scrollY > 50)
      
      // Horizontal Progress calculation
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress(currentScroll / totalHeight);
      }
    }
    window.addEventListener('scroll', handleScroll)

    // 2. ACTIVE SECTION HIGHLIGHTING (Intersection Observer)
    // Cleanup any existing observer
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // We set activeSection based on which element is intersecting
        if (entry.isIntersecting) {
          // Find the nav item that corresponds to this ID
          const matchedItem = navItems.find(item => item.id === entry.target.id);
          if (matchedItem) {
            setActiveSection(matchedItem.name.toLowerCase());
          }
        }
      });
    }, {
      // Observer settings: rootMargin helps trigger the highlight when the 
      // top of the section enters the top portion of the viewport.
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0 // Trigger as soon as even 1px is visible
    });

    // Observe all sections defined in navItems
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observer.current) observer.current.disconnect();
    }
  }, [])

  return (
    <header className="fixed top-6 inset-x-0 z-[100] flex justify-center pointer-events-none px-4">
      <nav className={`flex flex-col relative overflow-hidden items-center transition-all duration-500 border-2 border-black dark:border-white/20 pointer-events-auto shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_#DB007D] ${
        isScrolled 
        ? 'bg-white dark:bg-[#2d1438] scale-90 md:scale-95 rounded-xl md:rounded-2xl' 
        : 'bg-[#3F194D] dark:bg-[#1a0b21] rounded-2xl md:rounded-3xl' 
      }`}
      >
        {/* INNER CONTENT GROUP */}
        <div className="flex items-center gap-2 md:gap-4 px-2 md:px-8 py-2 md:py-3 w-full justify-center">
          {/* Navigation Links - responsive gap and font */}
          <div className="flex items-center gap-3 md:gap-6 relative">
            {navItems.map((item) => {
              const itemKey = item.name.toLowerCase();
              const isActive = activeSection === itemKey;

              return (
                <a 
                  key={item.name} 
                  href={`#${item.id}`}
                  className={`relative text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-black transition-colors ${
                    isScrolled 
                      ? 'text-black dark:text-white' 
                      : 'text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Underline for Active Section */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeSectionUnderline"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className={`absolute -bottom-1.5 inset-x-0 h-0.5 z-0 ${
                          isScrolled 
                            ? 'bg-[#DB007D] dark:bg-[#F9A8D4]' // Pink in light, soft pink in dark
                            : 'bg-[#FFCE13] dark:bg-[#FFCE13]' // Yellow highlights when dark header is active
                        }`}
                        style={{ originX: 0.5 }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </div>

          {/* Action Group: Theme Toggler */}
          <div className={`flex items-center pl-4 md:pl-6 border-l transition-colors ${
            isScrolled ? 'border-black/10 dark:border-white/10' : 'border-white/20'
          }`}>
            <div className={`flex items-center transition-colors scale-75 md:scale-100 ${
              isScrolled ? 'text-black dark:text-white' : 'text-white'
            }`}>
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>

        {/* PROGRESS BAR - Horizontal track at the bottom of the pill */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5 dark:bg-white/5 pointer-events-none">
          <motion.div 
            className={`h-full ${
              isScrolled
                ? 'bg-[#DB007D] dark:bg-[#F9A8D4]' // Active colors match underlines
                : 'bg-[#FFCE13] dark:bg-[#FFCE13]'
            }`}
            style={{ scaleX: scrollProgress, originX: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }} // Smooth but responsive
          />
        </div>
      </nav>
    </header>
  )
}

export default Header