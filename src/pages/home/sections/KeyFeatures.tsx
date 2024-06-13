import React from 'react';
import Security from "../../../assets/svg/security-icon.svg";
import NFT from "../../../assets/svg/nft-icon.svg";
import LearnToEarn from "../../../assets/svg/earn-icon.svg";
import RecruitToEarn from "../../../assets/svg/recruit-icon.svg";
import LowCosts from "../../../assets/svg/low-cost-icon.svg";
import Charity from "../../../assets/svg/charity-icon.svg";

const KeyFeatures: React.FC = () => {
  const features = [
    {
      title: 'Security',
      description: 'We ensure a fair and secure environment through encrypted technologies, blockchain for secure transactions, escrow services, and dispute resolution, while filtering out inappropriate ads.',
      icon: Security
    },
    {
      title: 'NFT based User System',
      description: 'Our NFT system enables users to authenticate, own, monetize, personalize, and interoperate digital assets effectively.',
      icon: NFT
    },
    {
      title: 'Learn To Earn',
      description: 'With our microlearning content, you can learn at your own pace. You can also earn and get recognized for completing tasks and skills, and spreading knowledge of Web 3 technologies and our functionality.',
      icon: LearnToEarn
    },
    {
      title: 'Recruit To Earn',
      description: 'Earn rewards by inviting friends to join JobDeal and receive a 10% commission on their generated profits, thanking you for contributing to our community.',
      icon: RecruitToEarn
    },
    {
      title: 'Low Costs',
      description: 'We offer various services with costs ranging from 2.5% to 20% depending on the type of service and payment method, including ad fees, bargains, urgent jobs, enhanced ads, escrow/dispute, and premium membership.',
      icon: LowCosts
    },
    {
      title: 'Charity',
      description: 'We donate 0.1% of every transaction to a community-chosen charity every 6 months, emphasizing the importance of helping the less fortunate.',
      icon: Charity
    }
  ];

  return (
    <section className="text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Jobdeal Key Features</h2>
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
