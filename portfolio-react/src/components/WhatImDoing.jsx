import { motion } from 'framer-motion'
import { FaLaptopCode, FaPalette, FaCamera, FaLightbulb } from 'react-icons/fa'

const WhatImDoing = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'UI/UX Design',
      description: 'Designing intuitive, user-centric interfaces that balance mathematical logic with aesthetic elegance.'
    },
    {
      icon: <FaLightbulb />,
      title: 'UX Research',
      description: 'Deconstructing complex user challenges through data-driven research and iterative prototyping.'
    },
    {
      icon: <FaPalette />,
      title: 'Visual Branding',
      description: 'Creating cohesive identities that bridge the gap between technical values and digital communication.'
    }
  ]

  return (
    <section id="what-im-doing" className="py-24 bg-riana-blue">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-end -space-x-1 mb-0 relative z-10">
          <div className="sticker-tab bg-white text-riana-blue uppercase tracking-tighter">expertise</div>
        </div>

        <div className="bg-riana-beige rounded-[3rem] rounded-tl-none p-10 lg:p-16 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, rotate: index % 2 === 0 ? 1 : -1 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-black/5"
              >
                <div className="w-12 h-12 bg-riana-blue/5 rounded-2xl flex items-center justify-center text-2xl text-riana-blue mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-tighter text-riana-blue">{service.title}</h3>
                <p className="text-xs font-medium opacity-60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatImDoing