import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is JobDeal?",
    answer: "JobDeal is an innovative freelance and gig marketplace designed to eliminate middlemen and directly connect contractors with freelancers. This approach reduces costs and increases efficiency providing a secure and transparent platform for various types of jobs.",
  },
  {
    question: "How does JobDeal ensure security and transparency?",
    answer: "JobDeal leverages Blockchain decentralized autonomous organization (DAO) principles and artificial intelligence to ensure top-notch security transparency autonomy and automation.",
  },
  {
    question: "What types of jobs can I find on JobDeal?",
    answer: "JobDeal offers a wide range of services for both local and global markets covering labor-intensive jobs to intellectual tasks including technology and IT services creative and intellectual services and remote work opportunities.",
  },
  {
    question: "How does JobDeal support charitable causes?",
    answer: "JobDeal donates 1% of its profits to charitable causes allowing users to contribute to these initiatives through their participation on the platform.",
  },
  {
    question: "How do I post a job on JobDeal?",
    answer: "1. Log in to JobDeal.\n2. Click \"+ Create an Ad.\"\n3. Upload project images.\n4. Set a descriptive job name.\n5. Write a detailed job description.\n6. Set a competitive price.\n7. Choose the appropriate category and location.\n8. Set an expiry date/time.\n9. Select a payment method: Escrow + Fiat Cash or Crypto.\n10. Publish the ad.",
  },
  {
    question: "What payment methods are available?",
    answer: "Contractors can choose between escrow fiat cash or crypto payments for job listings.",
  },
  {
    question: "How do I ensure the quality of freelancers?",
    answer: "After paying the ad fee contractors can access applicant ratings comments and contacts to help select the best freelancer for the job.",
  },
  {
    question: "What if there's a dispute with a freelancer?",
    answer: "JobDeal has a dispute resolution module that helps resolve conflicts to ensure satisfaction for both parties.",
  },
  {
    question: "How do I apply for a job on JobDeal?",
    answer: "1. Log in to JobDeal.\n2. Browse job listings.\n3. Negotiate price and scope.\n4. Decide on escrow usage.\n5. Apply for the job.",
  },
  {
    question: "How does the escrow system work?",
    answer: "Escrow-protected payments ensure that funds are held securely and released upon mutual agreement between the contractor and the freelancer providing a trustworthy payment process.",
  },
  {
    question: "How do I earn additional income on JobDeal?",
    answer: "Freelancers can earn additional income through opportunities such as the Watch2Earn and Learn2Earn programs and by participating in the recruit-to-earn program.",
  },
  {
    question: "What benefits do premium members get?",
    answer: "Premium members have access to profit-sharing additional features cheaper ad prices better visibility and advanced AI chat features among other benefits.",
  },
  {
    question: "What are the key features of JobDeal?",
    answer: "- AI-based automation for enhanced efficiency.\n- Government-grade encryption and blockchain security.\n- Flexible escrow services.\n- Dispute resolution module.\n- Recruit to earn program.\n- AI translation chat for seamless communication.\n- Microlearning content to earn JobDealCoin (JDC) and micro-credentials.\n- DAO governance for transparent decision-making.\n- NFT-based user verification.\n- Competitive ad fees and charitable contributions.",
  },
  {
    question: "How does JobDeal use AI and Blockchain?",
    answer: "AI enhances communication with direct translation personalized search and ad optimization. Blockchain ensures verifiable identities secure transactions and a transparent rating system.",
  },
  {
    question: "What is the JobDealCoin (JDC)?",
    answer: "JobDealCoin (JDC) facilitates a decentralized platform enabling passive income from various activities and providing benefits such as lower fees and advanced features for premium users.",
  },
  {
    question: "How does the NFT-based user system work?",
    answer: "NFT profiles provide verifiable identities for users ensuring authenticity and security in managing personal data.",
  },
  {
    question: "What is JobDeal's revenue model?",
    answer: "JobDeal's revenue streams include premium memberships advertisement fees bargaining commissions urgent job fees enhanced ad visibility dispute and escrow system fees commercial spots and user data sales.",
  },
  {
    question: "How much does a premium membership cost?",
    answer: "Premium memberships average around 12 Euro per month offering additional AI features and benefits.",
  },
  {
    question: "What are the fees for contractors?",
    answer: "Contractors pay a 10% fee based on the job value with additional fees for urgent jobs (20%) and enhanced ad visibility (10%).",
  },
  {
    question: "How do freelancers benefit from premium features?",
    answer: "Freelancers gain better visibility negotiation opportunities and access to advanced features helping them secure more jobs and improve their earnings.",
  },
  {
    question: "What are JobDeal's plans for the future?",
    answer: "JobDeal plans to expand its services to new markets integrate advanced technologies like machine learning and VR and continuously improve the platform based on user feedback. Specific milestones include launching a mobile application enhancing security and privacy and starting the decentralization of JobDeal.",
  },
  {
    question: "When will new features be released?",
    answer: "Key milestones in the roadmap include:\n- Q2 2024: Launch of Web3 version 1.34 Watch2Earn AI Translate Chat and more.\n- Q3 2024: ICO launch JobDeal Charity Learn2Earn and other enhancements.\n- Q4 2024: Integration of Crypto Wallet JobDeal Support and Tip Freelancer.\n- Q1 2025: Skillset Classes (Learn2Earn) USA Version Release Mobile Application Development and more.",
  },
  {
    question: "How does JobDeal engage with its community?",
    answer: "JobDeal engages with its community through active social media presence regular updates community forums and user feedback mechanisms to ensure continuous improvement and user satisfaction.",
  },
  {
    question: "What customer support options are available?",
    answer: "JobDeal offers a comprehensive customer support system including a help desk live chat and a detailed FAQ section to assist users.",
  },
  {
    question: "How can I provide feedback to JobDeal?",
    answer: "Users can provide feedback through the platform's community forums surveys and direct communication with the support team. This feedback is actively used to improve services and features.",
  },
  {
    question: "How does JobDeal protect user data?",
    answer: "JobDeal prioritizes user data protection with advanced encryption strict privacy policies user control options and regular security audits to ensure data security and privacy.",
  },
  {
    question: "What privacy policies does JobDeal adhere to?",
    answer: "JobDeal complies with global regulations like GDPR and CCPA ensuring that user data is handled with the highest standards of privacy and security.",
  },
  {
    question: "Can users control their data on JobDeal?",
    answer: "Yes users have full control over their data including options to view edit and delete their information ensuring transparency and trust.",
  },
];

const Section: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="text-white pt-20 pb-40">
      <div className="container max-md:px-5 mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-white/25 bg-white/5 rounded-md">
              <button
                className="w-full text-left p-4 font-medium text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
              >
                <div className="p-4 text-white/75 whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
