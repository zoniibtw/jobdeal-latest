import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <motion.h1 
        className="text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Page
      </motion.h1>
    </div>
  );
};

export default About;