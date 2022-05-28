import MapImgUrl from '../../assets/map.png';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';
import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import css from './contacts-page.module.css';
import clsx from 'clsx'

function ContactsPage(){
  return(
    <div>
      <div className={clsx('container',css.map)}>
        <div className={css.background}>
          <h1 className={clsx("page-title",css.title)}>Contacts</h1>
        </div>
        <img className={css.map} src={MapImgUrl} alt="" />
      </div>
      <div className={css.contacts}>
        <h4 className={css.theme}>Contact 24/7</h4>
        <p className={css.text}>Lorem ipsum dolor sit amet, adipiscing elit. Ut  sagittis tortor.</p>
        <div className={css.icon}>
          <PhoneIcon/>
          <p>CONTACT PHONE: Cell:+1(550)260-667-22</p>
        </div>
        <div className={css.icon}>
          <MailIcon/>
          <p>CONTACT MAIL: info@gmail.com</p>
        </div>
        <div className={css.icon}>
          <LocationIcon/>
          <p>LOCATION ADDRESS: Topa Road,Australia.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage;