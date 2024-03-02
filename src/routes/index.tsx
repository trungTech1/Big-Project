import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import lazyFn from "./Lazy";
import Admin from "@/papes/admin/admin";
import Dashboard from "@admin/component/dashboard/Dashboard";
import UserList from "@admin/papes/userList/UserList";
import User from "@/papes/admin/papes/user/User";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazyFn(() => import("../papes/home/Home"))} />
        <Route path="admin/*" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
