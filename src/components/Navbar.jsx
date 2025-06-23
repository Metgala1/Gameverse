import navItems from "./NavListItems"
import styles from '../styles/Navbar.module.css';
import { MdClose } from 'react-icons/md';


function Navbar({ navVisible, setNavVisible }) {
    
    return (
       <div className={styles.navbar}>
        <button onClick={() => setNavVisible(!navVisible)} className={styles.closeBtn}><MdClose className={styles.closeicon} /></button>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navitem}>
                <span>
                    {item.icon && <span className="icon">{item.icon}</span>} {item.title}
                </span>
                {item.children && (
                    <ul className={styles.dropdown}>
                        {item.children.map((child, i) => (
                            <li key={i} className={styles.dropdownitem}>
                                {child.title}
                            </li>
                        ))}

                    </ul>
                )}
            </li>
          ))}
        </ul>
       </div>
    )
}

export default Navbar;