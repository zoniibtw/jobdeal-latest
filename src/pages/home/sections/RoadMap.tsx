import React from 'react';

const RoadMap: React.FC = () => {
  return (
    <section className="text-white flex flex-col justify-center">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center mt-[75px] gap-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">A Glimpse into JobDeal's Exciting Roadmap</h2>
        <p className="">
            JobDeal is on the brink of revolutionizing the freelance economy, with an ambitious roadmap that promises game-changing developments in the coming months. We're thrilled to announce that in just three months, we'll be launching the Beta version of our AI and Blockchain-enhanced platform, offering users a first look at the future of freelance work. But that's just the beginning. As we continue to innovate and expand, we're also preparing for a public listing on the Nasdaq/NGM stock exchange  in less than 12 months. This milestone will not only solidify JobDeal's position in the market but also provide our early investors with a prime opportunity to capitalize on our growth.
            <br /><br />Stay tuned—JobDeal is set to redefine the freelance industry, and this is your chance to be part of it from the ground up.
        </p>
        <div className="flex justify-center">
            <button></button>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
