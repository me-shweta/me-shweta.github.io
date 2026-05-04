import { motion } from 'framer-motion';

const SkillTag = ({ name, hoverColor }) => (
  <motion.span 
    whileHover={{ scale: 1.05, backgroundColor: hoverColor, color: '#FFFFFF', borderColor: 'black' }}
    className="px-4 py-1 rounded-lg border-2 border-black text-[10px] font-black uppercase tracking-widest text-black dark:text-white cursor-default transition-colors duration-300 bg-white dark:bg-[#3F194D] shadow-[2px_2px_0px_black] dark:shadow-[2px_2px_0px_#DB007D]"
  >
    {name}
  </motion.span>
)

const StickerCard = ({ title, items, color, darkColor, textColor = "text-black", darkTextColor = "dark:text-white", hoverColor, tags = [] }) => (
  <motion.div 
    whileHover={{ 
      y: -8, 
      boxShadow: "12px 12px 0px rgba(0,0,0,1)",
      transition: { duration: 0.2 }
    }}
    className={`${color} ${darkColor} p-8 rounded-[2.5rem] shadow-[8px_8px_0px_black] border-2 border-black flex flex-col h-full relative overflow-hidden transition-colors duration-300`}
  >
    {/* Decorative Star Sticker */}
    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-[#FFCE13] rounded-full flex items-center justify-center shadow-md rotate-12 border-2 border-black z-10">
      <span className="text-[#DB007D] dark:text-[#3F194D] text-lg">★</span>
    </div>
    
    <h3 className={`font-black text-2xl mb-8 uppercase tracking-tighter ${textColor} ${darkTextColor}`}>
      {title}
    </h3>

    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map((tag, i) => (
        <SkillTag key={i} name={tag} hoverColor={hoverColor} />
      ))}
    </div>
    
    <div className="space-y-6 flex-grow">
      {items.map((item, idx) => (
        <div key={idx} className="border-b-2 border-black/10 dark:border-white/10 pb-4 last:border-0">
          <h4 className={`text-xs font-black mb-1 uppercase tracking-tight ${textColor} ${darkTextColor}`}>{item.title}</h4>
          <p className={`text-[11px] font-medium leading-relaxed opacity-80 ${textColor} ${darkTextColor}`}>{item.desc}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const strengthsData = [
    { title: 'UX Research & Wireframing', desc: 'Expertise in persona development and customer journey mapping to solve complex problems.' },
    { title: 'Product Thinking', desc: 'Deconstructing challenges into intuitive solutions and high-fidelity prototypes.' },
    { title: 'Soft Skills', desc: 'Empathy-driven problem solving, critical thinking, and professional communication.' }
  ];

  const leadershipData = [
    { title: 'Project Manager | Quadcydle', desc: 'Organizing tech workshops and guiding students in industry-relevant tool stacks.' },
    { title: 'Co-Head | Research Society', desc: 'Leading experiments in emerging fields and mentoring members through research writing.' }
  ];

  return (
    <section id="skills" className="bg-[#E6E0F8] dark:bg-[#1a0b21] py-24 px-6 lg:px-20 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        
        {/* Tab Style Header */}
        <div className="flex items-end justify-start -space-x-1 mb-0 relative z-10">
          <div className="bg-[#FFCE13] dark:bg-[#DB007D] border-2 border-black border-b-0 text-black dark:text-white px-10 py-4 text-sm font-black uppercase tracking-widest rounded-t-2xl">
            Expertise
          </div>
          <div className="bg-white dark:bg-[#3F194D] border-2 border-black border-b-0 text-black dark:text-white px-10 py-4 text-sm font-black uppercase tracking-widest rounded-t-2xl opacity-40 dark:opacity-20">
            Archive
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch relative z-0">
          {/* Column 1: UX Strategy */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <StickerCard 
              title="UX Strategy" 
              items={strengthsData} 
              color="bg-white" 
              darkColor="dark:bg-[#2d1438]"
              hoverColor="#DB007D" 
              tags={['Wireframing', 'Personas', 'User Research']}
            />
          </motion.div>

          {/* Column 2: Leadership */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <StickerCard 
              title="Leadership" 
              items={leadershipData} 
              color="bg-[#FFCE13]" 
              darkColor="dark:bg-[#3F194D]"
              hoverColor="#000000" 
              tags={['Management', 'Mentorship', 'Strategy']}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;