import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="text-white pb-20 flex flex-col justify-center">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center justify-center mt-[75px]">
        <div className="w-full grid grid-cols-2 gap-20">
            <div className="rounded-lg border border-white/25 bg-white/5 col-span-1 p-6">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex">
                        <div className="flex flex-col items-start">
                            <h1 className="text-xl font-semibold leading-none">Vision</h1>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-start">JobDeal is a cutting-edge freelance and gig marketplace that connects freelancers and contractors directly, eliminating middlemen to reduce costs and increase efficiency. Leveraging Blockchain, decentralized autonomous organization (DAO) principles, and artificial intelligence, JobDeal ensures top-notch security, transparency, and automation. Our platform offers a wide range of services for local and global markets, from labor-intensive to intellectual tasks, with competitive pricing and a commitment to donate 1% of profits to charity.<br /><br />Our vision is to revolutionize the freelance gig economy by creating a direct, secure, and fair job market. We address key challenges like high costs, scams, and communication barriers by using NFT profiles for verifiable identities, a blockchain-based rating system, and AI-enhanced features.</p>
                    </div>
                </div>
            </div>

            <div className="rounded-lg border border-white/25 bg-white/5 col-span-1 p-6">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex">
                        <div className="flex flex-col items-start">
                            <h1 className="text-xl font-semibold leading-none">Features</h1>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-start">JobDeal's features include AI-based automation, government-grade encryption, flexible escrow services, a dispute resolution module, a recruit-to-earn program, and more. Contractors can easily publish job ads and choose various payment methods, while freelancers benefit from secure, escrow-protected payments. We stand out from competitors by offering lower fees, better quality control, and a decentralized dispute resolution system. With an estimated 1.67 billion freelancers globally, JobDeal aims to tap into this growing market, particularly in emerging economies.<br /><br />We engage with tech-savvy audiences through blockchain forums and conferences, ensuring global accessibility with multi-language support and local partnerships. Our proactive risk management and comprehensive customer support ensure user trust and satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
