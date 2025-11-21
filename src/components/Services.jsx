const Services = () => {
  const services = [
    {
      icon: "💍",
      title: "WEB DEVELOPMENT",
      description: "Full-stack web applications with modern technologies. Clean, responsive designs that deliver exceptional user experiences.",
      link: "VIEW SERVICE →"
    },
    {
      icon: "📱",
      title: "MOBILE DEVELOPMENT", 
      description: "Native and cross-platform mobile applications. Seamless user experiences across all devices and platforms.",
      link: "VIEW SERVICE →"
    },
    {
      icon: "🎯",
      title: "PRODUCT STRATEGY",
      description: "Strategic planning and product development. From concept to launch, ensuring your vision becomes reality.",
      link: "VIEW SERVICE →"
    },
    {
      icon: "🎬",
      title: "DIGITAL SOLUTIONS",
      description: "Custom software solutions and digital transformation. Innovative approaches to complex business challenges.",
      link: "VIEW SERVICE →"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card p-8 rounded-lg animate-fade-in-delay-${index + 1}`}
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wider">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors">
                {service.link}
              </button>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <button className="btn-outline px-12 py-4">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services