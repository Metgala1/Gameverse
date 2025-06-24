import { useGameContext } from './GameContext';
import styles from '../styles/DisplayGames.module.css';

function DisplayGames() {
  const { game, loading, error, isMobile, selectedGenre, addToCart } = useGameContext();

  const myGame = game
    ? game.filter((g) =>
        g.genres.some((genre) => genre.slug === selectedGenre)
      )
    : [];

  return (
    <div className={styles.gamesContainer}>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && (
        <p className={styles.error}>Error loading games: {error.message}</p>
      )}

      <div className={styles.gamelist}>
        {myGame.map((item) => (
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
            <div className={styles.gameinfo}>
              <h3>{item.name}</h3>
              <p>Rating: {item.rating}</p>
              <p>Released Date: {item.released}</p>
              <p>Playtime: {item.playtime} hours</p>
              <button
                className={styles.cartBtn}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayGames;

