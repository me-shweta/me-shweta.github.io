import { motion } from 'framer-motion';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Utility function to force scroll to top
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const blogPosts = [
      {
  id: 1,
  date: "May 07, 2026",
  category: "UX Case Study",
  title: "The Hidden UX Secrets Behind an App That Just Works",
  description: "Beyond basic utility: A deep dive into the UX strategy, iterative validation, and trust-building systems behind a 'simple' status downloader.",
  link: "https://medium.com/@shwetameena0511/the-hidden-ux-secrets-behind-an-app-that-just-works-4df611251666",
  image: "public/blog-cover/medium.png",
  isExternal: true
},
    {
      id: 2,
      date: "Apr 28, 2026",
      category: "Fundamentals",
      title: "Chunking: How to not overwhelm your users",
      description: "Why breaking down information is the kindest thing you can do for someone's working memory.",
      link: "/blog/ux-chunking-guide",
      image: "public/blog-cover/chunking.png",
      isExternal: false
    },
    {
      id: 3,
      date: "Apr 20, 2026",
      category: "Psychology",
      title: "Hick's Law: The hidden cost of too many choices",
      description: "Explaining why having more options usually results in users doing absolutely nothing.",
      link: "/blog/hicks-law-simplicity",
      image: "public/blog-cover/hick.png",
      isExternal: false
    },
    {
      id: 4,
      date: "Apr 01, 2026",
      category: "Visual Hierarchy",
      title: "F & Z-Patterns: Guiding the eye naturally",
      description: "How people actually read screens and how you can use that to put your best content first.",
      link: "/blog/visual-scanning-patterns",
      image: "public/blog-cover/patterns.png",
      isExternal: false
    },
    {
      id: 5,
      date: "Feb 10, 2026",
      category: "UX Case Study",
      title: "Status Saver: Building a foundation of trust",
      description: "A deep dive into empathy mapping and transparent design systems used to help people archive temporary digital moments.",
      link: "https://www.notion.so/The-Status-Saver-App-35184571914b80d1b18af651eaf5c24d",
      image: "/blog-cover/statuscover.png",
      isExternal: true
    },
    {
      id: 6,
      date: "Jan 25, 2026",
      category: "Principles",
      title: "Beauty Bias: Why we forgive pretty designs",
      description: "Looking at the Aesthetic-Usability Effect and why a good-looking interface feels easier to use.",
      link: "/blog/aesthetic-usability-bias",
      image: "public/blog-cover/beauty.png",
      isExternal: false
    },
    {
      id: 7,
      date: "Jan 01, 2026",
      category: "Design Strategy",
      title: "The power of nothing: Why white space matters",
      description: "Using empty space as a deliberate tool to create focus, clarity, and a sense of calm.",
      link: "/blog/power-of-whitespace",
      image: "public/blog-cover/power.png",
      isExternal: false
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#E6E0F8] dark:bg-[#1a0b21] min-h-screen transition-colors duration-500 px-2 md:px-4">
      <div className="container mx-auto max-w-[1400px]">
        <div className="w-full border-2 border-black dark:border-white/20 rounded-[2.5rem] p-4 md:p-8 lg:p-10 bg-white dark:bg-[#2d1438] shadow-sm transition-colors duration-300">
          
          <div className="mb-10 px-2 md:px-4">
            <div className="flex items-center gap-2 mb-2">
              <HiOutlineHome className="text-black dark:text-white text-lg" />
              <span className="font-bold text-xs tracking-tight uppercase text-black/60 dark:text-white/60">A bit of my mind</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white uppercase leading-none">
              Notes on Design
            </h2>
          </div>

          <div className="space-y-4 px-1 md:px-4">
            {blogPosts.map((post) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -4, 
                    boxShadow: "6px 6px 0px rgba(0,0,0,1)",
                    transition: { duration: 0.2 }
                  }}
                  className="group flex flex-col md:flex-row gap-4 p-3 md:p-4 border-2 border-black dark:border-white/10 rounded-[1.5rem] transition-all bg-[#F3EAFD] dark:bg-[#3F194D]"
                >
                  <div className="w-full md:w-40 h-28 flex-shrink-0 border-2 border-black dark:border-white/20 rounded-xl overflow-hidden bg-white">
                    <img src={post.image} alt="" className="w-full h-full object-cover render-edge" />
                  </div>

                  <div className="flex flex-col justify-center py-0.5">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-bold opacity-50 text-black dark:text-white">{post.date}</span>
                      <span className="text-[9px] bg-black dark:bg-[#DB007D] text-white px-2 py-0.5 rounded-full font-black uppercase tracking-tight">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-md md:text-lg font-black mb-1 leading-tight tracking-tight text-black dark:text-white">
                      {post.title}
                    </h3>
                    
                    <p className="text-[11px] font-medium text-black/70 dark:text-white/70 leading-snug mb-3 line-clamp-1">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-1 font-black text-[10px] uppercase border-b-2 border-black dark:border-white/40 pb-0.5 w-fit text-black dark:text-white group-hover:opacity-60 transition-opacity">
                      View <HiOutlineArrowUpRight strokeWidth={3} size={14} />
                    </div>
                  </div>
                </motion.div>
              );

              return post.isExternal ? (
                <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                  {CardContent}
                </a>
              ) : (
                <Link 
                  key={post.id} 
                  to={post.link} 
                  className="block"
                  onClick={handleScrollToTop} // Forces the browser to jump to top on click
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;