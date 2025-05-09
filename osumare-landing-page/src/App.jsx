import { useState, useEffect } from 'react'
import './App.css'

// Component imports
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-gray-100 text-secondary">
        <h2 className="text-2xl font-semibold">Loading Osumare...</h2>
      </div>
    )
  }

  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
