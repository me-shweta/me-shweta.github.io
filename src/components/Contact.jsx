import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiCheck } from 'react-icons/hi'

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "shwetameena.work@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#E6E0F8] dark:bg-[#1a0b21] transition-colors duration-500 overflow-visible">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#2d1438] rounded-[3rem] p-8 md:p-14 shadow-sm border-2 border-black dark:border-white/10 relative transition-colors duration-300">
          
          {/* Top Pill Badge - Adjusted positioning to prevent clipping */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-8 py-2.5 rounded-full font-black uppercase text-[10px] tracking-widest shadow-md z-20 border-2 border-transparent dark:border-black/10">
            Contact
          </div>

          {/* Decorative Dot Pattern */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#ffffff10_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none rounded-[3rem]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white mb-6 uppercase leading-none">
              Get in Touch
            </h2>
            
            <p className="text-sm md:text-lg font-medium text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out via <span className="text-[#DB007D] dark:text-[#F9A8D4] font-bold">LinkedIn</span> for a quick chat, or drop me a formal line at my email address.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center relative">
              {/* LinkedIn Action */}
              <motion.a 
                href="https://www.linkedin.com/in/shwetameena"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-black dark:bg-[#DB007D] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-lg w-full md:w-auto justify-center"
              >
                Message on LinkedIn <FaLinkedin size={18} />
              </motion.a>

              {/* Email Copy Action */}
              <motion.button 
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#F3EAFD] dark:bg-[#3F194D] text-black dark:text-white border-2 border-black dark:border-white/10 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all w-full md:w-auto justify-center relative"
              >
                {copied ? 'Email Copied!' : 'Ping my Email'} 
                {copied ? <HiCheck size={18} className="text-green-500" /> : <HiOutlineMail size={18} />}
              </motion.button>

              {/* Tooltip/Toast for Copy Success */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-12 bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg"
                  >
                    Copied to clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact