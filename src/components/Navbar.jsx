import navItems from './NavListItems';
import styles from '../styles/Navbar.module.css';
import { useGameContext } from './GameContext';

// Optional: you can store this in a separate file if needed
const titleToSlug = {
  // Platforms
  PC: 'pc',
  PlayStation: 'playstation4',
  'Xbox One': 'xbox-one',
  'Nintendo Switch': 'nintendo-switch',
  iOS: 'ios',
  Android: 'android',
  // Genres
  Action: 'action',
  Strategy: 'strategy',
  RPG: 'role-playing-games-rpg',
  Shooter: 'shooter',
  Adventure: 'adventure',
  Puzzle: 'puzzle',
  Racing: 'racing',
  Sports: 'sports',
  // Top
  'Best of the year': 'top',
  'Popular in 2024': 'popular-2024',
  'All time top': 'all-time-top',
};

function Navbar({ navVisible, setNavVisible }) {
  const {
    setSelectedGenre,
    setSelectedPlatform,
    setSelectedSort,
  } = useGameContext();

  const handleNavClick = (category, title) => {
    const slug = titleToSlug[title];

    if (category === 'Platforms') {
      setSelectedPlatform(slug);
      setSelectedGenre('');
      setSelectedSort('');
    } else if (category === 'Genres') {
      setSelectedGenre(slug);
      setSelectedPlatform('');
      setSelectedSort('');
    } else if (category === '⭐Top') {
      setSelectedSort(slug);
      setSelectedGenre('');
      setSelectedPlatform('');
    }
  };

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
                      onClick={() => handleNavClick(item.title, child.title)}
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

