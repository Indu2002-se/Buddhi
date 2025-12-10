import React from 'react';
import { Search, Bell, Calendar } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="flex items-center justify-between p-6 md:p-8 bg-transparent">
            {/* Search Bar */}
            <div className="relative group w-full max-w-md hidden md:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-black transition-colors" size={20} />
                <input
                    type="text"
                    placeholder="Search for projects, services..."
                    className="w-full bg-white border border-black/5 rounded-full py-3 pl-12 pr-4 text-black focus:outline-none focus:border-black/20 transition-all placeholder:text-gray-400 shadow-sm"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 md:gap-6 ml-auto">
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 font-medium bg-white border border-black/5 px-4 py-2 rounded-full shadow-sm">
                    <Calendar size={16} />
                    <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                </div>

                <button className="relative p-3 rounded-full bg-white border border-black/5 text-gray-500 hover:text-black transition-all shadow-sm">
                    <Bell size={20} />
                    <span className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </button>

                <div className="flex items-center gap-3 pl-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 p-[2px] shadow-sm">
                        <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                            <img src="/profile2.jpeg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
