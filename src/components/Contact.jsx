import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="h-full p-6 md:p-12 flex items-center bg-white">
      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Let's Work Together</h2>
          <p className="text-gray-500 mb-8 max-w-sm">I'm available for freelance work. Have a project in mind? Let's talk.</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700 hover:text-black transition-colors">
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
                <Mail size={18} />
              </div>
              <span>bwithanage327@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-black transition-colors">
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
                <Phone size={18} />
              </div>
              <span>+94 724917893</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card p-6 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black/30 transition-all text-sm"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black/30 transition-all text-sm"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black/30 transition-all resize-none text-sm"
              placeholder="Project Details..."
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact