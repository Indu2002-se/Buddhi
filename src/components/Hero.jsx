import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, Eye } from "lucide-react";

const Hero = () => {
    return (
        <section className="h-full w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8 text-left bg-white">

            {/* Left: Profile & Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 flex-1">
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative shrink-0"
                >
                    <div
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden"
                        style={{
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        <img src="/profile2.jpeg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    {/* Status Dot */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg" title="Available"></div>
                </motion.div>

                {/* Text Info */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-1">
                            Buddhi Withanage
                        </h1>
                        <p className="text-lg text-gray-600 font-medium">
                            Full Stack Developer
                        </p>
                    </div>

                    <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed text-center md:text-left">
                        Specializing in <strong className="text-black">Java</strong>, <strong className="text-black">Spring Boot</strong>, and <strong className="text-black">React</strong>.
                        Building scalable backend systems and modern, responsive user interfaces.
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        <span className="px-3 py-1 text-xs font-bold bg-orange-100 text-orange-700 rounded-full">Java</span>
                        <span className="px-3 py-1 text-xs font-bold bg-green-100 text-green-700 rounded-full">Spring Boot</span>
                        <span className="px-3 py-1 text-xs font-bold bg-blue-100 text-blue-700 rounded-full">React</span>
                        <span className="px-3 py-1 text-xs font-bold bg-purple-100 text-purple-700 rounded-full">REST APIs</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-2">
                        <a href="https://github.com/Indu2002-se" target="_blank" className="p-2 rounded-full glass-card text-gray-600 hover:text-black hover:bg-black/5 transition-all">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full glass-card text-gray-600 hover:text-black hover:bg-black/5 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:bwithanage327@gmail.com" className="p-2 rounded-full glass-card text-gray-600 hover:text-black hover:bg-black/5 transition-all">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right: Stats, Status & CV Card */}
            <div className="flex flex-col gap-4 min-w-[220px] w-full md:w-auto">
                {/* Status Badge */}
                <div className="self-center md:self-end">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for Work
                    </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl glass-card flex flex-col items-center justify-center text-center">
                        <span className="text-xl font-bold text-black">5+</span>
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Years Exp</span>
                    </div>
                    <div className="p-3 rounded-2xl glass-card flex flex-col items-center justify-center text-center">
                        <span className="text-xl font-bold text-black">20+</span>
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Projects</span>
                    </div>
                </div>

                {/* CV Card */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 rounded-2xl glass-card border border-black/5"
                >
                    <h3 className="text-sm font-bold text-black mb-3">My Resume</h3>
                    <div className="flex gap-2">
                        <a
                            href="/CV_Withanage.pdf"
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-xs font-medium"
                        >
                            <Eye size={14} />
                            View
                        </a>
                        <a
                            href="/CV_Withanage.pdf"
                            download="Buddhi_Withanage_CV.pdf"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors text-xs font-medium"
                        >
                            <FileDown size={14} />
                            Download
                        </a>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
