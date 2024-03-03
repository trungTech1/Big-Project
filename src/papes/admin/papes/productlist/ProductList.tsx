import "./productList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { productApi } from "@/apis/product.api";

type Product = {
  id: number;
  name: string;
  image: string;
  stock: number;
  status: string;
  price: string;
};

export default function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const res = await productApi.getProduct();
      console.log(res);
      setProduct(res.data);
    };
    getProduct();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await productApi.deleteProduct(id.toString());
      setProduct(product.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={"/admin/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={product}
        disableRowSelectionOnClick
        columns={columns}
        // pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
