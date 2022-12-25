import React from 'react'
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

import styles from './Statistic.module.scss';

const Statistic: React.FC = () => {

   const { data } = useSelector((state: RootState) => state.campstats);

   return (
      <div className={styles.stat_body}>

         {
            data.map((el, index) => {
               return <div key={index} className={styles.row}>{el.map((e, i) => {
                  return <div key={i} className={styles.col}>{e}</div>
               })}</div>
            })
         }

      </div>
   );

}

export default Statistic;
