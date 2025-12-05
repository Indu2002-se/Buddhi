const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/e-commerce-web-site-music-shop.png",
      title: "E-Commerce Music Shop",
      category: "Web Development",
      description: "Modern e-commerce website for music instruments and accessories with advanced shopping features",
      githubLink: "https://github.com/Indu2002-se/E-Commerce-WebSite-music-shop-.git",
      demoLink: "#" // Add demo link if available
    },
    {
      image: "/event-management-system.png",
      title: "Event Management System",
      category: "Web Application",
      description: "Comprehensive event planning and management platform with booking and scheduling capabilities",
      githubLink: "https://github.com/Indu2002-se/EventManagement-SpringBoot.git",
      demoLink: "#" // Add demo link if available
    },
    {
      image: "/port-scanner-systempng.png",
      title: "Port Scanner System",
      category: "Security Tool",
      description: "Network security tool for port scanning and vulnerability assessment",
      githubLink: "https://github.com/Indu2002-se/Scanner_portsentinal.git",
      demoLink: "#" // Add demo link if available
    },
    {
      image: "/chatbot.png",
      title: "Spring AI Chatbot",
      category: "AI",
      description: "Intelligent chatbot powered by Spring AI for natural language conversations",
      githubLink: "https://github.com/Indu2002-se/Spring-Ai-Chatbot.git",
      demoLink: "#" // Add demo link if available
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
              className={`relative overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-delay-${(index % 4) + 1}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content - Always Visible */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    View Project
                  </a>
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    View Demo
                  </a>
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