import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import DefultButton from '../buttons/DefultButton';
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const menu = [
        { name: "EcoSystem", link: "/eco-system" },
        { name: "DevTools", link: "/devtools" },
        { name: "About", link: "/about" },
        { name: "APIs", link: "/apis" },
        { name: "Publications", link: "/publications" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll detection logic
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 6);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 w-full z-50 py-6 transition-all duration-300 ${scrolled
                ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
                : 'bg-black/40 backdrop-blur-md'
                }`}
        >
            <div className="flex justify-between items-center mx-4 xl:mx-16">

                {/* Logo */}
                <a href="/">
                    <div className="uppercase text-white font-bold tracking-wider">
                        blackalphalabs
                    </div>
                </a>

                {/* Mobile Toggle */}
                <div className="xl:hidden">
                    <button
                        className="text-[#00F2FF] focus:outline-none text-2xl transition-transform duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={`${isOpen ? "rotate-90" : ""} transition-transform duration-300`}>
                            {isOpen ? <FiX /> : <FiMenu />}
                        </div>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden xl:flex xl:items-center xl:gap-8">
                    {menu.map((data, index) => (
                        <a
                            key={index}
                            href={data.link}
                            className={`mx-4 relative group transition-all duration-300 
                                ${location.pathname === data.link
                                    ? "text-[#00F2FF]"
                                    : "text-[#929090] hover:text-[#00F2FF]"
                                }
                            `}
                        >
                            <h1 className="relative inline-block">
                                {data.name}

                                {/* Active underline */}
                                <span
                                    className={`
                                        absolute left-0 -bottom-1 h-[2px] bg-[#00F2FF] transition-all duration-500 
                                        ${location.pathname === data.link
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }
                                    `}
                                ></span>
                            </h1>
                        </a>
                    ))}
                </div>

                {/* Get Started Button */}
                <div className="hidden xl:block">
                    <div className="py-2">
                        <DefultButton label="Get Started" />
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`xl:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col px-4 gap-2 bg-black/70 backdrop-blur-xl border-t border-white/10">
                    {menu.map((data, index) => (
                        <a
                            key={index}
                            href={data.link}
                            onClick={() => setIsOpen(false)}
                            className={`py-2 relative group transition-all duration-300 
                                ${location.pathname === data.link
                                    ? "text-[#00F2FF]"
                                    : "text-[#929090] hover:text-[#00F2FF]"
                                }
                            `}
                        >
                            <h1 className="relative inline-block">
                                {data.name}
                                <span
                                    className={`
                                        absolute left-0 -bottom-1 h-[2px] bg-[#00F2FF] transition-all duration-500 
                                        ${location.pathname === data.link
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }
                                    `}
                                ></span>
                            </h1>
                        </a>
                    ))}

                    <div className="py-2">
                        <DefultButton label="Get Started" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;