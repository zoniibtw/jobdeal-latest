import React from 'react';
import OutlineLogo from "../../../assets/svg/white-outline-logo.svg"

const Hero: React.FC = () => {
  return (
    <section className="text-white py-20 flex flex-col justify-center">
      <div className="container relative max-md:px-5 mx-auto text-center flex flex-col items-center justify-center mt-[75px]">
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-semibold">Get in touch with us,<br/><span className="text-[#40D2A3]">we're here to help.</span></h1>
            <p className="w-1/2 opacity-65">Reach out for any inquiries, support, or feedback. We're just an email away.</p>
        </div>

        <div className="absolute">
            <img className="w-52 h-auto opacity-15" src={OutlineLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;