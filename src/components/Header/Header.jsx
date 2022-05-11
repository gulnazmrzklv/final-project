
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';

import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="container top-header">
        <div className="top-header__text">We provide 100% fresh service to our customers.</div>
        <div className="top-header__contacts">
          <div className="top-header__email">Email: info.dairy@gmail.com </div>
          <div className="top-header__phone">Phone : <a href="+122 555 444 22">+122 555 444 22</a> </div>
        </div>
        <div className="top-header__socialmedia">
          <a href="https://facebook.com">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com">
            <InstagramIcon/>
          </a>
        </div>
      </div>
      <div className="container bottom-header">

        <Logo className='header__logo'/>
        <nav className="header_links">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Our services</a>
          <a href="#">Products</a>
          <a href="#">Contacts</a>
          <a href="#">Faq</a>

        </nav>
        <div className="header_actions">
          <button className="btn"><SearchIcon /></button>
          <button className="btn"><CartIcon /></button>


        </div>
      </div>
    </header>
  )
}

export default Header;