import React, { useEffect, useState } from "react";
import Twitter from "../assets/svg/twitter.svg";
import Telegram from "../assets/svg/telegram.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Discord from "../assets/svg/discord.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(
          () => {
            const newYear = new Date().getFullYear();
            if (newYear !== currentYear) {
              setCurrentYear(newYear);
            }
          },
          1000 * 60 * 60,
        ); // Update every hour
    
        return () => clearInterval(intervalId);
      }, [currentYear]);

    return (
        <footer className="mx-auto bg-[#041410] flex flex-col items-center py-10">
            <div className="container w-full flex flex-col gap-6">
                <div className="w-full">
                    <nav className="text-white flex justify-start gap-8">
                        <a href="">About Us</a>
                        <a href="">WhitePaper</a>
                        <a href="">Help & Support</a>
                        <a href="">Escrow Services</a>
                    </nav>
                </div>
                <div className="w-full flex justify-between">
                    <div className="">
                        <p className="text-white/65">
                            JobDeal &copy; {currentYear} All Rights Reserved
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <p className="text-white">Join our Community</p>
                        <nav className="flex items-center gap-2.5">
                            <a href="" target="_blank" rel="">
                                <img className="w-4 h-auto" src={Telegram} alt="" />
                            </a>

                            <a href="" target="_blank" rel="">
                                <img className="w-4 h-auto" src={Discord} alt="" />
                            </a>

                            <a href="" target="_blank" rel="">
                                <img className="w-4 h-auto" src={Twitter} alt="" />
                            </a>

                            <a href="" target="_blank" rel="">
                                <img className="w-4 h-auto" src={LinkedIn} alt="" />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;