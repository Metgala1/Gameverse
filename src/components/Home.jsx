import styles from '../styles/Home.module.css';
import { useGameContext } from './GameContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { game, loading, error, isMobile } = useGameContext();

  const myFilterGames = game
    ? game.filter((g) =>
        [
          'Grand Theft Auto V',
          'The Witcher 3: Wild Hunt',
          'Red Dead Redemption 2',
        ].includes(g.name),
      )
    : [];

  return (
    <div className={styles.homeDiv}>
      <div className={styles.heroSection}>
        <div className={styles.firstDiv}>
          <div className={styles.imgLogo}>
            {!isMobile && (
              <div className={styles.logoDiv}>
                <img className={styles.logoImg} src="./logo.png" alt="GameVerse logo" />
              </div>
            )}
            <h1 className={styles.gameversetitle}>Welcome to GameVerse</h1>
          </div>
          <Link to={'store'}>
            <button className={styles.gameVersButton} type="button">
              Enter the Gameverse
            </button>
          </Link>
        </div>

        <div className={styles.secondDiv}>
          <h2 className={styles.gameversetitle}>Hottest Games</h2>
          <div className={styles.hottestgamecontainer}>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading games</p>}

            {myFilterGames.length > 0 &&
              myFilterGames.map((game) => (
                <div key={game.id} className={styles.gamecard}>
                  <svg
                    className={styles.homeImg}
                    width="100%"
                    height="160"
                    viewBox="0 0 320 160"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <image
                      href={game.background_image}
                      width="100%"
                      height="100%"
                    />
                  </svg>
                  <h3 className={styles.h2}>{game.name}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

