import { NavLink } from "react-router-dom"
// import "./Header.css"  // ✅ custom CSS file
import styles from './header.module.css'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        {/* Logo */}
        <div className={styles.logo}>MyLogo</div>

        {/* Desktop Menu */}
        <ul className={styles["nav-links"]}>
       <li><NavLink to="/" className={({isActive}) => `nav-link ${isActive ? "add-active" : ''}` }>Home</NavLink></li>
        
          <li><NavLink to="/about" className={styles["nav-link"]}>About</NavLink></li>
          <li><NavLink to="/service" className={styles["nav-link"]}>Services</NavLink></li>
          <li><NavLink to="/contact" className={styles["nav-link"]}>Contact</NavLink></li>
          
        </ul>
      </div>
     </nav>
  )
}

export default Header
