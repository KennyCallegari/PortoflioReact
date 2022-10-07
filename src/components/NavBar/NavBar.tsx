import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './NavBar.module.css';
import HomeLogo from '../core/HomeLogo';
import NavBarButton from './NavBarButton';

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

  return (
    <nav className={`${styles.nav} ${scrollNav && styles.scrollNav}`}>
      <div className={styles.container}>
        <HomeLogo />
        <div className={styles.mobileIcon} onClick={toggleSideBar}>
          <FaBars />
        </div>
        <ul className={styles.menu}>
          <li>
            <NavBarButton to="portfolio" label="Portfolio" />
          </li>
          <li>
            <NavBarButton to="about" label="About me" />
          </li>
          <li>
            <NavBarButton to="contactMe" label="Contact me" />
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;