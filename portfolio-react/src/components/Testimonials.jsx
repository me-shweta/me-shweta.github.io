import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    { name: 'Rohan Mehta', text: "Shweta simplified our complex user flows. Her UI/UX interventions significantly improved retention.", role: 'Product Manager' },
    { name: 'Ananya Iyer', text: "She understood the core user problem. Her creative approach was exactly what our brand needed.", role: 'Brand Strategist' },
    { name: 'Diya Kumari', text: "She turned messy requirements into a beautiful, intuitive corporate identity.", role: 'Marketing Director' }
  ]

  return (
    <section id="testimonials" className="py-24 bg-riana-blue">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-end -space-x-1 mb-0 relative z-10">
          <div className="sticker-tab bg-riana-pink text-white uppercase">vouching</div>
        </div>

        <div className="bg-white rounded-[3rem] rounded-tl-none p-10 lg:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-10 right-10 text-[10rem] text-riana-blue/5 font-heading select-none">“</div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-riana-pink/10 rounded-full flex items-center justify-center mx-auto mb-10">
              <FaQuoteLeft className="text-2xl text-riana-pink" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="mb-12"
              >
                <p className="text-2xl md:text-3xl font-heading font-bold text-riana-blue leading-tight tracking-tighter italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="mt-8">
                  <h4 className="font-heading font-bold text-xl uppercase text-riana-pink">{testimonials[currentIndex].name}</h4>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-40">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border-2 border-riana-blue/10 flex items-center justify-center text-riana-blue hover:bg-riana-blue hover:text-white transition-all"
              >
                <FaArrowLeft size={14} />
              </button>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border-2 border-riana-blue/10 flex items-center justify-center text-riana-blue hover:bg-riana-blue hover:text-white transition-all"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials