import { motion } from 'framer-motion';
import { Monitor, Smartphone, Lightbulb, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={24} />,
      title: "Web Dev",
      description: "Full-stack apps with React & Node.js."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Apps",
      description: "Cross-platform solutions."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Strategy",
      description: "Product lifecycle management."
    },
    {
      icon: <Zap size={24} />,
      title: "Digital",
      description: "Transformation & efficiency."
    }
  ];

  return (
    <section className="h-full p-6 flex flex-col justify-center bg-white">
      <h2 className="text-xl font-bold text-black mb-6">What I Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="p-4 rounded-2xl glass-card hover:shadow-lg transition-all group"
          >
            <div className="mb-3 text-black group-hover:scale-110 transition-transform origin-left">
              {service.icon}
            </div>
            <h3 className="text-base font-bold text-black mb-1 group-hover:text-gray-700 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services