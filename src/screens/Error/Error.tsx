import { logo2 } from 'assets';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.error}>
      <img src={logo2} alt="logo" />
      <p>404 | Not Found</p>
    </div>
  );
};

export default Error;
