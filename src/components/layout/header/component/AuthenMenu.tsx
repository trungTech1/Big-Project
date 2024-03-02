import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface AuthenMenuProps {
  isShowAuthen: boolean;
  loginClick: () => void;
  signupClick: () => void;
}
const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

const AuthenMenu: React.FC<AuthenMenuProps> = ({
  isShowAuthen,
  loginClick,
  signupClick,
}) => {
  const user = useSelector((state: any) => state.user.user);
  console.log("user", user);
  const isLoggedIn = !!user;
  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    isShowAuthen && (
      <ul className={isShowAuthen ? "" : "hiden"}>
        {isLoggedIn ? (
          <li className="customer-welcome">
            <Link className="customer-name" to={""}>
              Xin chào {user.email}
            </Link>
            <div className="customer-rank">
              <span>NEW</span>
            </div>
          </li>
        ) : (
          <li className="authen">
            <button className="signIn" onClick={loginClick}>
              Đăng nhập
            </button>
            <button className="register" onClick={signupClick}>
              Đăng ký
            </button>
          </li>
        )}

        <li>
          <Link to={""}>Theo dõi đơn hàng</Link>
        </li>
        <li>
          <Link to={""}>Khách hàng thành viên</Link>
        </li>
        <li>
          <Link to={""}>Danh sách cửa hàng</Link>
        </li>
        {isLoggedIn && <button onClick={logout}>Đăng xuất</button>}
      </ul>
    )
  );
};

export default AuthenMenu;
