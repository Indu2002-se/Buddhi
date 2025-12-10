import React from 'react';
import { motion } from 'framer-motion';

const Widget = ({ children, className = "", title, size = "full", delay = 0 }) => {
    const sizeClasses = {
        small: "col-span-1 md:col-span-1",
        medium: "col-span-1 md:col-span-2",
        large: "col-span-1 md:col-span-3",
        full: "col-span-1 md:col-span-4",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={`glass-card rounded-[24px] overflow-hidden relative group ${sizeClasses[size]} ${className}`}
        >
            {/* Optional decorative header */}
            {title && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-white/50">
                    <h3 className="text-sm font-bold tracking-wider text-gray-600 uppercase">{title}</h3>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                </div>
            )}

            <div className="h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default Widget;
