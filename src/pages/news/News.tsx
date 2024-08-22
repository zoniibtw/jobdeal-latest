import React from 'react';
import { Hero } from './index';
import { NewsFeed } from '../../components';

const News: React.FC = () => {
  return (
    <>
        <Hero />
        <NewsFeed />
    </>
  );
};

export default News;
