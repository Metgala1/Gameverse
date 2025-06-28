import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { useGameContext } from './GameContext';

function Header() {
  const { isMobile, cart, setCartVisibility, search, setSearch } = useGameContext();
  

  return (
    <div className={styles.headerContainer}>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className={styles.searchIcon} />
        </div>

        <div
          onClick={() => setCartVisibility((prevState) => !prevState)}
          className={styles.cart}
        >
          <FaShoppingCart className={styles.cartIcon} />
          <span className={styles.cartCount}>{cart.length}</span>
        </div>
      </header>
    </div>
  );
}

export default Header;
