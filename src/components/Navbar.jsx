import navItems from "./NavListItems"
import styles from '../styles/Navbar.module.css'

function Navbar() {
    
    return (
       <div className={styles.navbar}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="navitem">
                <span>
                    {item.icon && <span className="icon">{item.icon}</span>} {item.title}
                </span>
                {item.children && (
                    <ul className="dropdown">
                        {item.children.map((child, i) => (
                            <li key={i} className="dropdown-item">
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