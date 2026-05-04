import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 300)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-8 z-[90] w-14 h-14 bg-riana-lime border-2 border-riana-blue shadow-[4px_4px_0px_rgba(16,21,187,1)] rounded-2xl flex items-center justify-center text-riana-blue transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'bottom-8 opacity-100' : '-bottom-20 opacity-0'
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  )
}
export default ScrollToTop