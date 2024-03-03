import "./newProduct.scss";
import React, { useState } from "react";
import { productApi } from "@/apis/product.api";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [active, setActive] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [clothes, setClothes] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !stock || !gender || !image || !price || !type || !clothes) {
      alert("Vui lòng điền đầy đủ thông tin cho sản phẩm.");
      return;
    }
    const formData = {
      name,
      price,
      image,
      stock,
      gender,
      active,
      type,
      clothes,
    };

    try {
      const res = await productApi.createProduct(formData);
      console.log(res);

      alert("Product created successfully");
      setName("");
      setStock("");
      setActive("");
      setGender("");
      setImage("");
      setPrice("");
      setType("");
      setClothes("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="text"
            id="file"
            placeholder="Nhập link ảnh"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="text"
            placeholder="Số lượng"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="Nhập giá"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>gender</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="tshirt">Tshirt</option>
            <option value="shirt">Shirt</option>
            <option value="jeans">Jeans</option>
            <option value="jacket">Jacket</option>
            <option value="shoes">Shoes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>clothes</label>
          <select
            name="clothes"
            id="clothes"
            value={clothes}
            onChange={(e) => setClothes(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="tshirt">Áo</option>
            <option value="jeans">Quần</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select
            name="active"
            id="active"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
