import React, { useEffect, useState } from 'react';
import { navmenu } from './NavMenu';
import { Menu, X } from 'lucide-react';
import sitelogo from '../../assets/SiteLogo.png';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 6);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300
            ${scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                    : 'bg-gradient-to-r from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-[72px]">

                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-3 group">
                        <img
                            src={sitelogo}
                            alt="Black Alpha Labs"
                            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                        <span
                            className="hidden md:block text-lg font-semibold tracking-wide
                            bg-gradient-to-r from-gray-900 to-gray-600
                            bg-clip-text text-transparent"
                        >
                            BlackAlphaLabs
                        </span>
                    </a>

                    {/* DESKTOP MENU */}
                    <nav className="hidden xl:flex items-center gap-10">
                        {navmenu.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                className="relative text-sm font-medium text-gray-600
                                transition-all duration-300 hover:text-gray-900
                                after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0
                                after:bg-gradient-to-r after:from-indigo-400 after:to-blue-400
                                after:transition-all after:duration-300
                                hover:after:w-full hover:after:left-0"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="xl:hidden p-2 rounded-lg
                        text-gray-700 hover:bg-gray-100 transition"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out
                ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-white px-6 py-5 space-y-4 border-t">
                    {navmenu.map((item, i) => (
                        <a
                            key={i}
                            href={item.link}
                            onClick={() => setOpen(false)}
                            className="block text-gray-700 font-medium
                            hover:text-indigo-500 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Nav;
