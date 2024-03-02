// WishlistContent.tsx
import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineCloseCircle,
  AiOutlineExclamation,
} from "react-icons/ai";

interface WishlistContentProps {
  isWishlistContentVisible: boolean;
  toggleWishlist: () => void;
}

const WishlistContent: React.FC<WishlistContentProps> = ({
  isWishlistContentVisible,
  toggleWishlist,
}) => {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  return (
    <div
      className={`wishlist-content ${isWishlistContentVisible ? "show" : ""}`}
    >
      <div className="wishlist-content-title">
        <div className="modal-header">
          <h3>
            <AiOutlineHeart />
            Sản phẩm yêu thích
          </h3>
          <button type="button" className="closeBtn">
            <AiOutlineCloseCircle onClick={toggleWishlist} />
          </button>
        </div>
        <div className="modal-content">
          {wishlistItems.length === 0 ? (
            <div className="message info empty">
              <span>
                <AiOutlineExclamation />
                Danh sách yêu thích này không có sản phẩm nào
              </span>
            </div>
          ) : (
            <div className="products-grid wishlist">
              {wishlistItems.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistContent;
