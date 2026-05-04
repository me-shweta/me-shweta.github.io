import { motion } from 'framer-motion';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

const Blog = () => {
  const caseStudies = [
    {
      id: 1,
      date: "Apr 29, 2026",
      category: "UX Case Study",
      title: "Status Download App: Trust-Centric Architecture",
      description: "A comprehensive examination of design fundamentals through empathy mapping, transparent architecture, and scalable systems to ensure permanent archival of transient digital assets.",
      link: "https://www.notion.so/The-Status-Saver-App-35184571914b80d1b18af651eaf5c24d",
      image: "/statuscover.png" 
    },
    {
      id: 2,
      date: "May 02, 2026",
      category: "UX Case Study",
      title: "Reel Downloader: Optimizing Media Acquisition",
      description: "Analyzing friction points in mobile media consumption and leveraging native Android APIs to streamline background utility workflows for high-fidelity video acquisition.",
      link: "https://play.google.com/store/apps/details?id=com.sensei.social&hl=en_IN",
      image: "/reelcover.png"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#E6E0F8] dark:bg-[#1a0b21] min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-4 lg:px-10">
        
        {/* Main Section Container */}
        <div className="border-2 border-black dark:border-white/20 rounded-[2.5rem] p-6 lg:p-12 bg-white dark:bg-[#2d1438] shadow-sm transition-colors duration-300">
          
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <HiOutlineHome className="text-black dark:text-white text-xl" />
              <span className="font-bold text-sm tracking-tight uppercase text-black dark:text-white">Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase">
              Writing as a passion
            </h2>
          </div>

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "8px 8px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2 }
                }}
                // Light: Lavender Tint | Dark: Mid-Purple Accent
                className="group flex flex-col md:flex-row gap-6 p-6 border-2 border-black dark:border-white/10 rounded-[2rem] transition-all bg-[#F3EAFD] dark:bg-[#3F194D]"
              >
                {/* Thumbnail Container */}
                <div className="w-full md:w-56 h-40 flex-shrink-0 border-2 border-black dark:border-white/20 rounded-2xl overflow-hidden bg-white">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold opacity-40 dark:opacity-60 text-black dark:text-white">{study.date}</span>
                    <span className="text-[10px] bg-black dark:bg-[#DB007D] text-white px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                      {study.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight tracking-tighter text-black dark:text-white uppercase">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-black/70 dark:text-white/70 leading-relaxed mb-6 line-clamp-2 max-w-4xl">
                    {study.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-black text-xs uppercase border-b-2 border-black dark:border-white/40 pb-0.5 w-fit text-black dark:text-white hover:opacity-60 transition-opacity"
                    >
                      View Case Study <HiOutlineArrowUpRight strokeWidth={3} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;