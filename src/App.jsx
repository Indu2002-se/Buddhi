import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Blogs from './components/Blogs.jsx'
import Contact from './components/Contact.jsx'
import BlogsPage from './pages/BlogsPage.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <>
            <Navigation />
            <main>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Blogs />
              <Contact />
            </main>
          </>
        } />

        {/* Blogs Page Route */}
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </div>
  )
}

export default App
