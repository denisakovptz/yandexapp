import React from 'react'
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../redux/store';
import { ErrorModal } from '../components/errorModal';

import styles from './Statistic.module.scss';
import { clearError } from '../redux/slices/statsSlice';

const Statistic: React.FC = () => {

   const dispatch = useAppDispatch();

   const { data, error } = useSelector((state: RootState) => state.stats);

   return (
      (error)
         ?
         <ErrorModal error={error} clearError={() => dispatch(clearError())} />
         :
         <div className={styles.stat_body}>
            {
               data.map((el, index) => {
                  return <div key={index} className={styles.row} style={{ gridTemplateColumns: `40px repeat(${el.length}, minmax(150px, 1fr))` }}>
                     <div>
                        <input type="checkbox" />
                     </div>
                     {el.map((e, i) => {
                        return <div key={i} className={styles.col}>{e}</div>
                     })}
                  </div>
               })
            }
         </div>
   );

}

export default Statistic;
