import React from 'react';
import { Hero } from './index';

const News: React.FC = () => {
  return (
    <>
        <Hero />
        <div className='w-full flex justify-center'>
            <div className='container pb-10'>
                <div className='flex w-full justify-center text-center text-[#222]'>
                    <h1 className='uppercase text-xl bg-[#40D2A3] px-4 py-1 rounded-lg'>Coming soon...</h1>
                </div>
            </div>
        </div>
    </>
  );
};

export default News;
