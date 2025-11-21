const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-white animate-slide-in-left">
            <h2 className="text-4xl font-light mb-8 tracking-wider">
              I TELL THE <span className="font-bold">STORY OF THE TIME.</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A professional software engineer, full-stack developer, and digital architect. 
              I would love to share my experience with you. With years of experience in 
              creating digital solutions, I bring stories to life through code and design.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Every project is a new story waiting to be told. I specialize in creating 
              meaningful digital experiences that connect with users and drive business success. 
              From concept to deployment, I ensure every detail serves the greater narrative.
            </p>

            <button className="btn-outline">
              VIEW SERVICES →
            </button>
          </div>

          {/* Right side - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="/aboutme.png" 
                alt="About Buddhi - Professional Journey" 
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About