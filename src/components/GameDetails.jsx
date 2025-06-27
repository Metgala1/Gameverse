import { useParams } from 'react-router-dom';
import { useGameContext } from './GameContext';
import styles from '../styles/GameDetail.module.css';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function GameDetails() {
  const { id } = useParams();
  const { game } = useGameContext(); // or games — depends on your state name
  const navigate = useNavigate();
  const [image, setImage] = useState(0);

  const selectedGame = game.find((g) => g.id === parseInt(id)); // parse ID to number
  const screenShots = selectedGame.short_screenshots;
  console.log(screenShots);

  if (!selectedGame) return <p>Game not found.</p>;

  return (
    <div className={styles.gamedetailDiv}>
      <div className={styles.gameName}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <HiArrowLeft />
          GameVerse
        </button>
        <h2>{selectedGame.name}</h2>
      </div>
      <div className={styles.imgslider}>
        <svg
          className={styles.gameImg}
          width="100%"
          height="100%"
          viewBox="0 0 320 160"
          preserveAspectRatio="xMidYMid slice"
        >
          <image href={screenShots[image].image} width="100%" height="100%" />
        </svg>
          <div className={styles.navigation}>
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} onClick={() => setImage(index)}
              className={index === image ? styles.active : styles.navigationdivs}
              ></div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default GameDetails;
