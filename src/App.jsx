import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider' 
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PortfolioDetails from './pages/PortfolioDetails'
import ServiceDetails from './pages/ServiceDetails'
import Photography from './pages/Photography'
import BlogList from './components/Blog'
import Contact from './components/Contact'

import AestheticBlog from './pages/aesthetic-usability-bias'
import PatternsBlog from './pages/visual-scanning-patterns'
import ChunkingBlog from './pages/ux-chunking-guide'
import HicksLawBlog from './pages/hicks-law-simplicity'
import WhitespaceBlog from './pages/power-of-whitespace'

function AppContent() {
  const location = useLocation();

  const isIndividualArticle = location.pathname.startsWith('/blog/');

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-[#1a0b21]">
      {!isIndividualArticle && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/aesthetic-usability-bias" element={<AestheticBlog />} />
          <Route path="/blog/visual-scanning-patterns" element={<PatternsBlog />} />
          <Route path="/blog/ux-chunking-guide" element={<ChunkingBlog />} />
          <Route path="/blog/hicks-law-simplicity" element={<HicksLawBlog />} />
          <Route path="/blog/power-of-whitespace" element={<WhitespaceBlog />} />
        </Routes>
      </main>

      {!isIndividualArticle && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop /> 
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App