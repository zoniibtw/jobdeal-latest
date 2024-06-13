import React from "react";
import MailIcon from "../assets/svg/newsletter.svg";

const MailFooter = ({}) => {
    return (
        <section>
            <div className="container w-full px-[10%] py-10">
                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-8">
                        <img src={MailIcon} className="w-16 hauto" alt="" />
                        <div className="flex flex-col gap-1.5 text-white">
                            <h1 className="text-2xl mb-0 leading-none">Stay connected</h1>
                            <p className="mb-0 leading-none text-white/70">Subscribe to our newsletter</p>
                        </div>
                    </div>
                </div>

                <div className="">

                </div>
            </div>
        </section>
    );
}

export default MailFooter;