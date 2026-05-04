import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

  if (location.pathname === '/photography') return null;

  return (
    // Changed py-12 to pt-4 (top) and pb-12 (bottom)
    <footer className="bg-[#E6E0F8] dark:bg-[#1a0b21] pt-4 pb-5 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60 dark:text-[#F9A8D4] transition-colors">
            © Designed & Built by Shweta Meena
          </p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/20">
            Crafted with <span className="text-[#DB007D] dark:text-[#F9A8D4]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer