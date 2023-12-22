import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
  
  
  <header id={styles.header}>
    <div className={styles.container}>
      <h1><Link to="/">Emily Jones</Link></h1>
      <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

      {/* <nav id={styles.navbar} className={styles.navbar}>
        <ul>
          <li><Link to="#header" className={styles.navLink + " " + styles.active}>Home</Link></li>
          <li><Link to="#about" className={styles.navLink}>About</Link></li>
          <li><Link to="#resume" className={styles.navLink}>Resume</Link></li>
          <li><Link to="#services" className={styles.navLink}>Services</Link></li>
          <li><Link to="#portfolio" className={styles.navLink}>Portfolio</Link></li>
          <li><Link to="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>
        <i className={`bi bi-list ${styles.mobileNavToggle}`}></i>
      </nav> */}

      <div className={styles.socialLinks}>
        <a href="#" className={`${styles.twitter} ${styles.socialLink}`}><i className="bi bi-twitter"></i></a>
        <a href="#" className={`${styles.facebook} ${styles.socialLink}`}><i className="bi bi-facebook"></i></a>
        <a href="#" className={`${styles.instagram} ${styles.socialLink}`}><i className="bi bi-instagram"></i></a>
        <a href="#" className={`${styles.linkedin} ${styles.socialLink}`}><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </header>
)

export default Header




