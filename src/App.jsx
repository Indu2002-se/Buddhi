import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import Widget from './components/Widget.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex bg-gray-100 min-h-screen text-black selection:bg-black selection:text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden md:ml-64 relative z-10">
        <TopBar />

        {/* Scrollable Dashboard Grid */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-20 max-w-7xl mx-auto">

            {/* Hero / Welcome Widget - Full Width Profile Header */}
            <Widget title="" size="full" className="bg-white min-h-[350px]">
              <div id="home" className="h-full">
                <Hero isWidget={true} />
              </div>
            </Widget>

            {/* Portfolio / Recent Work - Wide Widget */}
            <Widget title="Recent Projects" size="full" className="bg-white min-h-[500px]">
              <div id="portfolio" className="h-full p-2">
                <Portfolio isWidget={true} />
              </div>
            </Widget>

            {/* Services - 2x1 */}
            <Widget title="Services" size="medium" className="bg-white min-h-[400px]">
              <div id="services" className="h-full">
                <Services isWidget={true} />
              </div>
            </Widget>

            {/* About Detail - 2x1 */}
            <Widget title="About Me" size="medium" className="bg-white min-h-[400px]">
              <div id="about" className="h-full">
                <About isWidget={true} />
              </div>
            </Widget>

            {/* Contact - Full width footer style widget */}
            <Widget title="Get In Touch" size="full" className="bg-white">
              <div id="contact" className="h-full">
                <Contact isWidget={true} />
              </div>
            </Widget>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
