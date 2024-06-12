import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, BannerFooter, MailFooter, Footer } from "./components/index";
import { Home, About } from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <BannerFooter />
      <MailFooter />
      <Footer />
    </>
  );
}

export default App;
