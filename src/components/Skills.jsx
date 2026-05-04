import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, Music, Users, ShieldCheck, 
  Briefcase, Globe, ChevronDown, Github, Terminal, 
  Figma, Cpu, Code2, Layout, ArrowUpRight, Heart
} from 'lucide-react';

const SkillTag = ({ name, hoverColor }) => (
  <motion.span 
    whileHover={{ scale: 1.05, backgroundColor: hoverColor, color: '#FFFFFF', borderColor: 'black' }}
    className="px-3 py-1.5 rounded-lg border-2 border-black text-[10px] font-black uppercase tracking-tight text-black dark:text-white cursor-default transition-all duration-300 bg-white dark:bg-[#3F194D] shadow-[3px_3px_0px_black]"
  >
    {name}
  </motion.span>
);

const FloatingIcon = ({ icon: Icon, name, color }) => (
  <motion.div
    drag
    dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
    animate={{ 
      y: [0, -6, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: Math.random() * 2 
    }}
    className="group relative flex flex-col items-center cursor-grab active:cursor-grabbing"
  >
    <div className={`p-2 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0px_black] group-hover:bg-${color} transition-colors`}>
      <Icon size={16} className="text-black" />
    </div>
    <span className="absolute -bottom-4 opacity-0 group-hover:opacity-100 transition-opacity text-[7px] font-black uppercase bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap z-50">
      {name}
    </span>
  </motion.div>
);

const ExperienceItem = ({ icon: Icon, date, role, company, location, details, skills, isOpen, onClick }) => (
  <div className="border-b-2 border-black/10 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-4 flex items-center justify-between group transition-colors"
    >
      <div className="flex items-center gap-4 text-left">
        <div className={`p-2 rounded-lg border-2 border-black bg-white transition-transform z-10 ${isOpen ? 'rotate-3' : ''}`}>
          <Icon size={16} className="text-black" />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase text-black/50 dark:text-white/40 leading-none mb-1">{date}</p>
          <h4 className="font-black text-sm uppercase text-black dark:text-white leading-tight">{company}</h4>
        </div>
      </div>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
        <ChevronDown size={20} className="text-black dark:text-white" />
      </motion.div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-6 pl-14">
            <p className="text-[10px] font-black text-[#DB007D] dark:text-[#F9A8D4] uppercase mb-3">{role} {location && `· ${location}`}</p>
            <ul className="text-[11px] font-bold text-black dark:text-white/90 space-y-2 mb-4 leading-tight list-disc list-inside opacity-90">
              {details.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            <p className="text-[9px] font-black uppercase text-black/60 dark:text-white/40 tracking-wider">Skills: {skills}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const professionalSkills = ['User-centered design', 'Information architecture', 'Wireframing', 'Prototyping', 'Interaction design', 'Visual design', 'User research', 'Design systems', 'HTML & CSS'];

  const toolStack = [
    { name: 'Figma', icon: Figma, color: '[#FFCE13]' },
    { name: 'Framer', icon: Layout, color: '[#9AB4E6]' },
    { name: 'React', icon: Code2, color: '[#DB007D]' },
    { name: 'Python', icon: Cpu, color: '[#A7E614]' },
    { name: 'GitHub', icon: Github, color: 'white' },
    { name: 'VS Code', icon: Terminal, color: '[#E6E0F8]' }
  ];

  const experiences = [
    {
      icon: Globe,
      date: "2024 — Present",
      role: "Founding Member",
      company: "WEDO",
      details: ["Contributed to startup and collaboration-based projects.", "Assisted in branding, planning, and workflow structuring.", "Supported community-driven creative initiatives."],
      skills: "Collaboration · Startup Strategy · Creative Planning"
    },
    {
      icon: ShieldCheck,
      date: "Oct 2023",
      role: "Event Management Intern",
      company: "Military Heritage Festival",
      location: "USI, New Delhi",
      details: ["Assisted in event coordination and execution planning.", "Managed attendee communication and scheduling support.", "Coordinated with organizing teams during on-ground operations."],
      skills: "Event Coordination · Teamwork · Communication"
    },
    {
      icon: Briefcase,
      date: "2022 — Present",
      role: "Founding Member & PM",
      company: "QuadCydle",
      details: ["Organized industry-focused workshops and student initiatives.", "Guided members in relevant tools and workflows.", "Managed planning, coordination, and mentorship activities."],
      skills: "Management · Leadership · Mentorship · Strategy"
    },
    {
      icon: Users,
      date: "2022 — Present",
      role: "Co-Head",
      company: "Research Society",
      details: ["Mentored students in research writing and documentation.", "Guided survey creation, data collection, and analysis.", "Assisted in structuring reports and presentations."],
      skills: "Research · Analysis · Documentation · Mentoring"
    }
  ];

  return (
    <section id="skills" className="bg-[#E6E0F8] dark:bg-[#1a0b21] py-12 px-6 lg:px-20 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex items-end justify-start relative z-10">
          <div className="bg-[#FFCE13] dark:bg-[#2D1433] border-2 border-black border-b-0 text-black dark:text-[#F9A8D4] px-8 py-3 text-xs font-black uppercase tracking-widest rounded-t-xl">
            Expertise & Experience
          </div>
        </div>

        <div className="border-2 border-black bg-white dark:bg-[#2d1438] rounded-b-3xl rounded-tr-3xl p-8 shadow-[12px_12px_0px_black] dark:shadow-[12px_12px_0px_#DB007D] grid lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Skillset */}
            <div>
              <h3 className="font-heading font-black text-xl uppercase mb-4 tracking-tighter text-black dark:text-white">Skillset</h3>
              <div className="flex flex-wrap gap-2">
                {professionalSkills.map((tag, i) => (
                  <SkillTag key={i} name={tag} hoverColor="#DB007D" />
                ))}
              </div>
            </div>

            {/* Tool Stack */}
            <div className="mt-8">
              <h3 className="font-heading font-black text-xl uppercase mb-1 tracking-tighter text-black dark:text-white">Tool Stack</h3>
              <div className="relative h-16 flex items-center justify-around px-2">
                 {toolStack.map((tool, i) => (
                   <FloatingIcon key={i} {...tool} />
                 ))}
              </div>
            </div>

            {/* Interests - Reduced size for better balance */}
            <div className="mt-8">
              <h3 className="font-heading font-black text-xl uppercase mb-4 tracking-tighter text-black dark:text-white">
                Interests
              </h3>
              <div className="flex flex-col gap-2.5">
                
                {/* Active Photography Link */}
                <Link 
                  to="/photography" 
                  className="group flex items-center justify-between px-4 py-2.5 bg-[#c3f567] dark:bg-[#A7E614]/20 border-2 border-black dark:border-white/10 rounded-xl hover:-translate-y-1 hover:bg-[#A7E614] transition-all shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_#A7E614]"
                >
                  <span className="font-black text-[10px] uppercase flex items-center gap-3 text-[#305303] dark:text-[#A7E614] group-hover:text-black dark:group-hover:text-white transition-colors">
                    <Camera size={18}/> Photography
                  </span>
                  <ArrowUpRight size={16} className="text-[#305303]/50 dark:text-[#A7E614]/50 group-hover:text-black dark:group-hover:text-white group-hover:rotate-45 transition-all" />
                </Link>

                {/* Static Music Block */}
                <div 
                  className="flex items-center justify-between px-4 py-2.5 bg-[#BFDBFE] dark:bg-[#9AB4E6]/20 border-2 border-black dark:border-white/10 rounded-xl shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_#9AB4E6] cursor-default"
                >
                  <span className="font-black text-[10px] uppercase flex items-center gap-3 text-[#1E40AF] dark:text-[#9AB4E6]">
                    <Music size={18}/> Music
                  </span>
                </div>

                {/* Static Collecting Block - Pink Theme */}
                <div 
                  className="flex items-center justify-between px-4 py-2.5 bg-[#FBCFE8] dark:bg-[#DB007D]/20 border-2 border-black dark:border-white/10 rounded-xl shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_#DB007D] cursor-default"
                >
                  <span className="font-black text-[10px] uppercase flex items-center gap-3 text-[#9D174D] dark:text-[#F9A8D4]">
                    <Heart size={18} className="fill-current" /> Stickers & Keychains
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACCORDION EXPERIENCES */}
          <div className="lg:col-span-7 bg-[#FFCE13] dark:bg-[#1E0B21] border-2 border-black dark:border-[#DB007D]/40 rounded-2xl shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_#DB007D] overflow-hidden flex flex-col transition-colors duration-500">
            <div className="p-6 border-b-2 border-black bg-[#FFCE13] dark:bg-[#2D1433]">
               <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-black dark:text-[#F9A8D4]">Experience</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-6 custom-scrollbar bg-white/20 dark:bg-transparent">
              {experiences.map((exp, i) => (
                <ExperienceItem 
                  key={i} 
                  {...exp} 
                  isOpen={openIndex === i} 
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;