import { useState, useEffect } from 'react'
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-6 inset-x-0 z-[100] flex justify-center pointer-events-none px-4">
      <nav className={`flex items-center gap-2 md:gap-4 px-2 md:px-8 py-1 md:py-1.5 rounded-xl md:rounded-2xl transition-all duration-500 border-2 border-black dark:border-white/20 pointer-events-auto shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_#DB007D] ${
        isScrolled 
        ? 'bg-white dark:bg-[#2d1438] scale-90 md:scale-95' 
        : 'bg-[#3F194D] dark:bg-[#1a0b21]' 
      }`}
      >
        {/* Navigation Links - responsive gap and font */}
        <div className="flex items-center gap-3 md:gap-6">
          {['About', 'Skills', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={item === 'About' ? '#hero-main' : `#${item.toLowerCase()}`}
              className={`text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-black transition-colors ${
                isScrolled 
                  ? 'text-black dark:text-white hover:text-[#DB007D]' 
                  : 'text-white hover:text-[#FFCE13]'
              }`}
            >
              {item}
            </a>
          ))}
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
      </nav>
    </header>
  )
}

export default Header