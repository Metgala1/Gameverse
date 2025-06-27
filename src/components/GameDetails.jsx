import { useParams } from 'react-router-dom';
import styles from '../styles/GameDetail.module.css';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGameDetails from '../hooks/GetGameDetails'
import { useGameContext } from './GameContext';

function GameDetails() {
  const { id } = useParams();
  const { myGame, loading, error } = useGameDetails(id);
  const {game} = useGameContext()
  const navigate = useNavigate();
  const [image, setImage] = useState(0);

  const selectedGame = game.find((g) => g.id === parseInt(id))
  const screenShots = selectedGame.short_screenshots || [];

  
  if(loading) return <p>Loading...</p>
  if(error || !myGame) return <p>Fail to fetch game</p>

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
        <h2>{myGame.name}</h2>
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
            <div
              key={index}
              onClick={() => setImage(index)}
              className={
                index === image ? styles.active : styles.navigationdivs
              }
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.cartinfo}>
        <p className={styles.price}>$40</p>
        <p className={styles.addtocart}>Add To Cart</p>
      </div>
      <div className={styles.descritionDv}>
        <h2>Description</h2>
        <div className={styles.description}
         dangerouslySetInnerHTML={{ __html: myGame.description }}
        >

        </div>
      </div>
    </div>
  );
}

export default GameDetails;
