import { Link as LinkScroll } from 'react-scroll';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import Video from '../../videos/video.mp4';
import styles from './Home.module.css';
import { useState } from 'react';
import { Button } from '../core';

const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(prevState => !prevState);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <video className={styles.video} autoPlay loop muted src={Video} />
      </div>
      <div className={styles.texts}>
        <p className={styles.subtitle}>Hi there 👋 My name is</p>
        <h1 className={styles.title}>KENNY CALLEGARI</h1>
        <p className={styles.subtitle}>I'm a freelance frontend &amp; mobile developer</p>
        <div className={styles.buttonContainer}>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} dark>
            Me contacter
            {hover ? <MdArrowForward className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Home;