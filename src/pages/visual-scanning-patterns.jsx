import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const PatternsBlog = () => {
  return (
    <div className="min-h-screen bg-[#1a0b21] text-white py-12 px-6 lg:px-20 font-sans selection:bg-[#A7E614]">
      <div className="max-w-4xl mx-auto">
        <Link to="/#blog" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-12 group">
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>

        <div className="flex items-center gap-4 text-xs opacity-50 mb-6">
          <span>April 01, 2026</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>10 min read</span>
        </div>

        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-[#161b22]">
          <img src="../blog-cover/patterns.png" alt="Visual Hierarchy" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          F & Z-Patterns: Guiding the eye naturally
        </h1>
        <p className="text-xl md:text-2xl opacity-60 mb-12 italic">
          How people actually read screens and how you can use that to put your best content first.
        </p>

        <div className="space-y-12 text-lg leading-relaxed text-white/90">
          <section className="space-y-6">
            <p>
              Let’s be brutally honest for a second: you aren’t "reading" this blog post in the traditional sense. You didn't start at the first word of the first sentence and move linearly toward the end like you would with a Steinbeck novel. You scanned the headers. You checked out the bold text. You looked at the structure to see if the "juice" was worth the squeeze.
            </p>
            <p>
              In the digital age, attention is the most expensive currency. We don't consume content; we forage for it. We act like digital hunter-gatherers, scanning our screens for bits of high-value information while ignoring the "noise." To design experiences that actually work, we have to stop fighting this behavior and start designing for it.
            </p>
          </section>

          {/* Deep Dive into F-Pattern */}
          <section className="space-y-6 border-l-2 border-[#A7E614] pl-8 py-4">
            <h2 className="text-3xl font-bold">The F-Pattern: The Information Sieve</h2>
            <p>
              The F-Pattern is the "default" scanning behavior for text-heavy environments—think blogs, news sites, and search engine results. Identified by the Nielsen Norman Group through extensive eye-tracking research, this pattern explains why the first few paragraphs of your page are the most critical real estate you own.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-[#161b22] p-6 rounded-xl">
                <h3 className="text-[#A7E614] font-bold mb-2">1. The Top Horizontal Bar</h3>
                <p className="text-sm opacity-80">Users start by scanning the top of the content area. This is where they decide if the page matches their intent. If your headline is vague, they bounce here.</p>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl">
                <h3 className="text-[#A7E614] font-bold mb-2">2. The Secondary Scan</h3>
                <p className="text-sm opacity-80">As they move down, they scan horizontally again, but usually cover less ground than the first scan. They are looking for subheaders or keywords that stand out.</p>
              </div>
            </div>

            <p>
              The danger of the F-Pattern is the "Vertical Plummet." After the first two horizontal movements, the user’s eyes tend to drop straight down the left side of the page. If your most important "Buy Now" button or key takeaway is on the far right of the third paragraph, it might as well be invisible.
            </p>
            <h4 className="font-bold text-xl uppercase tracking-wider text-[#A7E614]">How to optimize for F-Patterns:</h4>
            <ul className="list-disc list-inside space-y-2 opacity-80">
              <li>Place the most important information in the first two paragraphs.</li>
              <li>Use "front-loaded" subheadings (the most descriptive words should be at the start).</li>
              <li>Break up walls of text with bullet points and bold keywords.</li>
              <li>Avoid "filler" imagery that doesn't add context; scanners will skip it and potentially skip the text around it too.</li>
            </ul>
          </section>

          {/* Deep Dive into Z-Pattern */}
          <section className="space-y-6 border-l-2 border-[#A7E614] pl-8 py-4">
            <h2 className="text-3xl font-bold">The Z-Pattern: The Minimalist’s Roadmap</h2>
            <p>
              While the F-Pattern handles data-heavy pages, the Z-Pattern is the king of the Landing Page. When a page is visual and minimalist—think a SaaS homepage or a login screen—the eye follows a path that mimics the letter Z.
            </p>
            
            <div className="space-y-4 opacity-80">
              <p><strong>The Horizon:</strong> The scan starts at the top-left (usually your branding) and moves to the top-right (usually your primary CTA or Login button).</p>
              <p><strong>The Slash:</strong> The eye then cuts diagonally back down to the bottom-left. This is the "path of travel" where you should place your visual hero or supportive text.</p>
              <p><strong>The Finish Line:</strong> Finally, the eye moves across to the bottom-right, where the "closing" CTA should live.</p>
            </div>

            <p>
              The Z-Pattern is about <strong>hierarchy and conversion</strong>. It’s a narrative flow. You introduce who you are (top-left), give them a shortcut (top-right), build desire with a visual (the slash), and then give them the final nudge to take action (bottom-right).
            </p>
          </section>

          {/* The Psychology of Scannability */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Why Does This Happen? (The Why Matters)</h2>
            <p>
              This isn't just about eyes moving on a screen; it's about <strong>cognitive load</strong>. Every word a user reads requires mental energy. Scanning is a "pre-attentive" process—our brains are filtering for relevance before we ever consciously decide to focus.
            </p>
            <p>
              If a user lands on a page and sees a "wall of text," their brain perceives a high "interaction cost." They think, "This is going to be a lot of work." By using F and Z patterns, you reduce that perceived effort. You make the information feel "free" and easy to digest. 
            </p>
            <blockquote className="border-l-4 border-[#A7E614] p-6 bg-[#161b22] italic">
              "Great design is often about getting out of the way. When you align your layout with the brain's natural GPS, the user feels like the site is intuitive. They aren't thinking about your design; they're just getting things done."
            </blockquote>
          </section>

          {/* Summary/Outro */}
          <section className="space-y-6 pb-20">
            <h2 className="text-3xl font-bold">The Verdict</h2>
            <p>
              Understanding these patterns allows you to stop "decorating" and start "choreographing." You aren't just making things look pretty; you are directing traffic. You are the conductor of the user's attention.
            </p>
            <p>
              Next time you're building a layout, ask yourself: <em>Where is the eye going to land first? And am I rewarding them for looking there?</em> If the answer is no, it's time to redraw your paths.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PatternsBlog;