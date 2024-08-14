import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RoadMap: React.FC = () => {
  const { t } = useTranslation(['home']);
  return (
    <section className="text-white flex flex-col justify-center pb-20 max-md:pt-10">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center mt-[75px] gap-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">A Glimpse into JobDeal's Exciting Roadmap</h2>
        <p className="">
            {t('roadmap.paragraph')}
            <br /><br />
            {t('roadmap.paragraph1')}
        </p>
        <div className="flex justify-center gap-5">
            <Link to="/roadmap" className="hover:cursor-pointer"><span className="bg-[#40D2A3] border border-[#40D2A3] text-black px-6 py-2 rounded">{t('roadmap.button1')}</span></Link>
            <Link to="/investors" className="hover:cursor-pointer"><span className="border border-[#40D2A3] text-[#40D2A3] px-6 py-2 rounded">{t('roadmap.button2')}</span></Link>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
