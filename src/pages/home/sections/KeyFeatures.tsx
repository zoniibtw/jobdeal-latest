import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Security from "../../../assets/svg/security-icon.svg";
import NFT from "../../../assets/svg/nft-icon.svg";
import LearnToEarn from "../../../assets/svg/earn-icon.svg";
import RecruitToEarn from "../../../assets/svg/recruit-icon.svg";
import LowCosts from "../../../assets/svg/low-cost-icon.svg";
import Charity from "../../../assets/svg/charity-icon.svg";

const KeyFeatures: React.FC = () => {
  const { t } = useTranslation(['home']);

  const features = [
    {
      title: t('keyfeatures.feature.one.title'),
      description: t('keyfeatures.feature.one.paragraph'),
      icon: Security
    },
    {
      title: t('keyfeatures.feature.two.title'),
      description: t('keyfeatures.feature.two.paragraph'),
      icon: NFT
    },
    {
      title: t('keyfeatures.feature.three.title'),
      description: t('keyfeatures.feature.three.paragraph'),
      icon: LearnToEarn
    },
    {
      title: t('keyfeatures.feature.four.title'),
      description: t('keyfeatures.feature.four.paragraph'),
      icon: RecruitToEarn
    },
    {
      title: t('keyfeatures.feature.five.title'),
      description: t('keyfeatures.feature.five.paragraph'),
      icon: LowCosts
    },
    {
      title: t('keyfeatures.feature.six.title'),
      description: t('keyfeatures.feature.six.paragraph'),
      icon: Charity
    }
  ];

  return (
    <section className="text-white pb-20 pt-10">
      <div className="container mx-auto max-md:px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">{t('keyfeatures.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 border border-white/25 p-10 rounded-lg flex flex-col gap-5">
              <div className="flex w-full h-10 justify-start items-center gap-4">
                <img src={feature.icon} alt={feature.title} className="w-auto h-full" />
                <h3 className="text-xl font-semibold leading-none mb-0">{feature.title}</h3>
              </div>
              <p className="text-start">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
