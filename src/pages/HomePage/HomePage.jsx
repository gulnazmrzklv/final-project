import Banner from '../../components/Banner';
import clsx from 'clsx';
import css from './homepage.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import AboutusImgUrl from '../../assets/about.svg';
import SignatureImgUrl from '../../assets/Signeture.png';
import Item1ImgUrl from '../../assets/item1.png';
import Item2ImgUrl from '../../assets/item2.png';
import Item3ImgUrl from '../../assets/item3.png';
import Item4ImgUrl from '../../assets/item4.png';
import { Link } from 'react-router-dom'; 
import Gallery1ImgUrl from '../../assets/gallery1.png';
import Gallery2ImgUrl from '../../assets/gallery2.png';
import Gallery3ImgUrl from '../../assets/gallery3.png';
import Gallery4ImgUrl from '../../assets/gallery4.png';
import Gallery5ImgUrl from '../../assets/gallery5.png';
import Gallery6ImgUrl from '../../assets/gallery6.png';
import Gallery7ImgUrl from '../../assets/gallery7.png';




function HomePage(){
  return(
    <div className={clsx("container",css.sevice)}>
      <Banner />
      <h3 className={css.titleitem}>Our products</h3>
      <div className={css.wrapper}>
        <div className={css.box}>
          <img className={css.item} src={Item1ImgUrl} alt="" />
          <h5>Organic food</h5>
          <p className={css.boxtext}>There are many variations of passages Lorem.</p>
          <p className={css.price}>12$</p>
        </div>
        <div className={css.box}>
          <img className={css.item} src={Item2ImgUrl} alt="" />
          <h5>Organic food</h5>
          <p className={css.boxtext}>There are many variations of passages Lorem.</p>
          <p className={css.price}>12$</p>
        </div>
        <div className={css.box}>
          <img className={css.item} src={Item3ImgUrl} alt="" />
          <h5>Organic food</h5>
          <p className={css.boxtext}>There are many variations of passages Lorem.</p>
          <p className={css.price}>12$</p>
        </div>
        <div className={css.box}>
          <img className={css.item} src={Item4ImgUrl} alt="" />
          <h5>Organic food</h5>
          <p className={css.boxtext}>There are many variations of passages Lorem.</p>
          <p className={css.price}>12$</p>
        </div>
      </div>
      <Link to="/products"><button className={css.boxbtn}> VIEW MORE</button>
      </Link>
      
      <div className={css.welcome}>
        <div className={css.logo}>
          <Logo/>
          <h3>Welcome to Milcandy Farm</h3>
          <p>Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi. Morbi eget magna mauris. Pellentesque id ornare augue. Duis dictum dui quis neque fringilla, in dignissim purus sodales. Etiam volutpat mattis turpis</p>
        </div>
        <div>
          <img className={css.img} src={AboutusImgUrl} alt="" />
        </div>
      </div>
      <div>
        <img className={css.signature} src={SignatureImgUrl} alt="" />
      </div>
      <div className={css.gallerybox}>
        <h3 className={css.gallerytitle}>GALLERY</h3>
        <div  className={css.gallery}>
          <img className={css.item} src={Gallery1ImgUrl} alt="" />
          <img className={css.item} src={Gallery2ImgUrl} alt="" />
          <img className={css.item} src={Gallery3ImgUrl} alt="" />
          <img className={css.item} src={Gallery4ImgUrl} alt="" />
          <img className={css.item} src={Gallery5ImgUrl} alt="" />
          <img className={css.item} src={Gallery6ImgUrl} alt="" />
          <img className={css.item} src={Gallery7ImgUrl} alt="" />
          <img className={css.item} src={Gallery2ImgUrl} alt="" />

        </div>
      </div>
    </div>
  )
}

export default HomePage;