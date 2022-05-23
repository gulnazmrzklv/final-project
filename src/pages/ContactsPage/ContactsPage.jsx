import MapImgUrl from '../../assets/map.png';
import css from './contacts-page.module.css';
import clsx from 'clsx'

function ContactsPage(){
  return(
    <div>
      <h1 className={clsx("page-title",css.title)}>Contacts</h1>
      <div className={clsx('container',css.map)}>
      <img src={MapImgUrl} alt="" />
      </div>
      <div className={css.contacs}>
        <h4>Contact 24/7</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut  sagittis tortor.</p>
        <div>
          
        </div>
        <p>Contact Phone </p>
      </div>
      
    </div>
  )
}

export default ContactsPage;