import Video from '../../videos/video.mp4';
import styles from './Home.module.css';
import { Button } from '../core';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <video className={styles.video} autoPlay loop muted src={Video} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi there. I'm Kenny Callegari
          <br />
          I'm a full stack &amp; mobile developer
        </h1>
      </div>
      <div className={styles.buttonContainer}>
        <Button to='portfolio' label="View my work" />
      </div>
    </div>
  )
};

export default Home;