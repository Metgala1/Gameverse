import styles from '../styles/DisplayGames.module.css';

function Loading() {
  return (
    <div className={styles.fullScreenLoader}>
      <div className={styles.loaderContainer}>
        <h1 className={styles.neonText}>Loading GameVerse...</h1>
        <svg
          className={styles.neonLogo}
          width="80"
          height="80"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--neon-cyan)" strokeWidth="6" />
          <circle cx="50" cy="50" r="30" fill="var(--neon-magenta)" />
        </svg>
        <div className={`${styles.particle} ${styles.particle1}`}></div>
        <div className={`${styles.particle} ${styles.particle2}`}></div>
        <div className={`${styles.particle} ${styles.particle3}`}></div>
        <div className={`${styles.particle} ${styles.particle4}`}></div>
      </div>
    </div>
  );
}

export default Loading;