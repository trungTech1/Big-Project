import { Link } from "react-router-dom";
import "./baner.scss";

const Banner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner-hero">
        <div className="home-banner-item">
          <Link to={""}>
            <img
              src="https://routine.vn/media/amasty/webp/wysiwyg/New_Arrivals_Men_jpg.webp"
              alt="New arrivals men"
            />
          </Link>
        </div>
        <div className="home-banner-item">
          <Link to={""}>
            <img
              src="https://routine.vn/media/amasty/webp/wysiwyg/TET_GIEO_LOC_jpg.webp"
              alt="Ưu đãi mua 2 giảm 15 | Mua 3 giảm 30"
            />
          </Link>
        </div>
        <div className="home-banner-item">
          <Link to={""}>
            <img
              src="https://routine.vn/media/amasty/webp/wysiwyg/New_Arrivals_Women_jpg.webp"
              alt="New arrivals women"
            />
          </Link>
        </div>
      </div>

      <div className="home-banner-big">
        <Link to={""}>
          <img
            src="https://routine.vn/media/amasty/webp/wysiwyg/banner_web-08_jpg.webp"
            alt="Tet Gieo Loc"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
