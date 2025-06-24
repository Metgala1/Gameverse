import navItems from './NavListItems';
import styles from '../styles/Navbar.module.css';
import { MdClose } from 'react-icons/md';
import { useGameContext } from './GameContext';

function Navbar({ navVisible, setNavVisible }) {
  const { setSelectedGenre } = useGameContext();
  return (
    <div className={styles.navbar}>
      <button
        onClick={() => setNavVisible(!navVisible)}
        className={styles.closeBtn}
      >
        {'X'}
      </button>
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navitem}>
            <span>
              {item.icon && <span className="icon">{item.icon}</span>}{' '}
              {item.title}
            </span>
            {item.children && (
              <ul className={styles.dropdown}>
                {item.children.map((child, i) => (
                  <li key={i} className={styles.dropdownitem}>
                    <button
                      onClick={() =>
                        setSelectedGenre(child.title.toLowerCase())
                      }
                      className={styles.listbtn}
                    >
                      {child.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
