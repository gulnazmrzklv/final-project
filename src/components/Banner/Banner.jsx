import clsx from 'clsx';
import css from './banner.module.css';
import CowImgUrl from '../../assets/cow-banner.svg';
import SplashImgUrl from '../../assets/splash.svg';
import MilkImgUrl from '../../assets/milk-banner.svg';
import { Link } from 'react-router-dom';

function Banner () {
  return(
    <div className={clsx('container',css.banner)}>
      <div className={css.background}>
        <img className={css.cowimg} src={CowImgUrl} alt="" />
        <img className={css.splashimg} src={SplashImgUrl} alt="" />
        <img className={css.milkimg} src={MilkImgUrl} alt="" />
        <div className={css.passage}>
          <h1>We provide you with all natural milk.</h1>
          <p>Nulla efficitur nulla in enim suscipit, pellentesque aliquam odio efficitur. In in aliquet nulla. Cras eu ex eget neque varius rutrum vitae id lacus. Pellentesque quis.</p>
          <Link to="/aboutus">
          <button>DISCOVER MORE</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Banner;