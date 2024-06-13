import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, BannerFooter, MailFooter, Footer } from "./components/index";
import { Home, About, Contact, RoadMap } from "./pages/index";

function App() {
  return (
    <>
        <Header />
        <div className="body-bg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roadmap" element={<RoadMap />} />
          </Routes>
          <BannerFooter />
          <MailFooter />
          <Footer />
        </div>
    </>
  );
}

export default App;
