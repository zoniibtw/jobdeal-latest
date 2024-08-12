// src/pages/Home.tsx
import React from 'react';
import { Hero, ContactPage } from './index';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  return (
    <>
      <Hero />
      <ContactPage />
    </>
  );
};

export default Contact;
