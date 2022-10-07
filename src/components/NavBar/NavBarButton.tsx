import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import styles from './NavBarButton.module.css';

interface INavBarButtonProps {
  to: string,
  label: string,
}


const NavBarButton = ({ to, label }: INavBarButtonProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <LinkScroll to={to} smooth duration={800} spy className={styles.links} onSetActive={() => setIsActive(true)} onSetInactive={() => setIsActive(false)} onClick={() => setIsActive(true)}>
      <p className={`${isActive ? styles.labelActive : styles.label}`}>{label}</p>
    </LinkScroll>
  )
}

export default NavBarButton