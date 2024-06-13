import React, { useState, useEffect, useCallback } from "react";
import Logo from "../assets/svg/green-white-logo.svg"

const Header = ({}) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [colorChange, setColorChange] = useState(false);
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setColorChange(currentScrollY > 100);
        setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      }, [lastScrollY]);
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [handleScroll]);

    return (
        <>
            <header id="desktop" className={`max-md:hidden z-30 fixed w-full bg-white/5 border-b border-white/25 text-white backdrop-blur-lg transition ease-in-out duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className={`container mx-auto flex justify-between items-center transition-all ease-in-out duration-300 ${colorChange ? 'py-2' : 'py-4'}`}>
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold">
                            <img src={Logo} className="w-auto h-8" alt="" />
                        </div>
                    </div>
                        <nav className="flex space-x-6">
                            <a href="#find-a-job" className="hover:text-gray-400">Find a Job</a>
                            <a href="#hire-someone" className="hover:text-gray-400">Hire someone</a>
                            <a href="#how-it-works" className="hover:text-gray-400">How It Works</a>
                            <a href="#about-us" className="hover:text-gray-400">About Us</a>
                            <a href="#partners" className="hover:text-gray-400">Partners</a>
                        </nav>
                    <div className="flex space-x-4">
                        <button className={`text-[#40D2A3] border border-[#40D2A3] px-4 rounded transition-all ease-in-out duration-300 ${colorChange ? 'py-1' : 'py-2'}`}>Login</button>
                        <button className={`bg-[#40D2A3] text-black px-4 rounded transition-all ease-in-out duration-300 ${colorChange ? 'py-1' : 'py-2'}`}>Create Account</button>
                    </div>
                </div>
            </header>

            <header id="mobile" className="md:hidden flex"></header>
        </>
    );
}

export default Header;