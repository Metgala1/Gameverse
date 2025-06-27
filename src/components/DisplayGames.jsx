import { useGameContext } from './GameContext';
import styles from '../styles/DisplayGames.module.css';
import { Link } from 'react-router-dom';
function DisplayGames() {
  const {
    game,
    loading,
    error,
    isMobile,
    selectedGenre,
    cart,
    addToCart,
    removeFromCart,
  } = useGameContext();

  const myGame = game
    ? game.filter((g) => g.genres.some((genre) => genre.slug === selectedGenre))
    : [];

  return (
    <div className={styles.gamesContainer}>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && (
        <p className={styles.error}>Error loading games: {error.message}</p>
      )}

      <div className={styles.gamelist}>
        {myGame.map((item) => (
          <Link
            to={`/game/${item.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
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
                  className={`${styles.cartBtn} ${
                    cart.some((g) => g.id === item.id)
                      ? styles.remove
                      : styles.add
                  }`}
                  onClick={() =>
                    cart.some((g) => g.id === item.id)
                      ? removeFromCart(item)
                      : addToCart(item)
                  }
                >
                  {cart.some((g) => g.id === item.id)
                    ? 'Remove from Cart'
                    : 'Add to Cart'}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DisplayGames;
