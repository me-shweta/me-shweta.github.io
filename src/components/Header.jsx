import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler"
import { Github, Linkedin, Mail, Coffee, X, Check } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showSocials, setShowSocials] = useState(false)
  const [copied, setCopied] = useState(false)
  const observer = useRef(null)

  if (location.pathname === '/photography' || location.pathname.startsWith('/blog/')) return null;

  const navItems = [
    { name: 'About', id: 'hero-main' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shwetameena0511@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shwetameena', icon: <Linkedin size={16} /> },
    { label: 'GitHub', url: 'https://github.com/me-shweta', icon: <Github size={16} /> },
    { label: 'Coffee', url: 'https://buymeacoffee.com/shwetameenk?new=1', icon: <Coffee size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) setScrollProgress(window.scrollY / totalHeight);
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
      <nav className={`flex flex-col relative items-center transition-all duration-500 border-2 border-black dark:border-white/20 pointer-events-auto shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_#DB007D] ${
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
                        className={`absolute -bottom-1 inset-x-0 h-0.5 ${isScrolled ? 'bg-[#DB007D]' : 'bg-[#FFCE13]'}`}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}

            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={() => setShowSocials(!showSocials)}
              className={`text-[9px] md:text-[10px] uppercase tracking-tighter md:tracking-[0.2em] font-black transition-colors ${
                isScrolled ? 'text-black dark:text-white' : 'text-white'
              } ${showSocials ? 'text-[#FFCE13] dark:text-[#DB007D]' : ''}`}
            >
              Social
            </motion.button>
          </div>

          <div className={`flex items-center pl-3 md:pl-6 border-l transition-colors ${
            isScrolled ? 'border-black/10 dark:border-white/10' : 'border-white/20'
          }`}>
            <div className="scale-75 md:scale-90">
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>

        {/* Socials Pop-down Menu */}
        <AnimatePresence>
          {showSocials && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mx-auto w-max bg-white dark:bg-[#1a0b21] border-2 border-black dark:border-white/20 p-3 rounded-2xl flex gap-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_#DB007D] z-[110]"
            >
              {/* LinkedIn & GitHub Links */}
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="p-2 bg-gray-100 dark:bg-white/10 rounded-full group-hover:bg-[#DB007D] group-hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.div>
                  <span className="text-[8px] font-black uppercase dark:text-white">{social.label}</span>
                </a>
              ))}

              {/* Gmail Copy Button */}
              <button 
                onClick={handleCopyEmail}
                className="flex flex-col items-center gap-1 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className={`p-2 rounded-full transition-colors ${
                    copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 dark:bg-white/10 group-hover:bg-[#DB007D] group-hover:text-white'
                  }`}
                >
                  {copied ? <Check size={16} /> : <Mail size={16} />}
                </motion.div>
                <span className="text-[8px] font-black uppercase dark:text-white">
                  {copied ? 'Copied!' : 'Gmail'}
                </span>
              </button>

              <div className="w-[1px] bg-black/10 dark:bg-white/10 mx-1" />

              {/* Close Button */}
              <button onClick={() => setShowSocials(false)} className="flex flex-col items-center gap-1 group">
                <div className="p-2 bg-gray-100 dark:bg-white/10 rounded-full group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <X size={16} />
                </div>
                <span className="text-[8px] font-black uppercase dark:text-white">Close</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5 dark:bg-white/5 overflow-hidden rounded-b-3xl">
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