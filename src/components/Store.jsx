import Header from './Header';
import styles from '../styles/Store.module.css';
import Navbar from './Navbar';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import DisplayGames from './DisplayGames';
import { useGameContext } from './GameContext';
import CartItems from './CartItems';

function Store() {
  const [navVisible, setNavVisible] = useState(false);
  const { isMobile, cartVisibility, setCartVisibility } = useGameContext();

  return (
    <div className={styles.store}>
      <Header />
      <div className={styles.flexStore}>
        <div className={styles.storeContent}>
          <h1>Welcome to the Game Store</h1>
          <p>Explore our collection of games!</p>
        </div>
        <div className={styles.navandgamediv}>
          {navVisible && (
            <Navbar navVisible={navVisible} setNavVisible={setNavVisible} />
          )}
          {!isMobile && <Navbar />}
          <DisplayGames />
        </div>
        {cartVisibility ? <CartItems /> : null}
      </div>
      {!navVisible && (
        <button
          onClick={() => setNavVisible(!navVisible)}
          className={styles.toggleNav}
          type="button"
        >
          <HiMenu className={styles.hamburger} />
        </button>
      )}
    </div>
  );
}

export default Store;
