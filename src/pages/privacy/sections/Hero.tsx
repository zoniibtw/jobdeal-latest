import React from 'react';
import { useTranslation } from "react-i18next";
import OutlineLogo from "../../../assets/svg/white-outline-logo.svg"

const Hero: React.FC = () => {
  const { t } = useTranslation(['privacy']);
  return (
    <section className="text-white pt-32 pb-14 flex flex-col justify-center">
      <div className="container relative max-md:px-5 mx-auto text-center flex flex-col items-center justify-center mt-[75px]">
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-semibold">{t('hero.title')}</h1>
            <p className="w-4/6 opacity-65">{t('hero.paragraph')}</p>
        </div>

        <div className="absolute">
            <img className="w-52 h-auto opacity-15" src={OutlineLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;