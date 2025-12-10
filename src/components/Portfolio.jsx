import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/e-commerce-web-site-music-shop.png",
      title: "Music Shop",
      category: "Web Dev",
      githubLink: "https://github.com/Indu2002-se/E-Commerce-WebSite-music-shop-.git",
    },
    {
      image: "/event-management-system.png",
      title: "Event System",
      category: "Web App",
      githubLink: "https://github.com/Indu2002-se/EventManagement-SpringBoot.git",
    },
    {
      image: "/port-scanner-systempng.png",
      title: "Port Scanner",
      category: "Security",
      githubLink: "https://github.com/Indu2002-se/Scanner_portsentinal.git",
    },
    {
      image: "/chatbot.png",
      title: "AI Chatbot",
      category: "AI",
      githubLink: "https://github.com/Indu2002-se/Spring-Ai-Chatbot.git",
    }
  ]

  return (
    <section className="h-full p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Selected Works</h2>
        <a href="https://github.com/Indu2002-se" target="_blank" className="text-xs text-gray-600 hover:text-black hover:underline transition-colors">View All</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-[calc(100%-3rem)]">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-lg transition-all"
          >
            {/* Image Area */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <a href={item.githubLink} target="_blank" className="p-2 bg-white rounded-full text-black hover:bg-gray-100 transition-colors shadow-lg">
                  <Github size={16} />
                </a>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 bg-white">
              <span className="text-black text-[10px] font-bold tracking-widest uppercase mb-1 block">{item.category}</span>
              <h3 className="text-sm font-bold text-gray-700 truncate">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio