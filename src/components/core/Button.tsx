import { Link } from 'react-scroll';
import styles from './Button.module.css';

interface IButtonProps {
  label: string,
  to: string,
}

const Button = ({ label, to }: IButtonProps) => {
  return (
    <Link to={to} smooth duration={800} spy offset={-80} className={styles.button}>
      <p className={styles.label}>{label}</p>
    </Link>
  )
}

export default Button