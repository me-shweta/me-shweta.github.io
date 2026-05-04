import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom' // 1. Import useLocation

const Footer = () => {
  const location = useLocation() // 2. Initialize location

  // 3. Logic to hide footer on photography page
  if (location.pathname === '/photography') return null;

  const links = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shwetameena' },
    { label: 'GitHub', url: 'https://github.com/shwetameena' },
    { label: 'Buy Me a Coffee', url: 'https://buymeacoffee.com/shwetameenk?new=1' },
  ]

  return (
    <footer className="bg-[#E6E0F8] dark:bg-[#1a0b21] py-12 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -3, 
                boxShadow: "4px 4px 0px rgba(0,0,0,1)",
                backgroundColor: "#FFCE13", 
                color: "#000000"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-[#2D1433] border-2 border-black dark:border-[#DB007D]/40 rounded-full px-6 py-2 text-xs font-black uppercase tracking-tight text-black dark:text-white transition-all shadow-[2px_2px_0px_black] dark:shadow-[2px_2px_0px_#DB007D]"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60 dark:text-[#F9A8D4] transition-colors">
            © Designed & Built by Shweta Meena
          </p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/20">
            Crafted with <span className="text-[#DB007D] dark:text-[#F9A8D4]">♥</span> in Delhi
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer