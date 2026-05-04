import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider' 
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PortfolioDetails from './pages/PortfolioDetails'
import ServiceDetails from './pages/ServiceDetails'
import Photography from './pages/Photography'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-[#1a0b21]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/:id" element={<PortfolioDetails />} />
              <Route path="/service/:id" element={<ServiceDetails />} />
              
              {/* New Routes for your Interests */}
              <Route path="/photography" element={<Photography />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App