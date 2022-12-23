import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
   return (
      <div className={styles.container}>
         <div className={styles.body_container}>
            <h2>Page Not Found...</h2>
         </div>
      </div>
   )
}

export default PageNotFound;