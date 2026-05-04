import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'

const PortfolioDetails = () => {
  return (
    <div className="pt-32 pb-24 bg-riana-blue min-h-screen">
      <div className="container mx-auto px-6 lg:px-20">
        <Link to="/#portfolio" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white mb-12 hover:text-riana-lime transition-colors">
          <FaArrowLeft /> back_to_gallery
        </Link>

        <div className="bg-riana-beige rounded-[3rem] p-8 lg:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8">
            <span className="sticker-tab bg-riana-pink text-white">Project_File_01</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Visuals */}
            <div className="space-y-8">
              <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src="/portfolio-1.webp" className="w-full rounded-3xl shadow-xl border-4 border-white" />
              <div className="grid grid-cols-2 gap-4">
                <img src="/portfolio-10.webp" className="rounded-2xl shadow-lg border-2 border-white" />
                <img src="/portfolio-7.webp" className="rounded-2xl shadow-lg border-2 border-white" />
              </div>
            </div>

            {/* Documentation */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-heading font-bold uppercase tracking-tighter text-riana-blue mb-6">
                Case Study: <br /> <span className="text-riana-pink">User-Centric Architecture.</span>
              </h1>
              
              <div className="space-y-6 text-sm font-medium leading-relaxed opacity-70 mb-10">
                <p>This project explores trust-centric design fundamentals through empathy mapping and transparent information architecture.</p>
                <div className="bg-white/50 p-6 rounded-2xl border border-black/5 italic">
                   "Shweta has an ability to simplify complex user flows. Her UI/UX interventions significantly improved our app's retention." 
                   <span className="block mt-2 font-black uppercase tracking-widest text-[9px] not-italic">— Product Manager, Mobile Byte Sensei</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-8 mb-12 border-t border-black/5 pt-10">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">client_entity</p>
                  <p className="font-heading font-bold text-xs uppercase">Mobile Byte Sensei / CIC</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">status</p>
                  <p className="font-heading font-bold text-xs uppercase">Shipped ★ 2025</p>
                </div>
              </div>

              <a href="#" className="w-full py-5 bg-riana-blue text-white rounded-2xl font-heading font-bold uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-riana-pink transition-colors">
                Visit Live Prototype <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetails