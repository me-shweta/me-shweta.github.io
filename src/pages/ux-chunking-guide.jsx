import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ChunkingBlog = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-12 px-6 lg:px-20 font-sans selection:bg-[#A7E614]">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/#blog" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity mb-12 group">
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs opacity-40 mb-6 font-medium">
          <span>April 28, 2026</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>7 min read</span>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 bg-[#1a1a1a]">
          <img src="/public/blog-cover/chunking.png" alt="Chunking in UI Design" className="w-full h-full object-cover" />
        </div>

        {/* Title Section */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Chunking: How to not overwhelm your users
        </h1>
        <p className="text-xl md:text-2xl opacity-50 mb-12 italic leading-relaxed">
          Why breaking down information is the kindest thing you can do for someone's working memory.
        </p>

        {/* Content Body */}
        <div className="space-y-10 text-lg leading-relaxed text-white/90">
          <section className="space-y-6">
            <p>
              Imagine I gave you a phone number to memorize: <span className="text-[#A7E614] font-mono">8015550199</span>. 
            </p>
            <p>
              It’s a bit of a scramble, right? But what if I wrote it as <span className="text-[#A7E614] font-mono">(801) 555-0199</span>? Suddenly, your brain stops seeing ten individual digits and starts seeing three distinct "chunks." This is the magic of chunking, and it is the only reason we can navigate complex interfaces without our brains short-circuiting.
            </p>
          </section>

          <section className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-6">Miller’s Law: The Magic Number 7</h2>
            <p className="mb-6">
              In 1956, cognitive psychologist George Miller argued that the average human working memory can only hold about <strong>7 (plus or minus 2)</strong> items at a time. 
            </p>
            <p className="mb-6">
              In modern UX, we don't take the number "7" literally—some people can handle more, some less—but the principle remains: <strong>Working memory is a limited resource.</strong> When you present a user with a wall of data, a 20-field form, or a menu with 15 options, you aren't being "thorough." You are creating cognitive overload.
            </p>
            <div className="p-6 bg-black/40 rounded-xl italic border-l-2 border-[#A7E614]">
              "Chunking isn't about making information disappear; it's about making it digestible."
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">The Science of Cognitive Load</h2>
            <p>
              Every element on your screen—every icon, every line of text, every bright color—competes for the user's attention. Chunking works by grouping related elements so they are processed as a single unit. 
            </p>
            <p>
              By reducing the number of "units" the brain has to track, you lower the <strong>intrinsic cognitive load</strong>. This leaves the user with more mental energy to actually complete their task, whether that's checking out of an e-commerce store or analyzing a data dashboard.
            </p>
          </section>

          {/* Practical Application Section */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-bold">Chunking in the Wild</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-[#A7E614] font-bold text-xl mb-2">1. Multi-Step Forms</h3>
                <p className="opacity-80">
                  Instead of one long scroll of input fields, break the process into "Personal Info," "Shipping," and "Payment." Users feel a sense of progress rather than a sense of dread.
                </p>
              </div>

              <div className="group">
                <h3 className="text-[#A7E614] font-bold text-xl mb-2">2. Visual Grouping with White Space</h3>
                <p className="opacity-80">
                  White space is a "silent chunker." By putting extra space between different sections of a landing page, you are telling the brain: "That group of information ended; a new one is beginning."
                </p>
              </div>

              <div className="group">
                <h3 className="text-[#A7E614] font-bold text-xl mb-2">3. Progressive Disclosure</h3>
                <p className="opacity-80">
                  Accordions and "Show More" buttons are the ultimate chunking tools. They keep the interface clean by default and only show complex details when the user specifically asks for them.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 border-b border-white/10 pb-12">
            <h2 className="text-3xl font-bold">How to Audit Your UI for Chunking</h2>
            <p>
              If you’re worried your interface is too "loud," try the <strong>Squint Test</strong>. Squint your eyes until the text becomes blurry. Do you see clear, distinct blocks of content, or does everything blend into one giant grey soup?
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium border-l-2 border-[#A7E614]">Group related fields in forms.</li>
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium border-l-2 border-[#A7E614]">Use clear, bold headings for every section.</li>
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium border-l-2 border-[#A7E614]">Limit navigation menus to 5-7 top-level items.</li>
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium border-l-2 border-[#A7E614]">Use cards to encapsulate related content.</li>
            </ul>
          </section>

          <section className="space-y-6 pb-20">
            <h2 className="text-3xl font-bold">Conclusion: Be Kind to the Brain</h2>
            <p>
              At the end of the day, UX design is an exercise in empathy. When you use chunking, you are acknowledging that your user is a human with a busy life and a finite amount of focus. 
            </p>
            <p>
              Don't make them work for the information. Organize it, group it, and serve it in bite-sized pieces. Their working memory will thank you—usually by staying on your site longer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChunkingBlog;