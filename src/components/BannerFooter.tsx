import React from "react";
import Computer from "../assets/png/computer.png"

const BannerFooter = ({}) => {
    return (
        <section className="mx-auto flex flex-col items-center">
            <div className="container">
                <div className="w-full rounded-lg bg-white/5 border border-white/25 p-16 flex justify-between items-center">
                    <div className="flex flex-col gap-4 w-2/6">
                        <h1 className="text-white text-4xl font-semibold">Refer a Freelancer.<br/>Earn Rewards.</h1>
                        <p className="text-white">Earn rewards by inviting friends to join JobDeal. You’ll receive a 10% commission on their profits as a thank you for supporting our community.</p>
                        <div className="">
                            <button className="bg-[#40D2A3] border border-[#40D2A3] text-black px-6 py-2 rounded">Get Started</button>
                        </div>    
                    </div>

                    <div className="w-4/6 flex justify-center relative">
                        <div className="absolute h-full w-full">
                            <div className="w-full h-full flex flex-col justify-center gap-12 px-9">
                                <div className="w-full flex justify-end">
                                    <div className="border-[#40D2A3] border-opacity-50 border py-2 px-6 rounded text-white bg-white/5 backdrop-blur-sm">
                                        <h1 className="text-sm font-semibold">We have revolutionized the job hunting!</h1>
                                        <p className="text-xs">Our algorithm ensures that you land the best gigs in<br /> record time.</p>
                                    </div>
                                </div>

                                <div className="w-full flex justify-start">
                                    <div className="border-[#40D2A3] border-opacity-50 border py-2 px-6 rounded text-white bg-white/5 backdrop-blur-sm">
                                        <h1 className="text-sm font-semibold">Hire reliable hands with Ease</h1>
                                        <p className="text-xs">We'll connect you with top talent for the job. Experts<br /> with the required skills to get it done.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src={Computer} className="w-auto h-[17.5rem]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerFooter;