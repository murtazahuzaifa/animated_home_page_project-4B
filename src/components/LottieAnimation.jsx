import React, { useRef, useEffect } from 'react';
import lottieWeb from 'lottie-web';
// import {} from '@wellyshen/use-web-animations';

const lottieAnimation = {
    AnimElem : SetAnimation,
};

function SetAnimation({starter, children}) {
    const elemRef = useRef(null);
    
    useEffect(()=>{
        lottieAnimation.lottieWeb = lottieWeb.loadAnimation({
            container: elemRef.current, // the dom element that will contain the animation
            ...starter,
          }) ;
    })

  return (
  <div ref={elemRef}>{children}</div>
  );
}

export default lottieAnimation;
