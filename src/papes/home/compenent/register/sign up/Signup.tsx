import "./Signup.scss";

import { AiOutlineClose } from "react-icons/ai";
// import { UserActions } from "@stores/slices/user.slice";
// import { useDispatch } from "react-redux";
import userApi from "@api/index";
import { useForm } from "react-hook-form";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
interface SignupProps {
  modal: (value: boolean) => void;
}

export default function Signup({ modal }: SignupProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  // const dispatch = useDispatch();

  // const onSubmitForm = async (data: any) => {
  //   const { firstname, lastname, email, telephone, password, confirmation } =
  //     data;
  //   if (
  //     !errors.firstname &&
  //     !errors.lastname &&
  //     !errors.email &&
  //     !errors.password &&
  //     !errors.confirmation &&
  //     !errors.telephone
  //   ) {
  //     try {
  //       const res = await userApi.userApi.createUser({
  //         firstname,
  //         lastname,
  //         email,
  //         telephone,
  //         password,
  //         confirmation,
  //       });
  //       if (res.data) {
  //         modal(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  console.log("err", errors);
  const onSubmitForm = async (data: any) => {
    try {
      const dataCopy = { ...data };
      dataCopy.name = `${dataCopy.firstname} ${dataCopy.lastname}`;
      delete dataCopy.faq;
      delete dataCopy.confirmation;
      delete dataCopy.firstname;
      delete dataCopy.lastname;
      const users = await userApi.userApi.getUser();
      const emailExists = users.data.find(
        (user: any) => user.email === dataCopy.email
      );
      if (emailExists) {
        alert("Email đã tồn tại");
        return;
      }
      const res = await userApi.userApi.createUser(dataCopy);
      if (res.data) {
        modal(false);
      }
    } catch (error) {
      console.log(error);
    }
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

        <div className="Signup-form">
          <div className="block-title">
            <h3>ĐĂNG KÝ</h3>
            <span>
              Đăng nhập thành viên Routine
              <br />
              Để nhận nhiều những chương trình ưu đãi hấp dẫn
            </span>
          </div>
          <div className="block-content">
            <form
              className="form create account form-create-account"
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <fieldset className="fieldset create info">
                <div className="field-group-name">
                  <div className="field field-child field-name-lastname required">
                    <label htmlFor="popup_lastname" className="label">
                      Họ
                    </label>
                    <div className="control">
                      <input
                        {...register("lastname", {
                          required: {
                            value: true,
                            message: "Không được để trống",
                          },
                          minLength: {
                            value: 3,
                            message: "Ít nhất 3 ký tự",
                          },
                        })}
                        type="text"
                        id="popup_lastname"
                        name="lastname"
                        placeholder="Họ"
                        title="Họ"
                        className="input-text required-entry"
                      ></input>
                      {/* {errors.lastname && (
                        <div className="mage-error" id="popup_firstname-error">
                          
                        </div>
                      )} */}
                      {errors?.lastname && (
                        <div className="mage-error" id="popup_firstname-error">
                          {errors.lastname.message as ReactNode}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="field field-name-firstname field-child required">
                    <label htmlFor="popup_firstname" className="label">
                      Tên
                    </label>
                    <div className="control">
                      <input
                        {...register("firstname", {
                          required: true,
                          minLength: {
                            value: 3,
                            message: "Ít nhất 3 ký tự",
                          },
                        })}
                        type="text"
                        id="popup_firstname"
                        name="firstname"
                        placeholder="Tên"
                        title="Tên"
                        className="input-text required-entry"
                      ></input>
                      {errors?.firstname && (
                        <div className="mage-error" id="popup_firstname-error">
                          {errors.firstname.message as ReactNode}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="fieldset create account">
                <div className="field">
                  <label htmlFor="popup_email" className="label">
                    Email
                  </label>
                  <div className="control">
                    <input
                      {...register("email", {
                        required: true,
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Email không đúng định dạng",
                        },
                      })}
                      type="email"
                      id="popup_email"
                      name="email"
                      placeholder="Email"
                      title="Email"
                      className="input-text required-entry validate-email"
                    ></input>
                    {errors?.email && (
                      <div className="mage-error" id="popup_firstname-error">
                        {errors.email.message as ReactNode}
                      </div>
                    )}
                  </div>
                </div>
                <div className="field telephone required">
                  <label htmlFor="popup_telephone" className="label">
                    Số điện thoại
                  </label>
                  <div className="control">
                    <input
                      {...register("telephone", {
                        required: true,
                        pattern: {
                          value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                          message: "Số điện thoại không đúng định dạng",
                        },
                        minLength: {
                          value: 10,
                          message: "Ít nhất 10 ký tự",
                        },
                      })}
                      type="text"
                      id="popup_telephone"
                      name="telephone"
                      placeholder="Số điện thoại"
                      title="Số điện thoại"
                      className="input-text required-entry"
                    ></input>
                    {errors?.telephone && (
                      <div className="mage-error" id="popup_firstname-error">
                        {errors.telephone.message as ReactNode}
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="field field-otp required">
                  <label htmlFor="popup_otp" className="label">
                    Mã OTP
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      name="otp"
                      placeholder="Mã OTP"
                      title="Mã OTP"
                      className="input-text required-entry"
                    ></input>
                    <div
                      className="mage-error"
                      id="popup_firstname-error"
                      style={{ display: "none" }}
                    >
                      Đây là trường bắt buộc.
                    </div>
                    <button
                      type="button"
                      className="otp-sender-button btn btn-primary"
                    >
                      <span>Gởi mã OTP</span>
                    </button>
                  </div>
                </div> */}
                <div className="field password required">
                  <label htmlFor="popup_password" className="label">
                    Mật khẩu
                  </label>
                  <div className="control">
                    <input
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 6,
                          message: "Ít nhất 6 ký tự",
                        },
                        validate: {
                          specialChar: (value) =>
                            /[^a-zA-Z0-9]/.test(value) ||
                            "Ít nhất 1 ký tự đặc biệt",
                          number: (value) =>
                            /[0-9]/.test(value) || "Ít nhất 1 số",
                          upperCase: (value) =>
                            /[A-Z]/.test(value) || "Ít nhất 1 chữ cái viết hoa",
                          lowerCase: (value) =>
                            /[a-z]/.test(value) ||
                            "Ít nhất 1 chữ cái viết thường",
                        },
                      })}
                      type="password"
                      name="password"
                      placeholder="Mật khẩu"
                      title="Mật khẩu"
                      className="input-text required-entry"
                    ></input>
                    {errors?.password && (
                      <div className="mage-error" id="popup_firstname-error">
                        {errors.password.message as ReactNode}
                      </div>
                    )}
                  </div>
                </div>
                <div className="field confirmation required">
                  <label htmlFor="popup_confirmation" className="label">
                    Xác nhận mật khẩu
                  </label>
                  <div className="control">
                    <input
                      {...register("confirmation", {
                        required: true,
                        validate: {
                          matchesPreviousPassword: (value) => {
                            const { password } = getValues();
                            return password === value || "Mật khẩu không khớp";
                          },
                        },
                      })}
                      type="password"
                      name="confirmation"
                      placeholder="Xác nhận mật khẩu"
                      title="Xác nhận mật khẩu"
                      className="input-text required-entry"
                    ></input>
                    {errors?.confirmation && (
                      <div className="mage-error" id="popup_firstname-error">
                        {errors.confirmation.message as ReactNode}
                      </div>
                    )}
                  </div>
                </div>
                <div className="field choice faq">
                  <div className="choice-hero">
                    <input
                      {...register("faq", {
                        required: "Bạn phải đồng ý với điều khoản và điều kiện",
                      })}
                      type="checkbox"
                      id="popup_faq"
                      name="faq"
                      className="input-checkbox"
                    />
                    <label htmlFor="popup_is_faq" className="label_checkbox">
                      <span>
                        Tôi đã đọc và đồng ý với{" "}
                        <a href="/faq" target="_blank">
                          điều khoản và điều kiện
                        </a>
                      </span>
                    </label>
                  </div>
                  {errors?.faq && (
                    <div className="mage-error" id="popup_firstname-error">
                      {errors.faq.message as ReactNode}
                    </div>
                  )}
                </div>
              </fieldset>
              <div className="actions-toolbar">
                <div className="primary">
                  <button
                    type="submit"
                    className="action submit primary"
                    title="Đăng ký tài khoản"
                  >
                    <span>Đăng ký tài khoản</span>
                  </button>
                </div>
                <div className="primary-mobile">
                  <Link to="#" className="show-login-popup">
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
