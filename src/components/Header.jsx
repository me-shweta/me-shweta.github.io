import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler"

const Header = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [scrollProgress, setScrollProgress] = useState(0)
  const observer = useRef(null)

  // Hide header on Photography and Individual Blog Pages
  if (location.pathname === '/photography' || location.pathname.startsWith('/blog/')) return null;

  const navItems = [
    { name: 'About', id: 'hero-main' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) setScrollProgress(currentScroll / totalHeight);
    }
    window.addEventListener('scroll', handleScroll)

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedItem = navItems.find(item => item.id === entry.target.id);
          if (matchedItem) setActiveSection(matchedItem.name.toLowerCase());
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.current.observe(element);
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
        ? 'bg-white/90 dark:bg-[#2d1438]/90 backdrop-blur-md rounded-2xl' 
        : 'bg-[#3F194D] dark:bg-[#1a0b21] rounded-3xl' 
      }`}
      >
        <div className="flex items-center gap-2 md:gap-4 px-3 md:px-8 py-2 md:py-3">
          <div className="flex items-center gap-3 md:gap-8 relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a 
                  key={item.name} 
                  href={`#${item.id}`}
                  className={`relative text-[9px] md:text-[10px] uppercase tracking-tighter md:tracking-[0.2em] font-black transition-colors ${
                    isScrolled ? 'text-black dark:text-white' : 'text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        className={`absolute -bottom-1 inset-x-0 h-0.5 ${isScrolled ? 'bg-[#DB007D]' : 'bg-[#FFCE13]'}`}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </div>

          <div className={`flex items-center pl-3 md:pl-6 border-l transition-colors ${
            isScrolled ? 'border-black/10 dark:border-white/10' : 'border-white/20'
          }`}>
            <div className="scale-75 md:scale-90">
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5 dark:bg-white/5">
          <motion.div 
            className={`h-full ${isScrolled ? 'bg-[#DB007D]' : 'bg-[#FFCE13]'}`}
            style={{ scaleX: scrollProgress, originX: 0 }}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header