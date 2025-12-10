import { motion } from 'framer-motion';
import { Check, Database, Server, Code2, Layers } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Server size={16} />, name: "Spring Boot", desc: "REST APIs, Microservices, Security" },
    { icon: <Code2 size={16} />, name: "React", desc: "Components, Hooks, State Management" },
    { icon: <Database size={16} />, name: "Databases", desc: "MySQL, PostgreSQL, MongoDB" },
    { icon: <Layers size={16} />, name: "DevOps", desc: "Docker, Git, CI/CD Pipelines" },
  ];

  return (
    <section className="h-full p-6 flex flex-col bg-white overflow-auto">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2 text-black">
          About Me
        </h2>
        <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">Full Stack Java Developer</p>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          I'm a passionate software engineer with expertise in building enterprise-grade applications using
          <strong className="text-black"> Java</strong> and <strong className="text-black">Spring Boot</strong> for robust backend systems,
          combined with <strong className="text-black">React</strong> for creating intuitive, responsive frontends.
          I focus on writing clean, maintainable code and delivering scalable solutions.
        </p>

        <h3 className="text-sm font-bold text-black mb-3">Core Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl glass-card">
              <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-gray-700">
                {skill.icon}
              </div>
              <div>
                <span className="text-sm font-bold text-black block">{skill.name}</span>
                <span className="text-[11px] text-gray-500">{skill.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-6 glass-card p-4 rounded-xl flex items-center justify-between"
        >
          <div>
            <div className="text-black text-2xl font-bold">100%</div>
            <div className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Client Satisfaction</div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <Check key={i} size={16} className="text-green-500" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About