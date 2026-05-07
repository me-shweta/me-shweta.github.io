import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const AestheticBlog = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-12 px-6 lg:px-20 font-sans selection:bg-[#DB007D]">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/#blog" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity mb-12 group">
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs opacity-40 mb-6 font-medium">
          <span>Jan 25, 2026</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>10 min read</span>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 bg-[#1a1a1a]">
          <img src="/public/blog-cover/beauty.png" alt="Aesthetic Bias" className="w-full h-full object-cover" />
        </div>

        {/* Title Section */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Beauty Bias: Why we forgive pretty designs
        </h1>
        <p className="text-xl md:text-2xl opacity-50 mb-12 italic leading-relaxed">
          Looking at the Aesthetic-Usability Effect and why a good-looking interface feels easier to use.
        </p>

        {/* Article Body */}
        <div className="space-y-10 text-lg leading-relaxed text-white/90">
          <section className="space-y-6">
            <p>
              We’ve all been there. You download a new app that looks like a literal work of art—the gradients are smooth, the icons are custom-weighted, and the haptic feedback feels like a tiny massage for your thumb. 
            </p>
            <p>
              Then, reality sets in. You try to find the "Settings" menu and realize it’s buried under four layers of illogical navigation. Or maybe the search bar takes five seconds to load. Do you delete it? Probably not. You likely think, <span className="text-[#DB007D] font-semibold">"I’m sure I’ll get used to the layout,"</span> or <span className="text-[#DB007D] font-semibold">"It’s probably just my Wi-Fi."</span>
            </p>
            <p>
              This isn't just you being a "fanboy" or "fangirl" for a brand. It’s a documented psychological phenomenon called the <strong>Aesthetic-Usability Effect</strong>. It is the UI designer's greatest cheat code and their most dangerous distraction.
            </p>
          </section>

          <section className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-6">The 1995 ATM Study: Where It All Began</h2>
            <p className="mb-6">
              In a classic study by researchers Masaaki Kurosu and Kaori Kashimura, 252 participants were asked to rate 26 different ATM interface designs. They were rating them on two things: <strong>apparent usability</strong> (how easy it looked) and <strong>actual usability</strong> (how easy it was to complete a task).
            </p>
            <p className="mb-6">
              The results were baffling. There was a much stronger correlation between the users’ ratings of aesthetic appeal and apparent usability than between aesthetic appeal and actual usability. 
            </p>
            <div className="p-6 bg-black/40 rounded-xl italic border-l-2 border-[#DB007D]">
              "Users are strongly influenced by the aesthetics of any given interface, even when they try to evaluate the system purely on its functional merits."
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">The Dopamine "Halo"</h2>
            <p>
              Why does this happen? It comes down to biology. When we see something beautiful, our brain's reward center releases a small hit of dopamine. This triggers a positive emotional response, which in turn makes us more creative and better at problem-solving.
            </p>
            <p>
              When a user is in a positive state of mind, they are physically and mentally more capable of handling minor friction. A confusing button label becomes a "fun puzzle" rather than an "annoying obstacle." This is the <strong>Halo Effect</strong>: one positive trait (beauty) spills over and colors our perception of every other trait (speed, reliability, ease of use).
            </p>
          </section>

          <section className="space-y-6 border-y border-white/10 py-12">
            <h2 className="text-3xl font-bold">The Danger: "Beautiful Garbage"</h2>
            <p>
              For designers, this effect is a double-edged sword. It creates a <strong>forgiveness window</strong>. This window is essential during the early stages of a product when bugs are common and UX isn't fully optimized. 
            </p>
            <p>
              However, it can also mask deep-rooted usability issues. If your product is stunning, users might not report the flaws they encounter—they just subconsciously work around them. This can lead to a product that looks great in a portfolio but fails in the long-term because the "beauty high" eventually wears off, leaving only the frustration of a broken system.
            </p>
            <h4 className="text-[#DB007D] uppercase tracking-widest font-black text-sm">Key Takeaway for Devs & Designers:</h4>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium">Beauty attracts, but usability retains.</li>
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium">Never use "pretty" to hide a broken feature.</li>
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium">User testing is the only way to break the bias.</li>
              <li className="bg-[#1a1a1a] p-4 rounded-lg text-sm font-medium">Aesthetics are your first impression; UX is your reputation.</li>
            </ul>
          </section>

          <section className="space-y-6 pb-20">
            <h2 className="text-3xl font-bold">Conclusion: The Foundation of Trust</h2>
            <p>
              In the digital world, beauty isn't just skin deep; it's the foundation of trust. If your UI looks like a relic from 2004, users will be hyper-critical. Even if your backend is the most efficient piece of software ever written, a "clunky" look will make them perceive the entire experience as slow and unreliable. 
            </p>
            <p>
              Use the Aesthetic-Usability Effect to your advantage. Invest in the "wow" factor to earn your user's patience—but use that patience to build a product that actually works. 
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AestheticBlog;