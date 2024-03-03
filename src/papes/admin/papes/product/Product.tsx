import { Link, useParams } from "react-router-dom";
import "./product.scss";
import Chart from "@admin/component/charts/Chart";
import PublishIcon from "@mui/icons-material/Publish";
import React, { useEffect, useState } from "react";
import { productApi } from "@/apis/product.api";

export default function Product() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState<any>({
    id: 0,
    name: "",
    sales: 0,
    active: false,
    inStock: false,
    image: "",
  });
  const [formState, setFormState] = useState<any>({
    id: 0,
    name: "",
    sales: 0,
    active: false,
    inStock: false,
    image: "",
  });

  useEffect(() => {
    setFormState({
      id: productInfo.id,
      name: productInfo.name,
      sales: productInfo.sales,
      active: productInfo.active,
      inStock: productInfo.inStock,
      image: productInfo.image,
    });
  }, [productInfo]);

  useEffect(() => {
    const getProductInfo = async () => {
      const res = await productApi.getProduct();
      if (res.status === 200) {
        const data = res.data.find((item: any) => item.id === id);
        setProductInfo(data);
      } else {
        console.log("error");
      }
    };
    getProductInfo();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await productApi.updateProduct(id || "", formState);
      if (res.status === 200) {
        alert("Update success");
        setProductInfo(res.data);
      } else {
        alert("Update fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/admin/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productInfo}
            dataKey="Sales"
            title="Sales Performance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={productInfo.image} alt="" className="productInfoImg" />
            <span className="productName">{productInfo.name ?? ""}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{productInfo.id ?? ""}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">
                {productInfo.sales ?? ""}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">
                {productInfo.active ? "yes" : "no"}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">
                {productInfo.inStock ? "yes" : "no"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={handleUpdate}>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Apple AirPod"
              value={formState.name ?? ""}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
            <label>In Stock</label>
            <select
              name="inStock"
              id="idStock"
              value={formState.inStock ? "yes" : "no"}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  inStock: e.target.value === "yes",
                })
              }
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select
              name="active"
              id="active"
              value={formState.active ? "yes" : "no"}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  active: e.target.value === "yes",
                })
              }
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={formState.image} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
