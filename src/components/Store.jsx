import Header from './Header';
import styles from '../styles/Store.module.css';
import Navbar from './Navbar';
import { useState } from 'react';

function Store() {
     const [navVisible, setNavVisible] = useState(true);

  return (
    <div className="store">
      <Header />
      <div className={styles.storeContent}>
        <h1>Welcome to the Game Store</h1>
        <p>Explore our collection of games!</p>
      </div>
      {navVisible && <Navbar navVisible={navVisible} setNavVisible={setNavVisible} />}
    </div>
  );
}

export default Store;
