import React, { useEffect, useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import lottie from 'lottie-web';
import * as animationData from '../../images/home.json';
import styles from './HomeLogo.module.css';


const HomeLogo = () => {
  const [animation, setAnimation] = useState<any>();
  const lottieContainer = useRef(null);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    if (!lottieContainer?.current) return;
  
    const animation = lottie.loadAnimation({
      name:"home",
      container: lottieContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    setAnimation(animation);

    return () => {
      lottie.destroy();
    };
  }, [lottieContainer]);

  const onMouseEnter = () => {
    animation.setSegment(0, 15);
    animation.setDirection(1);
    animation.play();
  }

  const onMouseLeave = () => {
    animation.setSegment(0, 15);
    animation.setDirection(-1);
    animation.play();
  }

  return (
    <div ref={lottieContainer} onClick={toggleHome} className={styles.logo} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  )
}

export default HomeLogo