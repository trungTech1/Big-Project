import "./Header.scss";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import AuthenMenu from "./component/AuthenMenu";
import WishlistContent from "./component/Wishlist";
import MiniCartContent from "./component/MiniCartContent";

interface HeaderProps {
  modal: (value: boolean) => void;
  showSignup: (value: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({ modal, showSignup }) => {
  const [isShowAuthen, setIsShowAuthen] = useState<boolean>(false);

  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  const [isMinicart, setIsMinicart] = useState<boolean>(false);

  const authenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        authenRef.current &&
        !authenRef.current.contains(event.target as Node)
      ) {
        setIsShowAuthen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleMinicart = () => {
    setIsMinicart(!isMinicart);
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const loginClick = () => {
    modal(true);
  };
  const signupClick = () => {
    showSignup(true);
  };
  return (
    <header>
      <div className="header-container">
        {isWishlist && <div className="overlay" onClick={toggleWishlist}></div>}
        {isMinicart && <div className="overlay" onClick={toggleMinicart}></div>}
        <div className="header-logo col-lg-2">
          {" "}
          <Link to="/">
            <img
              className="logo"
              src="https://routine.vn/media/amasty/webp/logo/websites/1/logo-black-2x_png.webp"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-list col-lg-4">
          <ul>
            <li>
              <Link to={""}>Nam</Link>
            </li>
            <li>
              <Link to={""}>Nữ</Link>
            </li>
            <li>
              <Link to={""}>New</Link>
            </li>
            <li>
              <Link to={""}>Best</Link>
            </li>
          </ul>
        </div>

        <div className="hero-search-container col-lg-4">
          <div className="hero_search_form">
            <form action="">
              <input type="text" placeholder="Bạn đang tìm gì?" />
              <span>
                <AiOutlineSearch />
              </span>
            </form>
          </div>
          <WishlistContent
            isWishlistContentVisible={isWishlist}
            toggleWishlist={toggleWishlist}
          />
          <MiniCartContent
            isMinicartContentVisible={isMinicart}
            toggleMinicart={toggleMinicart}
          />
          <div className="header-top-icon">
            <div className="header-right">
              <div className="authen-box" ref={authenRef}>
                <div
                  className="header-right-icon"
                  onClick={() => {
                    setIsShowAuthen(!isShowAuthen);
                  }}
                >
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                </div>
                <AuthenMenu
                  isShowAuthen={isShowAuthen}
                  loginClick={loginClick}
                  signupClick={signupClick}
                />
              </div>
              <div className="link-wishlist">
                <div className="header-right-icon" onClick={toggleWishlist}>
                  <Link to={""}>
                    <AiOutlineHeart />
                  </Link>
                </div>
              </div>

              <div className="header-right-icon" onClick={toggleMinicart}>
                <Link to={""}>
                  <AiOutlineShoppingCart />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
