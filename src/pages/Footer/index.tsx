import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import styles from './Footer.module.scss';



const Footer: React.FC = () => {

   const { balance, startBalance } = useSelector((state: RootState) => state.units);

   return (
      <footer className={styles.footer}>
         API balance: {balance} / {startBalance}
      </footer>
   )
};

export default Footer;