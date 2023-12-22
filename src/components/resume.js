
import React from "react"
import * as styles from "../styles/resume.module.scss"

const Resume = ({ siteTitle }) => (
  <section id="resume" className={styles.resume}>
    <div className="container">

      <div className={`${styles.resume}-title`}>
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className={`${styles.resume}-title`}>Summary</h3>
          <div className={`${styles.resume}-item pb-0`}>
            <h4>Alice Barkley</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
            </p>
          </div>

          <h3 className={`${styles.resume}-title`}>Education</h3>
          <div className={`${styles.resume}-item`}>
            <h4>Master of Fine Arts &amp; Graphic Design</h4>
            <h5>2015 - 2016</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
          </div>
          {/* ... Autres sections d'éducation */}
        </div>
        <div className="col-lg-6">
          <h3 className={`${styles.resume}-title`}>Professional Experience</h3>
          <div className={`${styles.resume}-item`}>
            <h4>Senior Graphic Design Specialist</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY </em></p>
            <p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </p>          </div>
          <div className={`${styles.resume}-item`}>
            <h4>Graphic Design Specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
            </p>          </div>
        </div>
      </div>

    </div>
  </section>
)

export default Resume
