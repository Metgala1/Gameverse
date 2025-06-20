import { useGameContext } from "./GameContext";
import styles from '../styles/DisplayGames.module.css';

function DisplayGames() {
  const { game, loading, error, isMobile } = useGameContext();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading games: {error.message}</p>}

      <div className={styles.gamelist}>
        {game && game.map((item) => (
          <div
            key={item.id}
            className={`${styles.gameItem} ${isMobile ? styles.mobile : ''}`}
          >
            <img className={styles.gameImg} src={item.background_image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Rating: {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayGames;
