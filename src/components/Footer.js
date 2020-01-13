import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Any Questions?</h2>
      <p>
        If you have any questions feel free to visit our FAQ page or contact us directly!
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            FAQs
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>21950 Traction Place &bull; Sterling, VA 20164 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(703) 975-8069</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">thenewlenguyens@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Khoa Nguyen. 
      {/* Design: <a href="https://html5up.net">HTML5 UP</a>. */}
    </p>
  </footer>
)

export default Footer
