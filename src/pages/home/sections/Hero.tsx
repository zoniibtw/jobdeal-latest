import React from 'react';
import BNB from "../../../assets/svg/bnb.svg";
import NearU from "../../../assets/svg/near-u.svg";
import Moongy from "../../../assets/svg/moongy.svg";
import ChainLink from "../../../assets/svg/chainlink.svg";
import OutlineLogo from "../../../assets/svg/white-outline-logo.svg"

const Hero: React.FC = () => {
  return (
    <section className="text-white h-screen flex flex-col justify-center">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center mt-[75px] gap-14">
        <div className="w-full flex items-center justify-start">
            <div className="min-w-[650px] w-1/3">
                <h1 className="text-4xl text-start md:text-5xl lg:text-6xl font-semibold mb-4">Welcome to the <br/><span className="text-[#40D2A3]">Future of Connections</span></h1>
                <p className="text-lg text-start md:text-xl lg:text-2xl mb-8">JobDeal is a modern online platform that transforms the traditional job market by directly linking Employers and Freelancers in a secure and flexible manner.</p>
                
                <div className="flex space-x-4 mb-12">
                <button className="bg-[#40D2A3] border border-[#40D2A3] text-black px-6 py-2 rounded">Create Account</button>
                <button className="border border-[#40D2A3] text-[#40D2A3] px-6 py-2 rounded">Show me how it works</button>
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center relative">
                <img src={OutlineLogo} className="h-full opacity-10 absolute mb-12" alt="" />
            </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="bg-white/5 border border-white/25 py-10 rounded-lg flex w-full">
            <div className="grid grid-cols-4 max-md:grid-cols-2 gap-y-10 mx-auto gap-[10%] w-full px-[15%]">
              <img src={NearU} alt="Near U" className="h-12" />
              <img src={Moongy} alt="Moongy" className="h-12" />
              <img src={ChainLink} alt="Chainlink" className="h-12" />
              <img src={BNB} alt="BNB" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
