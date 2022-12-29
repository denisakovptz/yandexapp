
import styles from './ErrorModal.module.scss';

interface ErrType {
   error: any,
   clearError: any
}

export const ErrorModal: React.FC<ErrType> = ({ error, clearError }) => {

   return (
      <div className={styles.overlay}>
         <div className={styles.modal}>
            <h3 className={styles.err_header}>Error!</h3>
            <p className={styles.err_text}>{error.error_string}: {error.error_detail}</p>
            <p className={styles.err_text}>Code: {error.error_code}</p>
            <button onClick={clearError} className={styles.err_button}>Close</button>
         </div>
      </div>
   )
}
