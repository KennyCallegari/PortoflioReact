import React, { ReactNode } from 'react'
import { Link } from 'react-scroll';
import styles from './core.module.css';

interface IButtonProps {
  children: ReactNode,
  to: string,
  secondary?: boolean,
  big?: boolean,
  dark?: boolean,
  fontBig?: boolean,
  smooth?: boolean, 
  duration?: number, 
  spy?: boolean, 
  offset?: number,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
}

const Button = ({ children, to, secondary, big, fontBig, dark, smooth, duration, spy, offset, onMouseEnter,  onMouseLeave }: IButtonProps) => {
  return (
    <Link to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} smooth={smooth} duration={duration} spy={spy} offset={offset}
    className={`${styles.button} ${secondary ? styles.secondary : ''}  ${big ? styles.big : ''}  ${fontBig ? styles.fontBig : ''}  ${dark ? styles.dark : ''}  ${fontBig ? styles.fontBig : ''}  ${dark ? styles.dark : ''}`}>
      {children}
    </Link>
  )
}

export default Button