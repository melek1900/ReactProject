import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/contact.module.scss"

const Contact = ({ siteTitle }) => (
  <section id="contact" className={`contact ${styles.contact}`}>
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      {/* Autres éléments de votre section Contact */}
      <div className={`row ${styles.contactRow}`}>
        <div className={`col-md-6 d-flex align-items-stretch ${styles.contactColumn}`}>
          <div className={`info-box ${styles.infoBox}`}>
            <i className="bx bx-map"></i>
            <h3>My Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
        {/* Ajoutez d'autres éléments ici */}
      </div>

      <form action="forms/contact.php" method="post" role="form" className={`php-email-form mt-4 ${styles.phpEmailForm}`}>
        <div className="row">
          <div className="col-md-6 form-group">
            <input 
              type="text" 
              name="name" 
              className={`form-control ${styles.formControl}`} 
              id="name" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input 
              type="email" 
              className={`form-control ${styles.formControl}`} 
              name="email" 
              id="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
        </div>

        {/* Autres champs du formulaire */}
        <div className={`form-group mt-3 ${styles.formGroup}`}>
          <input 
            type="text" 
            className={`form-control ${styles.formControl}`} 
            name="subject" 
            id="subject" 
            placeholder="Subject" 
            required 
          />
        </div>
        <div className={`form-group mt-3 ${styles.formGroup}`}>
          <textarea 
            className={`form-control ${styles.formControl}`} 
            name="message" 
            rows="5" 
            placeholder="Message" 
            required
          ></textarea>
        </div>

        <div className="my-3">
          <div className={`loading ${styles.loading}`}>Loading</div>
          <div className={`error-message ${styles.errorMessage}`}></div>
          <div className={`sent-message ${styles.sentMessage}`}>Your message has been sent. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div>
  </section>
)

export default Contact
