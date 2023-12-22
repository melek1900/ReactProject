import React, { useState } from "react";
import { Link } from 'gatsby';

import Header from "../components/header";
import '../styles/global.scss';
import About from "../components/about";
import Resume from "../components/resume";
import * as styles from "../styles/header.module.scss"


import Contact from "../components/contact";
export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
  return  <div>
  <Header />
  <h1>Hello in our magic journey</h1>
  <nav id={styles.navbar} className={styles.navbar}>
    <ul>
      <li><Link to="#" onClick={() => handleNavLinkClick("home")}>home</Link></li>
      <li><Link to="#" onClick={() => handleNavLinkClick("about")}>About</Link></li>
      <li><Link to="#" onClick={() => handleNavLinkClick("resume")}>Resume</Link></li>
    </ul>
    <i className={`bi bi-list ${styles.mobileNavToggle}`}></i>
  </nav>
  {activeSection === "about" && <About />}
  {activeSection === "resume" && <Resume />}
</div>

}

