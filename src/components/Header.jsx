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
    <header className="fixed top-6 inset-x-0 z-[100] flex justify-center pointer-events-none">
      <nav className={`flex items-center gap-8 px-8 py-3 rounded-2xl transition-all duration-500 border-2 border-black dark:border-white/20 pointer-events-auto shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_#DB007D] ${
        isScrolled 
        ? 'bg-white dark:bg-[#2d1438] scale-95' 
        : 'bg-[#3F194D] dark:bg-[#1a0b21]' 
      }`}
      >
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {['About', 'Skills', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={item === 'About' ? '#hero-main' : `#${item.toLowerCase()}`}
              className={`text-[10px] uppercase tracking-[0.2em] font-black transition-colors ${
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
        <div className={`flex items-center pl-6 border-l transition-colors ${
          isScrolled ? 'border-black/10 dark:border-white/10' : 'border-white/20'
        }`}>
          <div className={`flex items-center transition-colors ${
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