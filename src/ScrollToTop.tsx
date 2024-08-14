import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Optional: import smoothscroll-polyfill
// import smoothscroll from 'smoothscroll-polyfill';

const smoothScrollToTop = (duration: number) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    window.scrollTo(0, start * (1 - progress));

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, 0); // Ensure exact scroll to top
    }
  };

  requestAnimationFrame(animateScroll);
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Optional: initialize smoothscroll-polyfill
    // smoothscroll.polyfill();
    smoothScrollToTop(500); // Adjust duration for smoothness
  }, [pathname]);

  return null;
};

export default ScrollToTop;