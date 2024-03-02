import React, { ChangeEvent, FC } from "react";
import "./Signin.scss";
import { AiOutlineClose } from "react-icons/ai";
import { loginWithGoogle } from "@/firebase/firebase";
import userApi from "@api/index";
import * as jose from "jose";

interface SigninProps {
  modal: (value: boolean) => void;
}

const Signin: FC<SigninProps> = ({ modal }) => {
  const [loginOption, setLoginOption] = React.useState("email");

  const createToken = async (
    id: string,
    name: string,
    email: string,
    password: string
  ) => {
    const data = {
      id,
      name,
      email,
      password,
    };
    const jwt = await new jose.SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode("quangtrungdn94"));
    return jwt;
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle().then((res) => {
      console.log("res", res);
      modal(false);
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    userApi.userApi
      .getUser()
      .then(async (res) => {
        const user = res.data.find((user: any) => user.email === email);
        if (user && user.password === password) {
          console.log("Login success");
          const token = await createToken(
            user.id,
            user.name,
            user.email,
            user.password
          );
          localStorage.setItem("token", token);
          modal(false);
        } else {
          console.log("Login failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginOption(e.target.value);
  };
  return (
    <div className="modal_login">
      <div className="modal-inner-wrap">
        <header className="modal-header">
          <button
            className="action-close"
            onClick={() => {
              modal(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </header>
        <div className="login-form">
          <form
            onSubmit={(e) => {
              handleLogin(e);
            }}
          >
            <div className="block-title">
              <h3>ĐĂNG NHẬP</h3>
              <span>
                Đăng nhập thành viên Routine
                <br />
                Để nhận nhiều những chương trình ưu đãi hấp dẫn
              </span>
            </div>
            <fieldset className="fieldset login">
              <div className="field choice sparsh-mobile-number-login-option">
                <label className="label sparsh-email-user active">
                  <input
                    type="radio"
                    name="login_option"
                    value="email"
                    checked={loginOption === "email"}
                    onChange={handleOptionChange}
                  />
                  <span>Email</span>
                </label>
                <label className="label sparsh-mobile-user">
                  <input
                    type="radio"
                    name="login_option"
                    value="mobile"
                    checked={loginOption === "mobile"}
                    onChange={handleOptionChange}
                  />
                  <span>Số điện thoại</span>
                </label>
              </div>
              <div
                className="field sparsh-user-name sparsh-email required"
                style={{ display: loginOption === "email" ? "block" : "none" }}
              >
                <label className="label" htmlFor="email">
                  Email
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="input-text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div
                className="field sparsh-user-name sparsh-mobile-number required"
                style={{ display: loginOption === "mobile" ? "block" : "none" }}
              >
                <label className="label" htmlFor="mobile_number">
                  Số điện thoại
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="mobile_number"
                    name="mobile_number"
                    className="input-text"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>
              <div
                className="field otp-login required"
                style={{ display: "none" }}
              >
                <label className="label" htmlFor="otp">
                  Mã OTP
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    className="input-text"
                  />
                </div>
              </div>
              <div
                className="field password sparsh-password required"
                style={{ display: loginOption === "email" ? "block" : "none" }}
              >
                <label className="label" htmlFor="password">
                  Mật khẩu
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input-text"
                    placeholder="Mật khẩu"
                  />
                </div>
              </div>
              <div className="actions-toolbar">
                <div className="primary">
                  <a href="/forgot-password">Quên mật khẩu?</a>
                </div>
                <div className="secondary">
                  <button type="submit" className="action login primary">
                    Đăng nhập
                  </button>
                </div>
              </div>
              <div className="other-login">
                <div className="wrapper-title-social">
                  <span className="text-or-social">Hoặc</span>
                </div>
                <button className="modal-socialogin modal-facebook facebook_button_connect">
                  <span>Đăng nhập với facebook </span>
                </button>
                <button
                  className=" modal-socialogin modal-google google_button_connect"
                  onClick={handleLoginWithGoogle}
                >
                  <span>Đăng nhập với google</span>
                </button>
              </div>
              <div className="secondary">
                <span>Bạn chưa có tài khoản?</span>
                <a href="#" className="action action-open-register">
                  Đăng ký thành viên
                </a>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
