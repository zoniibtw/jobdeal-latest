import React from 'react';
import Arrow from "../../../assets/svg/arrow.svg";

const HowItWorks: React.FC = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it Works</h2>
        <div className="grid grid-rows-2 grid-cols-1 gap-8">

          <div className="flex row-span-1 h-full col-span-1 items-center space-y-4 w-full">
            <div className="flex w-5/12">
                <div className="w-2/3">
                    <h3 className="text-2xl font-semibold mb-1">As a Freelancer</h3>
                    <p>Find and connect with paying clients and secure work opportunities.</p>
                </div>

                <div className="flex items-center justify-center w-1/3">
                    <img src={Arrow} alt="" />
                </div>
            </div>
            <div className="bg-white/5 border border-white/25 p-6 rounded-lg w-7/12">
              <ol className="list-decimal list-inside space-y-2">
                <li>Create an account, set your location and fill out your profile.</li>
                <li>Go to your homepage, and browse through the <strong>“Available Near You”</strong> section, to apply for jobs.</li>
                <li>Apply to any suitable job if you’ve available got the skills, and get hired.</li>
              </ol>
            </div>
          </div>

          <div className="flex row-span-1 h-full col-span-1 items-center space-y-4 w-full">
            <div className="flex w-5/12">
                <div className="w-2/3">
                    <h3 className="text-2xl font-semibold mb-1">As a Client</h3>
                    <p>Find and hire top freelance talent for any project, big or small.</p>
                </div>

                <div className="flex items-center justify-center w-1/3">
                    <img src={Arrow} alt="" />
                </div>
            </div>
            <div className="bg-white/5 border border-white/25 p-6 rounded-lg w-7/12">
              <ol className="list-decimal list-inside space-y-2">
                <li>Create an account, specify your location, and complete your profile.</li>
                <li>On your homepage, click on <strong>“Post a job”</strong>, and fill out the required details (shouldn’t take 5 minutes).</li>
                <li>Create the Job Post and receive offers from available and skilled freelancers.</li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
