import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
   return (
      <header>
         <Link to="/"><img src="/img/logo.png" alt="logo"></img></Link>
         <div className={styles.appname}>Yandex App</div>
      </header>
   )
};

export default Header;