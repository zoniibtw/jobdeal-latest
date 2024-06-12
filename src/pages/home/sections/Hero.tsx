import React from 'react';
import BNB from "../../../assets/svg/bnb.svg";
import NearU from "../../../assets/svg/near-u.svg";
import Moongy from "../../../assets/svg/moongy.svg";
import ChainLink from "../../../assets/svg/chainlink.svg";

const Hero: React.FC = () => {
  return (
    <section className="text-white h-screen flex flex-col">
      <div className="container min-h-[80vh] mx-auto text-center flex flex-col items-center">
        <div className="w-full h-full flex items-center justify-start">
            <div className="min-w-[650px] w-1/3">
                <h1 className="text-4xl text-start md:text-5xl lg:text-6xl font-bold mb-4">Welcome to the <br/><span className="text-green-500">Future of Connections</span></h1>
                <p className="text-lg text-start md:text-xl lg:text-2xl mb-8">JobDeal is a modern online platform that transforms the traditional job market by directly linking Employers and Freelancers in a secure and flexible manner.</p>
                
                <div className="flex space-x-4 mb-12">
                <button className="bg-green-500 text-white px-6 py-2 rounded">Create Account</button>
                <button className="border border-green-500 text-white px-6 py-2 rounded">Show me how it works</button>
                </div>
            </div>
        </div>

        <div className="bg-black py-10 px-6 rounded-lg flex justify-around items-center w-full">
          <img src={NearU} alt="Near U" className="h-12" />
          <img src={Moongy} alt="Moongy" className="h-12" />
          <img src={ChainLink} alt="Chainlink" className="h-12" />
          <img src={BNB} alt="BNB" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
