import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const StoryDownloaderBlog = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-12 px-6 lg:px-20 font-sans selection:bg-[#A7E614]">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/#blog" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity mb-12 group">
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs opacity-40 mb-6 font-medium">
          <span>May 07, 2026</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>8 min read</span>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Stories Saver: Turning a "Sketchy" Utility into a Premium Experience
          </h1>
          <p className="text-xl md:text-2xl opacity-60 mb-12 italic leading-relaxed">
            How thoughtful UI/UX can transform a distrusted utility market into a seamless digital vault.
          </p>
        </motion.div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 bg-[#1a1a1a] border border-white/5">
          <img src="/public/blog-cover/story-saver-hero.png" alt="Stories Saver UI Design" className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <div className="space-y-16 text-lg leading-relaxed text-white/80">
          
          {/* Section 1: The Pipeline */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">The Design Pipeline: A UCD Approach</h2>
            <p>
              The development of this platform followed a rigorous User-Centered Design (UCD) approach, integrated within an Agile SDLC. Rather than a linear path, the process was iterative, allowing for continuous refinement.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                { phase: "Phase 1", title: "Research & Discovery", desc: "Analyzing fragmented digital landscapes and observing 'app-hopping' behaviors." },
                { phase: "Phase 2", title: "User Empathy", desc: "Constructing detailed Empathy Maps to visualize the 'Think, Feel, Say, Do' journey." },
                { phase: "Phase 3", title: "Sprint Methodology", desc: "Structured workflow from core foundations to refined micro-interactions." },
                { phase: "Phase 4", title: "Iterative Prototyping", desc: "Transitioning from lo-fi wireframes to high-fidelity 'Cognitive Walkthroughs'." }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-[#141414] rounded-2xl border border-white/5">
                  <span className="text-[#A7E614] text-xs font-bold uppercase tracking-widest">{item.phase}</span>
                  <h4 className="text-white font-bold mt-1 mb-2">{item.title}</h4>
                  <p className="text-sm opacity-60">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Priya Persona */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Designing for "Priya" (The Memory Keeper)</h2>
            <p>
              To avoid the trap of "designing for everyone," I focused on Priya—a young professional frustrated by the 24-hour expiration of content. Her core conflict? The social friction of asking friends to manually send media.
            </p>
            
            <div className="relative rounded-3xl overflow-hidden my-10 border border-white/10">
              <img src="/public/blog-content/empathy-map.png" alt="Priya Empathy Map" className="w-full" />
              <p className="text-xs text-center py-4 opacity-40 bg-black/20 italic text-white/60 font-medium">
                Figure 1: Empathy Map derived from competitive analysis to address core frustrations.
              </p>
            </div>

            <blockquote className="p-8 bg-[#1a1a1a] rounded-2xl border-l-4 border-[#A7E614] italic text-xl text-white/90">
              "The goal was to solve a real emotional hurdle—**Social Friction**—not just add feature creep."
            </blockquote>
          </section>

          {/* Section 3: UX Logic */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Mapping Empathy to UI Logic</h2>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="text-[#A7E614] font-bold text-xl mb-3">01. Clearer Permissions</h3>
                  <p>Explaining **why** we need access before the system pop-up appears. This transparency builds trust where competitors offer none.</p>
                </div>
                <div className="w-full md:w-1/3 order-1 md:order-2 rounded-2xl overflow-hidden border border-white/5">
                  <img src="/public/blog-content/permission-ui.png" alt="Permission UX Flow" className="w-full" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 rounded-2xl overflow-hidden border border-white/5">
                  <img src="/public/blog-content/navigation-ui.png" alt="Navigation Hierarchy" className="w-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#A7E614] font-bold text-xl mb-3">02. The Thumb Zone Hierarchy</h3>
                  <p>Using a standard four-tab bottom navigation (**WhatsApp, Instagram, Downloads, Settings**). This keeps primary actions within reach for efficient one-handed use.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Design System */}
          <section className="space-y-6 bg-[#141414] p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-4">The System Behind the Aesthetics</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-[#A7E614] font-bold mb-4 uppercase tracking-tighter italic underline">Semantic Color</h4>
                <ul className="space-y-4 text-sm opacity-70">
                  <li className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-green-500"></span> **Success Green**: Confirms a save</li>
                  <li className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-amber-500"></span> **Warning Amber**: Signals low storage</li>
                  <li className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-[#A7E614]"></span> **Brand Lime**: Primary interactions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#A7E614] font-bold mb-4 uppercase tracking-tighter italic underline">Typography</h4>
                <p className="text-sm opacity-70 leading-relaxed">
                  Minimum **14sp body text** and action-first verbs (**Save, Share, Allow**) were strictly enforced to ensure high-speed usability and reduce cognitive load.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="space-y-6 pb-20 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-bold text-white">Conclusion: Beyond the Download</h2>
            <p>
              A product is never truly finished. The roadmap for **Stories Saver** includes AI-powered categorization and batch cleanup suggestions to help users manage their device longevity.
            </p>
            <p className="text-xl text-white font-medium">
              It isn't just a downloader; it's an exercise in how **empathy** can turn a "sketchy" utility into a trusted daily companion.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StoryDownloaderBlog;