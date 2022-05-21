import MapImgUrl from '../../assets/map.png';
import css from './contacts-page.module.css';

function ContactsPage(){
  return(
    <div>
      <h1>Contacts</h1>
      <div className={css.map}>
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