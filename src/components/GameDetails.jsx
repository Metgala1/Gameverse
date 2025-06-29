import { useParams } from 'react-router-dom';
import styles from '../styles/GameDetail.module.css';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGameDetails from '../hooks/GetGameDetails'
import { useGameContext } from './GameContext';
import Header from './Header';
import Loading from './Loading';

function GameDetails() {
  const { id } = useParams();
  const { myGame, loading, error } = useGameDetails(id);
  const {game, cart, addToCart, removeFromCart} = useGameContext()
  const navigate = useNavigate();
  const [image, setImage] = useState(0);

  console.log(myGame)

  const selectedGame = game.find((g) => g.id === parseInt(id))
  const screenShots = selectedGame.short_screenshots || [];

  
  if(loading) return <Loading />
  if(error || !myGame) return <p>Fail to fetch game</p>

  return (
    <div className={styles.gamedetailDiv}>
        <Header />
      <div className={styles.gameName}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none', 
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
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
        <p onClick={() =>
                    cart.some((g) => g.id === myGame.id)
                      ? removeFromCart(myGame)
                      : addToCart(myGame)
                  } className={cart.some((g) => g.id === myGame.id) ? styles.red : styles.green}>{cart.some((g) => g.id === myGame.id)
                    ? 'Remove from Cart'
                    : 'Add to Cart'}</p>
      </div>
      <div className={styles.descritiondiv}>
        <h2>Description</h2>
        <div className={styles.description}
         dangerouslySetInnerHTML={{ __html: myGame.description }}
        >

        </div>
      </div>
      <div className={styles.moreinfodiv}>
        <p>Website:{"  "}<a href={myGame.website}>{myGame.website}</a></p>
        <p>Released: {myGame.released}</p>
        <p>Genre: {myGame.genres[0].name}</p>
        <p>Platforms:{" "}
  {myGame.platforms.map((p) => p.platform.name).join(', ')}
</p>
        <p>Developers: {myGame.developers[0].name}</p>
        <p>Publishers: {myGame.publishers[0].name}</p>
      </div>
    </div>
  );
}

export default GameDetails;
