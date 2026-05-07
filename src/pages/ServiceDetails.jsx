import { motion } from 'framer-motion'
import { FaCheckCircle, FaClock, FaUserCircle, FaArrowLeft, FaChartLine } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ServiceDetails = () => {
  const sidebarInfo = [
    { icon: <FaClock />, label: 'Timeline', value: '3-6 Months' },
    { icon: <FaUserCircle />, label: 'Methodology', value: 'User-Centric' },
    { icon: <FaChartLine />, label: 'Outcome', value: 'Data-Driven' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 dark:bg-[#050505]">
      <div className="container mx-auto px-6">
        
        <Link to="/" className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-[#FF5C00] transition-all mb-12">
          <FaArrowLeft /> <span>Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="section-label">Expertise Detail</span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] uppercase tracking-tighter">
                User Research & <br /><span className="text-[#FF5C00]">Strategic Design.</span>
              </h1>
              
              <div className="relative rounded-[3rem] overflow-hidden mb-12 aspect-video glass-card border-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/20 to-transparent flex items-center justify-center">
                   <p className="text-xs uppercase tracking-widest font-black opacity-30">Strategic Visual System</p>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-xl leading-relaxed opacity-70">
                  Building purposeful digital solutions starts with deconstructing complex challenges. My background in Information Technology and Mathematical Innovations allows me to bridge the gap between aesthetic vision and technical feasibility.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {['Iterative Prototyping', 'Usability Audits', 'Information Architecture', 'Visual Systems'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-6 glass-card rounded-2xl">
                    <FaCheckCircle className="text-[#FF5C00] flex-shrink-0" />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="p-10 glass-card rounded-[2.5rem]">
              <h4 className="text-lg font-black uppercase tracking-tighter mb-10">Service Parameters</h4>
              <div className="space-y-10">
                {sidebarInfo.map((info, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF5C00]/10 flex items-center justify-center text-[#FF5C00]">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">{info.label}</p>
                      <p className="font-bold text-lg leading-none">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails