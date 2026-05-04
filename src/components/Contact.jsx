import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');
    // Simulate API call logic for UI/UX demonstration
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-6 bg-[#E6E0F8] dark:bg-[#1a0b21] transition-colors duration-500">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="max-w-2xl mx-auto bg-white dark:bg-[#2d1438] rounded-[2rem] p-5 lg:p-8 shadow-sm border-2 border-black dark:border-white/20 relative transition-colors duration-300">
          
          <div className="absolute -top-3 left-6 bg-[#DB007D] text-white px-3 py-0.5 border-2 border-black dark:border-white/20 font-black uppercase text-[8px] tracking-widest shadow-[2px_2px_0px_black] dark:shadow-[2px_2px_0px_#DB007D]">
            let's talk
          </div>

          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#3B1E54] dark:text-white leading-none">
              Connect with <span className="text-[#DB007D] italic">Shweta.</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div className="grid md:grid-cols-2 gap-2.5">
              <input 
                type="text" 
                placeholder="NAME"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#F3EAFD] dark:bg-[#3F194D] border-2 border-black dark:border-white/10 rounded-lg px-3 py-1.5 text-[9px] font-bold outline-none uppercase transition-all focus:bg-white dark:focus:bg-[#4a1d5a] dark:text-white placeholder-black/40 dark:placeholder-white/40" 
              />
              <input 
                type="email" 
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#F3EAFD] dark:bg-[#3F194D] border-2 border-black dark:border-white/10 rounded-lg px-3 py-1.5 text-[9px] font-bold outline-none uppercase transition-all focus:bg-white dark:focus:bg-[#4a1d5a] dark:text-white placeholder-black/40 dark:placeholder-white/40" 
              />
            </div>
            
            <textarea 
              placeholder="MESSAGE"
              rows="2" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-[#F3EAFD] dark:bg-[#3F194D] border-2 border-black dark:border-white/10 rounded-lg px-3 py-1.5 text-[9px] font-bold outline-none uppercase resize-none transition-all focus:bg-white dark:focus:bg-[#4a1d5a] dark:text-white placeholder-black/40 dark:placeholder-white/40"
            ></textarea>
            
            <motion.button 
              disabled={status === 'loading'}
              whileHover={{ y: -2, boxShadow: "3px 3px 0px rgba(0,0,0,1)" }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-2.5 rounded-lg border-2 border-black dark:border-white/20 font-black uppercase tracking-widest text-[11px] transition-all ${
                status === 'success' ? 'bg-green-400 text-black' : 'bg-[#3B1E54] dark:bg-[#DB007D] text-white'
              } ${status === 'error' ? 'bg-red-500 text-white' : ''}`}
            >
              {status === 'idle' && 'Send Message ★'}
              {status === 'loading' && 'Sending...'}
              {status === 'success' && 'Sent! ✓'}
              {status === 'error' && 'Error: Empty Fields'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact