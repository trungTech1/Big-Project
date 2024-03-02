// MiniCartContent.tsx
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

interface MiniCartContentProps {
  isMinicartContentVisible: boolean;
  toggleMinicart: () => void;
}

const MiniCartContent: React.FC<MiniCartContentProps> = ({
  isMinicartContentVisible,
  toggleMinicart,
}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  return (
    <div
      className={`minicart-content-wrapper ${
        isMinicartContentVisible ? "show" : ""
      }`}
    >
      <div className="block-title">
        <h3>
          <AiOutlineShoppingCart />
          Giỏ hàng
        </h3>
        <button type="button" className="closeBtn">
          <AiOutlineCloseCircle onClick={toggleMinicart} />
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="block-content">
          <strong className="subtitle empty">
            Giỏ hàng của bạn đang trống
          </strong>
          <div className="ins-content-wrapper">
            <h2>FREESHIP ĐƠN HÀNG TỪ 399K</h2>
            <p>Mua sắm ngay để nhận ngay ưu đãi FREESHIP đơn hàng từ 399k</p>
          </div>
        </div>
      ) : (
        <div className="block-content">
          <div className="products-grid">
            {cartItems.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="subtotal">
              <span>Tạm tính:</span>
              <span>0đ</span>
            </div>
            <div className="grand-total">
              <span>Tổng cộng:</span>
              <span>0đ</span>
            </div>
            <div className="actions">
              <Link to="/checkout">Thanh toán</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniCartContent;
