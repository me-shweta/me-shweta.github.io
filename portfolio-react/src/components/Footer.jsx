import { motion } from 'framer-motion'

const Footer = () => {
  const links = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shwetameena' },
    { label: 'GitHub', url: 'https://github.com/shwetameena' },
    { label: 'Buy Me a Coffee', url: 'https://www.buymeacoffee.com/shwetameena' },
  ]

  return (
    <footer className="bg-[#E6E0F8] dark:bg-[#1a0b21] py-12 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        
        {/* Pill Navigation Grid */}
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
                backgroundColor: "#FFCE13", // Brand yellow highlight
                color: "#000000"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-full px-6 py-2 text-xs font-black uppercase tracking-tight text-black dark:text-white transition-all shadow-[2px_2px_0px_black] dark:shadow-[2px_2px_0px_#DB007D]"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Branding Footer */}
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60 dark:text-white/40 transition-colors">
          Crafted with <span className="text-[#DB007D]">♥</span> by me
        </p>
      </div>
    </footer>
  )
}

export default Footer