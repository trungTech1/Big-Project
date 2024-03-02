import { Link } from "react-router-dom";
import {
  AiFillEnvironment,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="footer-row">
          <div className="footer-information">
            <div className="footer-logo">
              <img
                src="https://routine.vn/media/amasty/webp/wysiwyg/ezgif-7-ee007e6332a0_2x_2_png.webp"
                alt="Logo Thương hiệu Routine"
              ></img>
            </div>
            <h3>CÔNG TY TNHH ROUTINE VIETNAM</h3>
            <p>Mã Số Thuế: 0106486365</p>
            <p>
              Văn phòng: tầng 5 Tòa nhà IMC, 62 Trần Quang Khải - Phường Tân
              Định - Quận 1 - TP Hồ Chí Minh.
            </p>
            <h4>THAM GIA BẢNG TIN CỦA CHÚNG TÔI</h4>
            <div className="footer-bct">
              <a href="http://online.gov.vn/Home/WebDetails/52818">
                <img
                  src="https://routine.vn/media/amasty/webp/wysiwyg/image_3-removebg-preview_1_png.webp"
                  alt="Chứng nhận đã khai báo với Bộ Công Thương"
                />
              </a>
            </div>
          </div>
          <div className="footer-about">
            <div className="company">
              <div className="title">
                <h5>Công ty</h5>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <h6>
                      <a
                        href="/gioi-thieu-ve-routine"
                        target="_blank"
                        rel="noopener"
                      >
                        Giới thiệu về ROUTINE
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a
                        href="https://jobs.routine.vn/"
                        target="_blank"
                        rel="noopener"
                      >
                        Tuyển dụng
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="/tin-thoi-trang" target="_blank" rel="noopener">
                        Tin thời trang
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a
                        href="https://routine.vn/franchise"
                        target="_blank"
                        rel="noopener"
                      >
                        Hợp tác nhượng quyền
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a
                        href="/thong-tin-lien-he"
                        target="_blank"
                        rel="noopener"
                      >
                        Liên hệ
                      </a>
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-social">
              <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
              <ul className="social-link">
                <li>
                  <Link to="/">
                    <AiFillFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <AiFillInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <AiFillYoutube />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <AiOutlineTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-policy">
            <div className="policy">
              <div className="title">
                <h5>Chính sách</h5>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <h6>
                      <a
                        href="/chinh-sach-bao-mat"
                        target="_blank"
                        rel="noopener"
                      >
                        Chính sách bảo mật
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a
                        href="/chinh-sach-van-chuyen"
                        target="_blank"
                        rel="noopener"
                      >
                        Chính sách vận chuyển
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a
                        href="/chinh-sach-doi-tra"
                        target="_blank"
                        rel="noopener"
                      >
                        Chính sách đổi trả
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a
                        href="/chinh-sach-bao-hanh"
                        target="_blank"
                        rel="noopener"
                      >
                        Chính sách bảo hành
                      </a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a
                        href="/chinh-sach-thanh-toan"
                        target="_blank"
                        rel="noopener"
                      >
                        Chính sách thanh toán
                      </a>
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-store">
            <div className="store_info">
              <div className="title">
                <h5>Thông tin cửa hàng</h5>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <h4 className="store-name">
                      <AiFillEnvironment />
                      Cửa hàng thứ 34
                    </h4>
                    <p>
                      F15 tầng 1 AEON Mall Tân Phú, 30 Bờ Bao Tân Thắng, Phường
                      Sơn Kỳ, TP Hồ Chí Minh
                    </p>
                  </li>
                  <li>
                    <h4 className="store-name">
                      <AiFillEnvironment />
                      Cửa hàng thứ 33
                    </h4>
                    <p>
                      809 Giải Phóng, Phường Giáp Bát, Quận Hoàng Mai, TP Hà Nội
                    </p>
                  </li>
                  <li>
                    <h4 className="store-name">
                      <AiFillEnvironment /> Cửa hàng thứ 32
                    </h4>
                    <p>
                      192 - 194 Hoa Lan, Phường 2, Quận Phú Nhuận, TP Hồ Chí
                      Minh
                    </p>
                  </li>
                </ul>
                <a href="">Xem tất cả cửa hàng</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
