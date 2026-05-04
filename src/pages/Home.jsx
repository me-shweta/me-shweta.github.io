import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="bg-[#E6E0F8] dark:bg-[#1a0b21] min-h-screen transition-colors duration-500"> 
      <main>
        {/* Each section should now internally use 'dark:' classes for their cards/text */}
        <Hero />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default Home