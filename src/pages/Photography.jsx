import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Photography = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { id: 1, url: '/photos/photo1.jpeg' },
    { id: 2, url: '/photos/photo2.jpeg' },
    { id: 3, url: '/photos/photo3.jpeg' },
    { id: 4, url: '/photos/photo4.jpeg' },
    { id: 5, url: '/photos/photo5.jpeg' },
    { id: 6, url: '/photos/photo6.jpeg' },
    { id: 7, url: '/photos/photo7.jpeg' },
    { id: 8, url: '/photos/photo8.jpeg' },
    { id: 9, url: '/photos/photo9.jpeg' },
    { id: 10, url: '/photos/photo10.jpeg' },
    { id: 11, url: '/photos/photo11.jpeg' },
    { id: 12, url: '/photos/photo12.jpeg' },
    { id: 13, url: '/photos/photo13.jpeg' },
    { id: 14, url: '/photos/photo14.jpeg' },
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const selectedImg = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-[#E6E0F8] dark:bg-[#1a0b21] pt-16 pb-12 px-4 md:px-6 transition-colors duration-500">
      
      {/* Top Navigation Bar - Standalone for this page */}
      <div className="max-w-[1800px] mx-auto flex justify-between items-center mb-10">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#3F194D] border-2 border-black dark:border-white/20 rounded-xl font-black uppercase text-[10px] shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_#DB007D] text-black dark:text-white"
        >
          <ArrowLeft size={14} /> Back
        </motion.button>
        
        <p className="font-heading font-black text-2xl md:text-2xl uppercase tracking-tighter text-black dark:text-white">
          {images.length} Images
        </p>
      </div>

      {/* 5-Column Grid (Desktop) - No borders on images */}
      <div className="max-w-[1800px] mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            layoutId={`img-${img.id}`}
            onClick={() => setSelectedIndex(index)}
            className="group cursor-pointer relative overflow-hidden bg-black/5 dark:bg-white/5 break-inside-avoid"
          >
            <img 
              src={img.url} 
              alt="" 
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <Maximize2 className="text-white opacity-70" size={20} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={() => setSelectedIndex(null)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white dark:bg-[#1a0b21] border-2 border-black dark:border-white/10 rounded-2xl overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black text-white rounded-full hover:scale-110 transition-transform"
              >
                <X size={18} />
              </button>

              <div className="relative flex flex-col items-center">
                {/* Navigation Buttons */}
                <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 text-white rounded-full hover:bg-black transition-colors">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 text-white rounded-full hover:bg-black transition-colors">
                  <ChevronRight size={24} />
                </button>

                {/* Main Content Area */}
                <div className="w-full bg-black/5 dark:bg-black/20 flex items-center justify-center min-h-[40vh]">
                  <img 
                    key={selectedImg.id} 
                    src={selectedImg.url} 
                    alt="" 
                    className="max-w-full h-auto max-h-[70vh] object-contain shadow-xl" 
                  />
                </div>
                
                {/* Footer Buttons - Full Res on Left, Download on Right */}
                <div className="p-5 flex gap-4 w-full justify-center bg-white dark:bg-[#1a0b21]">
                  <a 
                    href={selectedImg.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#9AB4E6] border-2 border-black rounded-lg font-black uppercase text-[10px] shadow-[3px_3px_0px_black] hover:-translate-y-0.5 transition-all"
                  >
                    <Maximize2 size={14} /> Full Res
                  </a>
                  <a 
                    href={selectedImg.url} 
                    download 
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#A7E614] border-2 border-black rounded-lg font-black uppercase text-[10px] shadow-[3px_3px_0px_black] hover:-translate-y-0.5 transition-all"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photography;