import { useGameContext } from "./GameContext";
import styles from '../styles/DisplayGames.module.css';

function DisplayGames() {
  const { game, loading, error, isMobile } = useGameContext();

  return (
    <div>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>Error loading games: {error.message}</p>}

      <div className={styles.gamelist}>
        {game && game.map((item) => (
          <div
            key={item.id}
            className={`${styles.gameItem} ${isMobile ? styles.mobile : ''}`}
          >
            <svg
              className={styles.gameImg}
              width="100%"
              height="100%"
              viewBox="0 0 320 160"
              preserveAspectRatio="xMidYMid slice"
            >
              <image
                href={item.background_image}
                width="100%"
                height="100%"
              />
            </svg>
            <h3>{item.name}</h3>
            <p>Rating: {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayGames;

