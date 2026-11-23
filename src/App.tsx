import { Routes, Route, useLocation  } from 'react-router-dom'
import { useEffect } from 'react'
import GoogleTranslate from './components/layout/GoogleTranslate'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HappyCustomers from './pages/HappyCustomers'
import Contact from './pages/Contact'
import Destinations from './pages/Destination'
import TripDetail from './pages/TripDetail'
import NotFound from './pages/Notfound'
 

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // wait for the page to render, then scroll to the #section
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <GoogleTranslate />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/happy-customers" element={<HappyCustomers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/trips/:slug" element={<TripDetail />} />
          {/* <Route path="/trips/dubai" element={<TripDetail />} /> */}

           {/* ...other routes... */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
} 