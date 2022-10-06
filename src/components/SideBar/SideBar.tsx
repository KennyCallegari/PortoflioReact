import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styles from './SideBar.module.css';

interface SideBarProps {
  isOpen: boolean,
  toggleSideBar: () => void,
}

const SideBar = ({ isOpen, toggleSideBar }: SideBarProps) => {
  return (
    <aside className={`${styles.container} ${isOpen ? styles.containerOpened : styles.containerClosed}`} onClick={toggleSideBar}>
      <div className={styles.iconContainer}>
        <FaTimes className={styles.icon} />
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <LinkScroll to='about' onClick={toggleSideBar} className={styles.link}>About</LinkScroll>
          <LinkScroll to='discover' onClick={toggleSideBar} className={styles.link}>Discover</LinkScroll>
          <LinkScroll to='signup' onClick={toggleSideBar} className={styles.link}>Signup</LinkScroll>
        </ul>
        <div className={styles.buttonContainer}>
          <LinkRouter to='/signIn' className={styles.button}>Me contacter</LinkRouter>
        </div>
      </div>
    </aside>
  )
};

export default SideBar;