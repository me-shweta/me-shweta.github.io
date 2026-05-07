import { useState } from 'react'
import { Link } from 'react-router-dom' // Added for internal routing
import { motion, AnimatePresence } from 'framer-motion'
import { FiClock, FiArrowRight } from 'react-icons/fi'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const portfolioItems = [
    { 
      id: 1, 
      title: 'WealthWare', 
      category: 'Fintech',
      image: '/wealthware.jpeg', 
      description: 'Money is personal, so fintech should be too. I simplified complex data into a dashboard that actually makes sense.',
      link: 'https://wealth-ware.vercel.app/login', // External link
      isExternal: true,
      tagColor: 'bg-[#FFCE13]'
    },
    { 
      id: 2, 
      title: 'Movie App', 
      category: 'Entertainment',
      image: '/movie.jpeg', 
      description: 'Stop scrolling, start watching. I designed this to solve the Paradox of Choice by matching content to your vibe.',
      link: '/case-study/movieapp', // Internal link
      isExternal: false,
      tagColor: 'bg-orange-500'
    },
    { 
      id: 3, 
      title: 'Stories Downloader', 
      category: 'Utilities',
      image: '/status.jpeg', 
      description: 'Digital moments disappear fast. I designed this to archive them with zero friction and a single tap.',
      link: 'https://play.google.com/store/apps/details?id=com.sensei.stories',
      isExternal: true,
      tagColor: 'bg-[#DB007D]'
    },
    { 
      id: 4, 
      title: 'GoCheapCab', 
      category: 'Mobility',
      image: '/cab.jpeg', 
      description: 'Tired of app-hopping between Uber and Ola? I built a unified space to compare fares and book rides in seconds.',
      link: '/case-study/gocheapcab', // Internal link
      isExternal: false,
      tagColor: 'bg-[#A7E614]'
    }, 
    { 
      id: 5, 
      title: 'TrustLoan', 
      category: 'Fintech',
      image: '/loan.jpeg', 
      description: 'Loan apps are usually scary. I used "chunking" and progress tracking to turn an anxious process into a confident one.',
      link: '/case-study/loanapp', // Internal link
      isExternal: false,
      tagColor: 'bg-[#0052FF]'
    },
    { 
      id: 6, 
      title: 'Reel Downloader', 
      category: 'Social Media',
      image: '/reel.jpeg', 
      description: 'Optimizing mobile friction points for media acquisition via native Android APIs.',
      link: 'https://play.google.com/store/apps/details?id=com.sensei.social&hl=en_IN',
      isExternal: true,
      tagColor: 'bg-black'
    }
  ]

  const filters = ['All', 'Fintech', 'Mobility', 'Entertainment', 'Utilities', 'Social Media']

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-16 bg-[#E6E0F8] dark:bg-[#1a0b21] min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="border-2 border-black dark:border-white/20 rounded-[2.5rem] p-6 lg:p-8 shadow-sm bg-white dark:bg-[#2d1438] transition-colors duration-300">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FiClock className="text-black dark:text-white text-xs" />
                <span className="font-bold text-[10px] uppercase tracking-widest text-black/50 dark:text-white/50">My Latest Obsessions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-white uppercase leading-none">
                Design & Code Explorations
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest border-2 border-black dark:border-white/20 transition-all shadow-[2px_2px_0px_black] dark:shadow-[2px_2px_0px_#DB007D] ${
                    activeFilter === filter 
                    ? 'bg-[#FFCE13] dark:bg-[#DB007D] text-black dark:text-white -translate-y-0.5' 
                    : 'bg-white dark:bg-[#3F194D] text-black dark:text-white hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item, index) => (
                <motion.div 
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group bg-[#F3EAFD] dark:bg-[#3F194D] border-2 border-black dark:border-white/10 rounded-[2rem] p-4 flex flex-col h-full transition-all hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_#DB007D]"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] border-2 border-black dark:border-white/20 bg-white">
                    <div className={`h-4 w-full ${item.tagColor} border-b-2 border-black dark:border-white/20 relative z-10`} />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px] transition-opacity"
                    >
                      {item.isExternal ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
                          <HiOutlineArrowUpRight size={20} />
                        </a>
                      ) : (
                        <Link to={item.link} className="bg-white text-black p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
                          <HiOutlineArrowUpRight size={20} />
                        </Link>
                      )}
                    </motion.div>
                  </div>

                  <div className="flex flex-col flex-grow px-1">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] mb-1 text-[#DB007D] dark:text-[#FFCE13]">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black mb-2 uppercase tracking-tighter text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-medium text-black/60 dark:text-white/60 leading-snug mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto pt-2 border-t border-black/5 dark:border-white/5">
                      {item.isExternal ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link text-black dark:text-white">
                          <span className="font-black text-[9px] uppercase tracking-widest">Visit Site</span>
                          <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link to={item.link} className="flex items-center justify-between group/link text-black dark:text-white">
                          <span className="font-black text-[9px] uppercase tracking-widest">See the process</span>
                          <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      )}
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