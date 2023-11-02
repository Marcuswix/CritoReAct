import React, { useState, useEffect } from 'react';
import '../css/ScrollToTopBtn/style.css';

const ScrollToTopBtn = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleButtonClick() {
    scrollToTop();
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <button id="btnScrollToTop" className={`btnScrollToTop ${position === 0 ? 'hide' : ''}`} onClick={handleButtonClick}>
      <i class="fa-solid fa-angle-up"></i>
      </button>
    </>
  );
};

export default ScrollToTopBtn;
