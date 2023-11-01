import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

    const { pathname } = useLocation();

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  
    useEffect(function () {
      scrollToTop();
    }, [pathname]);
  
    return null;
}

export default ScrollToTop