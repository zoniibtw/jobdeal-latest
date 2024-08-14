import React from "react";
import Computer from "../assets/png/computer.png"
import { useTranslation } from 'react-i18next';

const BannerFooter = ({}) => {
    const { t } = useTranslation('common');

    return (
        <section className="mx-auto flex flex-col items-center">
            <div className="container max-md:px-5">
                <div className="w-full rounded-lg bg-white/5 border border-white/25 p-16 flex justify-between items-center max-md:px-10">
                    <div className="flex flex-col gap-4 w-2/6 max-md:w-full">
                        <h1 className="text-white text-4xl font-semibold max-md:text-3xl">{t('banner.title')}<br className="max-md:hidden"/> {t('banner.title2')}</h1>
                        <p className="text-white max-md:text-sm">{t('banner.paragraph')}</p>
                        <div className="">
                            <button className="bg-[#40D2A3] border border-[#40D2A3] text-black px-6 py-2 rounded">{t('banner.button')}</button>
                        </div>    
                    </div>

                    <div className="w-4/6 flex justify-center relative max-md:hidden">
                        <div className="absolute h-full w-full">
                            <div className="w-full h-full flex flex-col justify-center gap-12 px-9">
                                <div className="w-full flex justify-end">
                                    <div className="border-[#40D2A3] border-opacity-50 border py-2 px-6 rounded text-white bg-white/5 backdrop-blur-sm">
                                        <h1 className="text-sm font-semibold">{t('banner.box1.title')}</h1>
                                        <p className="text-xs max-w-[280px]">{t('banner.box1.paragraph')}</p>
                                    </div>
                                </div>

                                <div className="w-full flex justify-start">
                                    <div className="border-[#40D2A3] border-opacity-50 border py-2 px-6 rounded text-white bg-white/5 backdrop-blur-sm">
                                        <h1 className="text-sm font-semibold">{t('banner.box2.title')}</h1>
                                        <p className="text-xs max-w-[300px]">{t('banner.box2.paragraph')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src={Computer} className="w-auto h-[17.5rem]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerFooter;