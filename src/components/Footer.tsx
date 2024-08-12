import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Twitter from "../assets/svg/twitter.svg";
import Telegram from "../assets/svg/telegram.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Discord from "../assets/svg/discord.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const { t } = useTranslation(['common']);

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
                <div className="w-full flex flex-col gap-2.5">
                    <nav className="text-white flex justify-start gap-8">
                        <a href="">{t('footer.nav1.link1')}</a>
                        <a href="">{t('footer.nav1.link2')}</a>
                        <a href="">{t('footer.nav1.link3')}</a>
                        <a href="">{t('footer.nav1.link4')}</a>
                        <a href="">{t('footer.nav1.link5')}</a>
                        <a href="">{t('footer.nav1.link6')}</a>
                        <a href="">{t('footer.nav1.link7')}</a>
                    </nav>
                    <nav className="text-white/55 text-xs flex justify-start gap-8">
                        <a href="">{t('footer.nav2.link1')}</a>
                        <a href="">{t('footer.nav2.link2')}</a>
                        <a href="">{t('footer.nav2.link3')}</a>
                    </nav>
                </div>
                <div className="w-full flex justify-between">
                    <div className="">
                        <p className="text-white/65">
                            JobDeal &copy; {currentYear} {t('footer.copywrite')}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <p className="text-white">{t('footer.community')}</p>
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