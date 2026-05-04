import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    /* 
       Updated with dark:bg-[#1a0b21] to match the deep plum aesthetic 
       and transition-colors for a smooth shift between themes.
    */
    <div className="bg-[#E6E0F8] dark:bg-[#1a0b21] min-h-screen transition-colors duration-500"> 
      <Header />
      <main>
        {/* Each section should now internally use 'dark:' classes for their cards/text */}
        <Hero />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home