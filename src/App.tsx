import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, BannerFooter, MailFooter, Footer, NewsPost } from "./components/index";
import { Home, About, Contact, RoadMap, FAQ, Investor, News, Terms, Privacy, Cookies } from "./pages/index";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
        <Header />
        <div className="body-bg">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/investors" element={<Investor />} />
            <Route path="/faq" element={<FAQ />} />
            
            <Route path="/news" element={<News />} />
            <Route path="/news/:postId" element={<NewsPost />} />

            <Route path="/terms-condition" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          <BannerFooter />
          <MailFooter />
          <Footer />
        </div>
    </>
  );
}

export default App;