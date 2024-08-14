import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BNB from "../../../assets/svg/bnb.svg";
import NearU from "../../../assets/svg/near-u.svg";
import Moongy from "../../../assets/svg/moongy.svg";
import ChainLink from "../../../assets/svg/chainlink.svg";
import OutlineLogo from "../../../assets/svg/white-outline-logo.svg"

const Hero: React.FC = () => {
  const { t } = useTranslation(['home']);
  return (
    <section className="text-white h-screen flex flex-col justify-center pt-[30%] md:pt-0">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center mt-[75px] gap-14">
        <div className="w-full flex items-center justify-start">
            <div className="w-full lg:min-w-[750px] lg:max-w-[750px]">
                <h1 className="text-3xl text-start md:text-5xl lg:text-6xl font-semibold mb-4">{t('hero.title1')}<br/><span className="text-[#40D2A3]">{t('hero.title2')}</span></h1>
                <p className="text-sm text-start md:text-xl lg:text-lg mb-8">{t('hero.paragraph')}</p>
                
                 <div className="flex space-x-4 mb-12">
                  <Link to="/about" className="bg-[#40D2A3] border border-[#40D2A3] text-black px-6 py-2 rounded hover:cursor-pointer">{t('hero.button')}</Link>
                  <Link to="/contact" className="border border-[#40D2A3] text-[#40D2A3] px-6 py-2 rounded hover:cursor-pointer">{t('hero.button1')}</Link>
                </div> 
            </div>

            <div className="w-full h-full hidden lg:flex justify-center items-center relative">
                <img src={OutlineLogo} className="w-1/2 opacity-10 absolute mb-12" alt="" />
            </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="bg-white/5 border border-white/25 py-10 pb-7 gap-5 rounded-lg flex flex-col w-full">
            <div className="grid grid-cols-4 max-md:grid-cols-2 gap-y-10 mx-auto gap-[10%] w-full px-[15%]">
              <img src={NearU} alt="Near U" className="h-12" />
              <img src={Moongy} alt="Moongy" className="h-12" />
              <img src={ChainLink} alt="Chainlink" className="h-12" />
              <img src={BNB} alt="BNB" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
