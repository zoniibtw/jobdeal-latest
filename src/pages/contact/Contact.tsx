// src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <motion.h1 
        className="text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Page
      </motion.h1>
    </div>
  );
};

export default Contact;
