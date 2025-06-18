import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import styles from '../styles/Header.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from './GameContext';

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const { isMobile } = useGameContext();

  return (
    <div className={styles.storeContainer}>
      <header className={styles.storeHeader}>
        <Link to="/">
          <div className={styles.logoContainer}>
            <div className={styles.headerLogoDiv}>
              <img
                className={styles.headerLogoImg}
                src="/logo.png"
                alt="GameVerse Logo"
              />
            </div>
            {!isMobile && <div className={styles.logo}>GameVerse</div>}
          </div>
        </Link>

        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search for a game..."
            className={styles.searchBar}
          />
          <FaSearch className={styles.searchIcon} />
        </div>

        <div className={styles.cart}>
          <FaShoppingCart className={styles.cartIcon} />
          <span className={styles.cartCount}>{cartCount}</span>
        </div>
      </header>
    </div>
  );
}

export default Header;
