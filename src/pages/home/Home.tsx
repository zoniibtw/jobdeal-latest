// src/pages/Home.tsx
import React from 'react';
import { Hero, KeyFeatures, HowitWorks, RoadMap } from "./index"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <RoadMap />
      <KeyFeatures />
      {/*<HowitWorks />*/}
    </>
  );
};

export default Home;
