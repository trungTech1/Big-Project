import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import lazyFn from "./Lazy";
import Admin from "@/papes/admin/admin";
import Dashboard from "@admin/component/dashboard/Dashboard";
import UserList from "@admin/papes/userList/UserList";
import User from "@/papes/admin/papes/user/User";
import NewUser from "@/papes/admin/papes/newuser/NewUser";
import ProductList from "@/papes/admin/papes/productlist/ProductList";
import Product from "@/papes/admin/papes/product/Product";
import NewProduct from "@/papes/admin/papes/newproduct/NewProduct";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazyFn(() => import("../papes/home/Home"))} />
        <Route path="admin/*" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserList />} />
          <Route path="user" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="newProduct" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
