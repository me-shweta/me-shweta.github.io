import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const HicksLawBlog = () => {
  return (
    <div className="min-h-screen bg-[#080b10] text-white py-12 px-6 lg:px-20 font-sans selection:bg-[#00E5FF]">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/#blog" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity mb-12 group">
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs opacity-40 mb-6 font-medium">
          <span>May 05, 2026</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>10 min read</span>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 bg-[#121820]">
          <img src="/public/blog-cover/hick.png" alt="Hick's Law and Decision Fatigue" className="w-full h-full object-cover" />
        </div>

        {/* Title Section */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Hick’s Law: The hidden cost of too many choices
        </h1>
        <p className="text-xl md:text-2xl opacity-50 mb-12 italic leading-relaxed">
          Explaining why having more options usually results in users doing absolutely nothing.
        </p>

        {/* Article Body */}
        <div className="space-y-10 text-lg leading-relaxed text-white/90">
          <section className="space-y-6">
            <p>
              We’ve all heard the phrase "the more, the merrier." But in the world of User Experience, the more options you give a user, the more likely they are to experience <strong>analysis paralysis</strong> and walk away without choosing anything at all.
            </p>
            <p>
              This isn't just an observation; it’s a mathematical certainty. Named after British and American psychologists William Edmund Hick and Ray Hyman, <strong>Hick’s Law</strong> states that the time it takes for a person to make a decision increases logarithmically with the number and complexity of choices available.
            </p>
          </section>

          <section className="bg-[#121820] p-8 md:p-12 rounded-[2rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-6">The Math of Hesitation</h2>
            <p className="mb-6">
              The formula for Hick's Law is often expressed as: 
              <span className="block my-4 text-center text-[#00E5FF] font-mono text-2xl">RT = a + b log2 (n)</span>
              Where <strong>RT</strong> is the reaction time, <strong>n</strong> is the number of stimuli, and <strong>a</strong> and <strong>b</strong> are constants based on the task.
            </p>
            <p className="mb-6">
              In plain English: every additional menu item, every extra button in your header, and every "recommended product" on your checkout page adds a tax to the user’s cognitive processing time. Eventually, that tax becomes too high to pay.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">The Paradox of Choice</h2>
            <p>
              Why do we fall into the trap of over-designing? Usually, it’s because we want to be helpful. We think, "If the user can do everything from the home screen, they’ll be more powerful." 
            </p>
            <p>
              But psychology tells a different story. In a famous study, researchers set up a jam tasting booth. One day they offered 24 flavors; another day, only 6. While the 24-flavor booth attracted more lookers, the 6-flavor booth resulted in <strong>10x more actual purchases</strong>. 
            </p>
            <p>
              Choice is exhausting. When faced with a sea of options, the brain's "Executive Function" has to evaluate each one, compare it to the others, and predict the outcome. This leads to <strong>Decision Fatigue</strong>.
            </p>
          </section>

          <section className="space-y-8 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-bold">Strategies for Radical Simplicity</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-[#00E5FF] font-bold text-xl mb-2">1. Progressive Disclosure</h3>
                <p className="opacity-80">
                  Don't show the user everything at once. Show them only what they need for the current step. Think of the "Advanced Settings" toggle—it keeps the primary interface clean for 90% of users, while still providing power to the 10%.
                </p>
              </div>

              <div className="group">
                <h3 className="text-[#00E5FF] font-bold text-xl mb-2">2. Categorization (Chunking)</h3>
                <p className="opacity-80">
                  If you must offer many choices (like a large navigation menu), group them. It is much easier for the brain to choose between 3 categories that each contain 5 items than to choose from a single list of 15 items.
                </p>
              </div>

              <div className="group">
                <h3 className="text-[#00E5FF] font-bold text-xl mb-2">3. Recommended Paths</h3>
                <p className="opacity-80">
                  Highlight a "Best Value" or "Most Popular" option. By giving the user a starting point, you reduce the effort required to begin the decision-making process.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 border-b border-white/10 pb-12">
            <h2 className="text-3xl font-bold">When to "Break" Hick’s Law</h2>
            <p>
              Is more choice always bad? Not necessarily. If a user is an expert (think of a pilot in a cockpit or a video editor using Premiere Pro), they often prefer having all tools visible. In these "expert interfaces," the time saved by not having to click through menus outweighs the cognitive load of a complex UI. 
            </p>
            <p>
              But for the average consumer app? <strong>Less is almost always more.</strong>
            </p>
          </section>

          <section className="space-y-6 pb-20">
            <h2 className="text-3xl font-bold">Final Thoughts</h2>
            <p>
              The most difficult part of design isn't adding features; it’s deciding what to take away. Every time you remove an unnecessary link or combine two buttons into one, you are making your user’s life easier.
            </p>
            <p>
              Hick’s Law reminds us that our job as designers is to be a filter, not a firehose. Respect your user’s time, protect their focus, and remember: <strong>Simplicity is the ultimate sophistication.</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HicksLawBlog;