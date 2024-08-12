import React from 'react';
import { useTranslation } from 'react-i18next';

const Vision: React.FC = () => {
  const { t } = useTranslation(['about']);
  
  return (
    <section className="text-white pb-20 flex flex-col justify-center">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center justify-center mt-[75px]">
        <div className="w-full grid grid-cols-2 gap-20 max-md:grid-cols-1">
            <div className="rounded-lg border border-white/25 bg-white/5 col-span-1 p-6">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex">
                        <div className="flex flex-col items-start">
                            <h1 className="text-xl font-semibold leading-none">{t('about.title')}</h1>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-start">{t('about.text1')}<br /><br />{t('about.text2')}</p>
                    </div>
                </div>
            </div>

            <div className="rounded-lg border border-white/25 bg-white/5 col-span-1 p-6">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex">
                        <div className="flex flex-col items-start">
                            <h1 className="text-xl font-semibold leading-none">{t('features.title')}</h1>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-start">{t('features.text1')}<br /><br />{t('features.text2')}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
