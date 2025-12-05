import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center space-x-8">


            {/* Logo */}
            <div className="text-white text-xl font-bold tracking-wider">
              BIW
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}


          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-sm rounded-lg p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation