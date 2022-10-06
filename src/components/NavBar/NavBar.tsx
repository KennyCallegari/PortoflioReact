import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styles from './NavBar.module.css';

interface NavBarProps {
  toggleSideBar: () => void,
}

const NavBar = ({toggleSideBar}: NavBarProps) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBar = () => setScrollNav(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBar);
  
    return () => {
      window.removeEventListener('scroll', changeNavBar);
    }
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  

  return (
    <nav className={`${styles.nav} ${scrollNav && styles.scrollNav}`}>
      <div className={styles.container}>
        <LinkRouter to="/" onClick={toggleHome} className={styles.logo}>Kenny</LinkRouter>
        <div className={styles.mobileIcon} onClick={toggleSideBar}>
          <FaBars />
        </div>
        <ul className={styles.menu}>
          <li className='item'>
            <LinkScroll to="portfolio" smooth duration={800} spy offset={-80} className={styles.links} activeClass={styles.active}>Portfolio</LinkScroll>
          </li>
          <li className='item'>
            <LinkScroll to="about" smooth duration={800} spy offset={-80} className={styles.links} activeClass={styles.active}>About Me</LinkScroll>
          </li>
          <li className='item'>
            <LinkScroll to="contactMe" smooth duration={800} spy offset={-80} className={styles.links} activeClass={styles.active}>Contact Me</LinkScroll>
          </li>
        </ul>
      </div>
      <nav className={styles.buttonContainer}>
        <LinkRouter to='/signin' className={styles.button}>Me contacter</LinkRouter>
      </nav>
    </nav>
  )
};

export default NavBar;