import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiClock } from 'react-icons/fi'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const portfolioItems = [
    { 
      id: 1, 
      title: 'WealthWare', 
      category: 'Web design',
      image: '/wealthware.jpeg', 
      description: 'A fintech solution focused on cognitive ease, streamlining complex financial data into actionable insights through a modular, accessible interface.',
      link: 'https://wealth-ware.vercel.app/login',
      tagColor: 'bg-[#FFCE13]'
    },
    { 
      id: 2, 
      title: 'Movie App', 
      category: 'App design',
      image: '/movie.jpeg', 
      description: 'An immersive entertainment platform prioritizing content discovery and personalization through a dark-mode optimized, gesture-driven mobile interface.',
      link: '#',
      tagColor: 'bg-orange-500'
    },
    { 
      id: 3, 
      title: 'Status Download App', 
      category: 'App design',
      image: '/status.jpeg', 
      description: 'A utility-first UX case study focused on file persistence logic, automating the archival of transient social media assets via a simplified 1-tap workflow.',
      link: 'https://play.google.com/store/apps/details?id=com.sensei.stories',
      tagColor: 'bg-[#DB007D]'
    },
    { 
      id: 4, 
      title: 'Reel Downloader', 
      category: 'App design',
      image: '/reel.jpeg', 
      description: 'Optimizing mobile friction points for media acquisition, this tool leverages native Android APIs to provide a seamless background download experience.',
      link: 'https://play.google.com/store/apps/details?id=com.sensei.social&hl=en_IN',
      tagColor: 'bg-black'
    }
  ]

  const filters = ['All', 'Web design', 'App design']

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-[#E6E0F8] dark:bg-[#1a0b21] min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-4 lg:px-10">
        
        {/* Main Section Card */}
        <div className="border-2 border-black dark:border-white/20 rounded-[2rem] p-6 lg:p-10 shadow-sm bg-white dark:bg-[#2d1438] transition-colors duration-300">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="text-black dark:text-white" />
                <span className="font-bold text-sm tracking-tight uppercase text-black dark:text-white">Featured Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase leading-none">
                Product Explorations
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest border-2 border-black dark:border-white/20 transition-all shadow-[2px_2px_0px_black] dark:shadow-[2px_2px_0px_#DB007D] ${
                    activeFilter === filter 
                    ? 'bg-[#FFCE13] dark:bg-[#DB007D] text-black dark:text-white translate-y-[-2px]' 
                    : 'bg-white dark:bg-[#3F194D] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#4a1d5a]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "12px 12px 0px rgba(0,0,0,1)",
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="bg-[#F3EAFD] dark:bg-[#3F194D] border-2 border-black dark:border-white/10 rounded-[1.5rem] p-6 flex flex-col h-full cursor-pointer transition-colors duration-300"
                >
                  <div className="relative rounded-xl overflow-hidden mb-6 aspect-video border-2 border-black dark:border-white/20 bg-white flex flex-col group">
                    <div className={`h-6 w-full ${item.tagColor} border-b-2 border-black dark:border-white/20`} />
                    <div className="flex-grow flex items-center justify-center overflow-hidden bg-white">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40 dark:opacity-60 text-black dark:text-white">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black mb-3 leading-tight uppercase tracking-tighter text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-black/70 dark:text-white/70 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto">
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-black text-xs uppercase border-b-2 border-black dark:border-white/40 pb-1 text-black dark:text-white hover:opacity-60 transition-opacity"
                      >
                        View Project <HiOutlineArrowUpRight strokeWidth={3} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio