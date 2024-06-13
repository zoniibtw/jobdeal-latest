import React from "react";
import MailIcon from "../assets/svg/newsletter.svg";

const MailFooter = ({}) => {
    return (
        <section className="w-full flex flex-col items-center">
            <div className="container w-full flex items-center px-[8%] py-10">
                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-8">
                        <img src={MailIcon} className="w-16 hauto" alt="" />
                        <div className="flex flex-col gap-1.5 text-white">
                            <h1 className="text-2xl mb-0 leading-none">Stay connected</h1>
                            <p className="mb-0 leading-none text-white/70">Subscribe to our newsletter</p>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full flex justify-end rounded-lg border border-white/25 bg-white/5 py-1.5 px-1.5">
                    <input 
                        className="bg-transparent w-full px-2.5 py-1"
                        type="text" 
                        placeholder="Email"
                        name="" 
                        id="" />
                    <button className="bg-[#40D2A3] text-black px-4 rounded">Subscribe</button>
                </div>
            </div>
        </section>
    );
}

export default MailFooter;