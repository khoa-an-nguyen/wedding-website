import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    {/* <section>
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
    </section> */}
    <section>
      <h2>Any Questions? Contact Us!</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>21500 Glebe View Drive &bull; Broadlands, VA 20148 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(703) 975-8069 &bull; (703) 338-0704</dd>
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
      <div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><a target="_blank" href="https://icons8.com/icons/set/maryland">Maryland icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
    </p>
  </footer>
)

export default Footer
