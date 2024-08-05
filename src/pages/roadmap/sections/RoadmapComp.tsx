import React from 'react';

interface RoadmapItem {
  date: string;
  details: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    date: 'Q2 2024',
    details: [
      'Launch of Web3 Version 1.34: The release of the latest version of our Web3 platform, incorporating enhanced features and improvements for a more robust user experience.',
      'Watch2Earn: Introduction of a new feature allowing users to earn by watching content, engaging with educational videos, and advertisements.',
      'AI Translate Chat: Implementation of AI-powered translation for real-time multilingual chat, enhancing communication between global users.',
      'Verification: Strengthening our verification processes to ensure the authenticity and credibility of user profiles.',
      'JobDeal Remote and Web3 Services: Expansion of our services to include remote job opportunities and Web3-related gigs.',
      'Airdrops: Conducting token airdrops to reward our community and promote engagement.',
      'On-ramp Payment System: Introduction of a seamless payment system for easier onboarding and transactions within the platform.'
    ],
  },
  {
    date: 'Q3 2024',
    details: [
      'ICO Launch: Initial Coin Offering to raise funds for further development and expansion of JobDeal.',
      'JobDeal Charity: Launching charitable initiatives as part of our commitment to give back to the community.',
      'Learn2Earn: A new feature allowing users to earn by participating in learning modules and skill development courses.',
      'Urgent Job Function: Introducing functionality for urgent job postings, enabling quicker matching and response times.',
      'Enhanced Ad Function: Improving advertisement features for better targeting and engagement.',
      'JobDealers NFT Collection: Launching an exclusive NFT collection for our users, adding value and exclusivity to the platform.',
      'AI Translation Chat: Further development and enhancement of our AI translation chat capabilities.',
      'JobDeal Marketplace: Opening a marketplace for users to buy and sell services and digital products.',
      'Job Search and Matching Algorithm: Introducing an advanced algorithm to improve job search accuracy and matching efficiency.',
      'Integrated Chat Agent: Implementing a chat agent for seamless communication and support within the platform.',
      'Virtual Office Workspace: Launching a virtual office workspace feature to facilitate remote collaboration and project management.',
      'Client Project Management Tools: Providing tools for clients to manage their projects effectively within the JobDeal platform.',
      'Back Office Support Application: Introducing back-office support applications to assist users with administrative tasks.'
    ],
  },
  {
    date: 'Q4 2024',
    details: [
      'Integration of Crypto Wallet: Enabling users to manage their crypto assets directly within the JobDeal platform.',
      'JobDeal Support: Expanding our support services to offer comprehensive assistance to users.',
      'Data Sharing for Earnings: Introducing features to share and analyze earnings data for better financial insights.',
      'Tip Freelancer: Adding a tipping feature to allow clients to reward freelancers for excellent work.',
      'JobDealers Exchange Service: Launching an exchange service for users to trade JobDeal-related tokens and assets.'
    ],
  },
  {
    date: 'Q1 2025',
    details: [
      'Skillset Classes (Learn2Earn): Expanding the Learn2Earn program with new skillset classes to enhance user capabilities and earning potential.',
      'USA Version Release: Launching a localized version of JobDeal for the US market, tailored to meet regional requirements.',
      'Mobile Application Development: Developing a mobile application to provide users with greater accessibility and convenience.',
      'Security and Privacy Enhancements: Implementing advanced security and privacy measures to protect user data and transactions.',
      'Analytics and Reporting: Providing comprehensive analytics and reporting tools for better decision-making and performance tracking.',
      'Scalability and Infrastructure: Enhancing the platforms scalability and infrastructure to support growing user demand.',
      'Continuous Integration and Deployment: Adopting continuous integration and deployment practices for faster and more reliable updates.',
      'User Feedback and Iterative Improvements: Continuously gathering user feedback and making iterative improvements to enhance the platform.'
    ],
  },
  {
    date: 'Q1-Q2 2025',
    details: [
      'Begin Decentralization of JobDeal: Starting the process of decentralizing the JobDeal platform to ensure greater transparency and user control.',
      'Release B2C and B2B AI Systems: Introducing AI systems tailored for both business-to-consumer and business-to-business interactions, enhancing the overall user experience.'
    ],
  },
];

const RoadmapComp: React.FC = () => {
  return (
    <div className="container mx-auto pb-20 pt-10">
      <div className="grid md:grid-cols-3 gap-4">
        {roadmapItems.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/25 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{item.date}</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {item.details.map((detail, idx) => (
                <li key={idx} className="mb-1 text-white/75">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapComp;