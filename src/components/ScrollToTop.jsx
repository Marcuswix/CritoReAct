import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

  //Vi skapar en variablen och "useLocation()" laddar ner den aktuella url:en i variablen

    const location = useLocation();
  
  //useEffect triggas varje gång url:en ändras, då [location.pathname] står längst ner i funktionen
  // och då körs funktionen "scrollTo"
    useEffect(() => {
      window.scrollTo({top: 0, behavior: 'instant'})
    }, [location.pathname]);
  
  //return null betyder att inget innehåll ska renderas, utan bara att funktionen ska köras
    return null;
}

export default ScrollToTop