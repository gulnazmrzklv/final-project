import { Link } from 'react-router-dom'; 
import clsx from 'clsx';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import css from './header.module.css';
import { useStore } from '../../store/context';


function Header() {
  const {cart} = useStore();
  return (
    <header className={css.header}>
      <div className={clsx('container', css.topheader)}>
        <div className={css.text}>We provide 100% fresh service to our customers.</div>
        <div className={css.contacts}>
          <div className={css.email}>Email: info.dairy@gmail.com </div>
          <div className={css.phone}>Phone : <a href="+122 555 444 22">+122 555 444 22</a> </div>
        </div>
        <div className={css.socialmedia}>
          <a href="https://facebook.com">
            <FacebookIcon />
          </a>
          <a href="https://instagram.com">
            <InstagramIcon/>
          </a>
        </div>
      </div>
      <div className={clsx(css.container, css.bottomheader)}>
        <Link to="/">
          <Logo className={css.logo}/>
        </Link>
        <nav className={css.links}>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/products/:name">Products</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/faq">Faq</Link>
        </nav>
        <div className={css.actions}>
          <button className={css.searchBtn}>
            <SearchIcon />
          </button>
          <Link to="/cart" data-count={cart.length} className={css.btn}>
            <CartIcon />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;