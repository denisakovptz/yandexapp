import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
   return (
      <header>
         <img src="/img/logo.png" alt="logo"></img>
         <div className={styles.appname}>Yandex App</div>
      </header>
   )
};

export default Header;