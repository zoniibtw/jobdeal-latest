import React, { useEffect, useState } from "react";

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
                        <nav className="flex gap-4">
                            <a href="">
                                <img src="" alt="" />
                            </a>

                            <a href="">
                                <img src="" alt="" />
                            </a>

                            <a href="">
                                <img src="" alt="" />
                            </a>

                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;