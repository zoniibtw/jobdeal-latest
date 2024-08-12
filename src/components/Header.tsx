import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { CircleFlag } from 'react-circle-flags';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';  // For the hamburger and close icons
import Logo from "../assets/svg/green-white-logo.svg";

const Header: React.FC = () => {
    const { t, i18n } = useTranslation(['common']);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [colorChange, setColorChange] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);  // State for mobile menu

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

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Desktop Header */}
            <header id="desktop" className={`max-md:hidden z-30 fixed w-full bg-white/5 border-b border-white/25 text-white backdrop-blur-lg transition ease-in-out duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className={`container mx-auto flex justify-between items-center transition-all ease-in-out duration-300 ${colorChange ? 'py-2' : 'py-4'}`}>
                    <div className="flex items-center space-x-4">
                        <Link to="/">
                            <img src={Logo} className="w-auto h-8" alt="Logo" />
                        </Link>
                    </div>
                    <nav className="flex space-x-6">
                        <Link to="/roadmap" className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link1')}</Link>
                        <Link to="/about" className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link2')}</Link>
                        {/*<Link to="/news" className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link3')}</Link>*/}
                        <Link to="/investors" className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link4')}</Link> 
                        <Link to="/contact" className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link5')}</Link>
                        <Link to="/faq" className="hover:text-gray-400 mb-0 leading-none uppercase">{t('header.link6')}</Link>
                    </nav>
                    <div className="flex space-x-4">
                        <button onClick={() => changeLanguage('sv')} className="text-white w-4 h-auto"><CircleFlag countryCode="se" /></button>
                        <button onClick={() => changeLanguage('en')} className="text-white w-4 h-auto"><CircleFlag countryCode="uk" /></button>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header id="mobile" className="md:hidden z-30 fixed w-full px-5 bg-white/5 border-b border-white/25 text-white backdrop-blur-lg transition ease-in-out duration-300">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <Link to="/">
                            <img src={Logo} className="w-auto h-8" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => changeLanguage('sv')} className="text-white w-4 h-auto"><CircleFlag countryCode="se" /></button>
                        <button onClick={() => changeLanguage('en')} className="text-white w-4 h-auto"><CircleFlag countryCode="uk" /></button>
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {menuOpen && (
                    <nav className="flex flex-col items-center space-y-6 text-white backdrop-blur-md py-6">
                        <Link to="/roadmap" onClick={toggleMenu} className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link1')}</Link>
                        <Link to="/about" onClick={toggleMenu} className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link2')}</Link>
                        {/*<Link to="/news" onClick={toggleMenu} className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link3')}</Link>*/}
                        <Link to="/investors" onClick={toggleMenu} className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link4')}</Link> 
                        <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-400 mb-0 leading-none capitalize">{t('header.link5')}</Link>
                        <Link to="/faq" onClick={toggleMenu} className="hover:text-gray-400 mb-0 leading-none uppercase">{t('header.link6')}</Link>
                    </nav>
                )}
            </header>
        </>
    );
}

export default Header;