import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Camera, Music, ExternalLink, Users, ShieldCheck, 
  Briefcase, Globe, ChevronDown, Github, Terminal, 
  Figma, Cpu, Code2, Layout 
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
          <p className="text-[9px] font-black uppercase text-black/50 leading-none mb-1">{date}</p>
          <h4 className="font-black text-sm uppercase text-black leading-tight">{company}</h4>
        </div>
      </div>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
        <ChevronDown size={20} className="text-black" />
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
            <p className="text-[10px] font-black text-[#DB007D] uppercase mb-3">{role} {location && `· ${location}`}</p>
            <ul className="text-[11px] font-bold text-black space-y-2 mb-4 leading-tight list-disc list-inside opacity-90">
              {details.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            <p className="text-[9px] font-black uppercase text-black/60 tracking-wider">Skills: {skills}</p>
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
          <div className="bg-[#FFCE13] dark:bg-[#DB007D] border-2 border-black border-b-0 text-black dark:text-white px-8 py-3 text-xs font-black uppercase tracking-widest rounded-t-xl">
            Expertise & Experience
          </div>
        </div>

        <div className="border-2 border-black bg-white dark:bg-[#2d1438] rounded-b-3xl rounded-tr-3xl p-8 shadow-[12px_12px_0px_black] dark:shadow-[12px_12px_0px_#DB007D] grid lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between py-1">
            {/* Skillset */}
            <div>
              <h3 className="font-heading font-black text-2xl uppercase mb-4 tracking-tighter text-black dark:text-white">Skillset</h3>
              <div className="flex flex-wrap gap-2">
                {professionalSkills.map((tag, i) => (
                  <SkillTag key={i} name={tag} hoverColor="#DB007D" />
                ))}
              </div>
            </div>

            {/* Tool Stack - Extreme low padding */}
            <div className="mt-2 mb-2">
              <h3 className="font-heading font-black text-2xl uppercase mb-1 tracking-tighter text-black dark:text-white">Tool Stack</h3>
              <div className="relative h-20 flex items-center justify-around px-2">
                 {toolStack.map((tool, i) => (
                   <FloatingIcon key={i} {...tool} />
                 ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="font-heading font-black text-2xl uppercase mb-3 tracking-tighter text-black dark:text-white">Interests</h3>
              <div className="grid grid-cols-1 gap-2.5">
                <a href="/photography" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-[#A7E614] border-2 border-black rounded-xl hover:-translate-y-1 transition-all shadow-[4px_4px_0px_black]">
                  <span className="font-black text-xs uppercase flex items-center gap-3 text-black"><Camera size={18}/> Photography</span>
                  <ExternalLink size={16} className="text-black/50"/>
                </a>
                <a href="/music" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-[#9AB4E6] border-2 border-black rounded-xl hover:-translate-y-1 transition-all shadow-[4px_4px_0px_black]">
                  <span className="font-black text-xs uppercase flex items-center gap-3 text-black"><Music size={18}/> Music</span>
                  <ExternalLink size={16} className="text-black/50"/>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACCORDION EXPERIENCES */}
          <div className="lg:col-span-7 bg-[#FFCE13] dark:bg-[#DB007D] border-2 border-black rounded-2xl shadow-[6px_6px_0px_black] overflow-hidden flex flex-col">
            <div className="p-6 border-b-2 border-black bg-[#FFCE13] dark:bg-[#DB007D]">
               <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-black">Experience</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-6 custom-scrollbar bg-white/20">
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