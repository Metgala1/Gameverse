import Header from './Header';
import styles from '../styles/Store.module.css';
import Navbar from './Navbar';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

function Store() {
     const [navVisible, setNavVisible] = useState(true);

  return (
    <div className="store">
      <Header />
      <div className={styles.storeContent}>
        <h1>Welcome to the Game Store</h1>
        <p>Explore our collection of games!</p>
      </div>
      <div className={styles.navcontainer}>
      {navVisible && <Navbar navVisible={navVisible} setNavVisible={setNavVisible} />}
      <div className={styles.gamesContainer}>

      </div>
      </div>
       {!navVisible && (
        <button onClick={() => setNavVisible(!navVisible)} className={styles.toggleNav} type='button'>
         <HiMenu className="hamburger-icon" />
      </button>
       )}
     
    </div>
  );
}

export default Store;
