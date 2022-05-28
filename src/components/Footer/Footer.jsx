import css from './footer.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/facebook.svg';
import { Link } from 'react-router-dom'; 


function Footer () {
  return(
    <div className="container">
      <div className={css.bg}>
        <div className={css.uppercontent}>
          <div className={css.column}>
            <Logo className={css.logo}/>
            <p>Morbi vehicula luctus feugiat. In sapien id odio tempor iaculis.</p>
            <div className={css.contact}>
              <Phone />
              <p>+496 2254 344</p>
            </div>
            <div className={css.contact}>
              <Mail />
              <p>infomil906@gmail.com</p>
            </div>
          </div>
          <div className={css.link}>
              <Link to="/">Home</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/services">Our services</Link>
              <Link to="/products">Products</Link>
              <Link to="/contacts">Contacts</Link>
              <Link to="/faq">Faq</Link>
          </div>
          <div className={css.lastcolumn}>
            <h5>Newsletter</h5>
            <p>Nulla et aliquam ligula. Praesent vel rhoncus dui, nec aliquet leo.</p>
            <div className={css.socialmedia}>
              <Facebook/>
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
        <div className={css.copyright}>
          <p>© Copyright 2022 Milkcandy - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;