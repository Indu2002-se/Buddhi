const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/e-commerce-web-site-music-shop.png",
      title: "E-Commerce Music Shop",
      category: "Web Development",
      description: "Modern e-commerce website for music instruments and accessories with advanced shopping features"
    },
    {
      image: "/event-management-system.png", 
      title: "Event Management System",
      category: "Web Application",
      description: "Comprehensive event planning and management platform with booking and scheduling capabilities"
    },
    {
      image: "/Inventroy-management-system-bag-shop.png",
      title: "Inventory Management System",
      category: "Business Application",
      description: "Advanced inventory tracking system for bag shop with real-time stock management"
    },
    {
      image: "/mobile-app-cycle-renatl-shop.png",
      title: "Cycle Rental Mobile App",
      category: "Mobile Development", 
      description: "User-friendly mobile application for bicycle rental services with GPS tracking"
    },
    {
      image: "/port-scanner-systempng.png",
      title: "Port Scanner System",
      category: "Security Tool",
      description: "Network security tool for port scanning and vulnerability assessment"
    },
    {
      image: "/pro.jpg",
      title: "Professional Portfolio",
      category: "Web Design",
      description: "Personal portfolio website showcasing professional work and achievements"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-white">PORTFOLIO</h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid mb-16">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-lg animate-fade-in-delay-${(index % 4) + 1}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{item.category}</p>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <button className="btn-outline text-xs">
                    VIEW PROJECT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn-outline px-12 py-4">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio