// src/pages/Home.tsx
import React from 'react';
import { Hero, KeyFeatures, HowitWorks } from "./index"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HowitWorks />
    </>
  );
};

export default Home;
