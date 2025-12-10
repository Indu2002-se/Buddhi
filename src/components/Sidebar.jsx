import React from 'react';
import { Home, User, Zap, Folder, Mail, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const menuItems = [
        { id: 'home', icon: Home, label: 'Dashboard' },
        { id: 'about', icon: User, label: 'Profile' },
        { id: 'services', icon: Zap, label: 'Services' },
        { id: 'portfolio', icon: Folder, label: 'Projects' },
        { id: 'contact', icon: Mail, label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (setActiveSection) setActiveSection(id);
    };

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white/80 backdrop-blur-xl border-r border-black/5 flex flex-col justify-between py-8 z-50 hidden md:flex"
        >
            {/* Logo Area */}
            <div className="px-6 md:px-8 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                        <span className="text-white font-bold text-lg">B</span>
                    </div>
                    <span className="hidden md:block font-bold text-xl tracking-tight text-black">
                        Buddhi<span className="text-gray-500"></span>
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="px-4 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden
                                ${isActive ? 'bg-black/5 text-black' : 'text-gray-500 hover:bg-black/5 hover:text-black'}
                            `}
                        >
                            <Icon size={20} className={`relative z-10 ${isActive ? 'stroke-[2.5px]' : ''}`} />
                            <span className="hidden md:block relative z-10 font-medium text-sm">{item.label}</span>

                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-black/5 border-r-2 border-black/30"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Sidebar Image */}
            <div className="flex-1 px-4 py-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="hidden md:block w-full"
                >
                    <img
                        src="/side1.png"
                        alt="Decoration"
                        className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                </motion.div>
            </div>

            {/* Bottom Actions */}
            <div className="px-4 space-y-2">
                <div className="w-full h-[3px] bg-black/5 mb-4"></div>
                <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:text-black transition-colors">
                    <Settings size={20} />
                    <span className="hidden md:block font-medium text-sm">Welcome</span>
                </button>
            </div>
        </motion.div>
    );
};

export default Sidebar;
