import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const WhitespaceBlog = () => {
  return (
    <div className="min-h-screen bg-[#0f0f12] text-white py-12 px-6 lg:px-20 font-sans selection:bg-[#E0E7FF] selection:text-black">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/#blog" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity mb-12 group">
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs opacity-40 mb-6 font-medium">
          <span>Jan 01, 2026</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>10 min read</span>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 bg-[#1a1a1e]">
          <img src="../blog-cover/power.png" alt="Negative Space in Design" className="w-full h-full object-cover opacity-90" />
        </div>

        {/* Title Section */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          The power of nothing: Why white space matters
        </h1>
        <p className="text-xl md:text-2xl opacity-50 mb-12 italic leading-relaxed">
          Using empty space as a deliberate tool to create focus, clarity, and a sense of calm.
        </p>

        {/* Article Body */}
        <div className="space-y-10 text-lg leading-relaxed text-white/90">
          <section className="space-y-6">
            <p>
              In design, we often feel the urge to fill every pixel. We treat empty space like a "waste" of real estate, cramming in one more feature, one more banner, or one more line of text. But in reality, the "nothing" is often more important than the "something."
            </p>
            <p>
              <strong>Whitespace</strong> (or negative space) is the area between design elements. It isn't just "empty"; it's a structural necessity. It is the breathing room that allows the user’s eyes to rest and their brain to process what they’re seeing.
            </p>
          </section>

          <section className="bg-[#1a1a1e] p-8 md:p-12 rounded-[2rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-6 text-[#E0E7FF]">The Luxury of Space</h2>
            <p className="mb-6">
              There is a psychological reason why high-end brands like Apple or Rolex use vast amounts of whitespace. Space signals <strong>premium quality</strong>. 
            </p>
            <p className="mb-6">
              When you see a crowded interface, your brain associates it with "bargain" or "clutter." When you see a design that is brave enough to leave half the screen empty, it communicates confidence and clarity. It tells the user: "We know exactly what is important, and we don't need to shout to get your attention."
            </p>
            <div className="p-6 bg-black/40 rounded-xl italic border-l-2 border-[#E0E7FF]">
              "Whitespace is like air: it’s invisible, but you notice immediately when it’s gone."
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Micro vs. Macro Whitespace</h2>
            <p>
              To master this "power of nothing," we have to look at the two distinct scales of negative space:
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="p-6 rounded-2xl bg-[#141417] border border-white/5">
                <h3 className="font-bold text-[#E0E7FF] mb-3">Macro Whitespace</h3>
                <p className="text-sm opacity-70">The large spaces between major layout elements (like headers and footers). It acts as a container that defines the overall structure and flow of the page.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#141417] border border-white/5">
                <h3 className="font-bold text-[#E0E7FF] mb-3">Micro Whitespace</h3>
                <p className="text-sm opacity-70">The tiny gaps between lines of text, letters, or menu items. This is what determines your content’s readability and fine-tuned elegance.</p>
              </div>
            </div>
          </section>

          <section className="space-y-8 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-bold">Three Reasons to Embrace the Void</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-[#E0E7FF] font-bold text-xl mb-2">1. Increased Comprehension</h3>
                <p className="opacity-80">
                  Research shows that proper use of whitespace between paragraphs and in left/right margins can increase content comprehension by up to <strong>20%</strong>. It prevents the "Wall of Text" effect that causes users to bounce.
                </p>
              </div>

              <div className="group">
                <h3 className="text-[#E0E7FF] font-bold text-xl mb-2">2. Higher Content Priority</h3>
                <p className="opacity-80">
                  The more whitespace you place around an element, the more importance it gains. If you want a Call to Action (CTA) to be unmissable, don't make it bigger—make the space around it larger.
                </p>
              </div>

              <div className="group">
                <h3 className="text-[#E0E7FF] font-bold text-xl mb-2">3. Reduced Decision Fatigue</h3>
                <p className="opacity-80">
                  By grouping related items and separating them from others using space, you are applying the Law of Proximity. This helps the brain categorize information instantly, making the UI feel "intuitive."
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 border-b border-white/10 pb-12">
            <h2 className="text-3xl font-bold">The Designer's Challenge</h2>
            <p>
              The hardest part of implementing whitespace is often convincing stakeholders. To the untrained eye, whitespace looks like "missed opportunity." 
            </p>
            <p>
              Your job is to explain that whitespace isn't "empty"—it's an active component of the design. It's the difference between a loud, crowded market and a calm, focused gallery. One is for browsing; the other is for <strong>experiencing</strong>.
            </p>
          </section>

          <section className="space-y-6 pb-20">
            <h2 className="text-3xl font-bold">Conclusion: Less is Actually More</h2>
            <p>
              Whitespace is the ultimate design paradox. By adding "nothing," you add value. You add focus. You add class. 
            </p>
            <p>
              Next time you feel the urge to tighten up a layout or fill a gap, try doing the opposite. Add 10px more padding. Double your line height. Let your content breathe. You’ll find that your users stay longer, understand more, and feel better while doing it.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhitespaceBlog;