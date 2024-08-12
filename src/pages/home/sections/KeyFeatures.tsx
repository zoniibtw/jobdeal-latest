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
      description: 'Our platform ensures a fair and secure environment by integrating advanced encryption and blockchain technology for safe transactions. AI-driven escrow services, dispute resolution, and sophisticated algorithms filter out inappropriate ads, elevating security and user trust.',
      icon: Security
    },
    {
      title: 'NFT based User System',
      description: 'Our innovative NFT system leverages blockchain to enhance user authentication and asset management, enabling users to own, monetize, personalize, and seamlessly operate within digital spaces. This integration ensures a robust and versatile user experience.',
      icon: NFT
    },
    {
      title: 'Learn To Earn',
      description: 'Engage with our AI-enhanced microlearning content designed to fit your pace. Earn recognition and rewards by mastering tasks and skills, particularly in Web 3 technologies, enhancing both your knowledge and functionality on our platform.',
      icon: LearnToEarn
    },
    {
      title: 'Recruit To Earn',
      description: 'Our AI algorithms optimize your networks potential as you invite friends to join JobDeal. Earn a 10% commission on their generated profits, a token of appreciation for expanding our AI and blockchain-enhanced community.',
      icon: RecruitToEarn
    },
    {
      title: 'Low Costs',
      description: 'Our fees range from 2.5% to 20% based on service and payment method, encompassing ad fees, bargains, urgent jobs, enhanced ads, and premium memberships, all optimized to ensure affordability.',
      icon: LowCosts
    },
    {
      title: 'Charity',
      description: 'We commit 0.1% of every transaction to charities chosen by our community every six months. Our process ensures that contributions are directed towards causes where they can make the most significant impact, reaffirming our dedication to social responsibility.',
      icon: Charity
    }
  ];

  return (
    <section className="text-white pb-20 pt-10">
      <div className="container mx-auto max-md:px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Jobdeal Key Features</h2>
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
