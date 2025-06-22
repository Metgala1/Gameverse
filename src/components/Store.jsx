import Header from './Header';
import styles from '../styles/Store.module.css';
import Navbar from './Navbar';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import DisplayGames from './DisplayGames';

function Store() {
     const [navVisible, setNavVisible] = useState(false);

  return (
    <div className={styles.store}>
      <Header />
      <div className={styles.flexStore}>
      <div className={styles.storeContent}>
        <h1>Welcome to the Game Store</h1>
        <p>Explore our collection of games!</p>
      </div>
      <div className={styles.navcontainer}>
      {navVisible && <Navbar navVisible={navVisible} setNavVisible={setNavVisible} />}
      <div className={styles.gamesContainer}>
        <DisplayGames />
      </div>
      </div>
      </div>
       {!navVisible && (
        <button onClick={() => setNavVisible(!navVisible)} className={styles.toggleNav} type='button'>
         <HiMenu className={styles.hamburger} />
      </button>
       )}
    </div>
  );
}

export default Store;
