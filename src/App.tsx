import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Admin,
  AllProducts,
  Cart,
  Categories,
  Home,
  Login,
  NotFound,
  Orders,
  Products,
  SignUp,
  Users,
} from "./app.modules";
import {Search} from "./pages/Search";
import { Details } from "./pages/Details";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

const routes = [
  { id: 1, path: "*", component: NotFound },
  { id: 2, path: "/", component: Home },
  { id: 3, path: "/signup", component: SignUp },
  { id: 4, path: "/signin", component: Login },
  { id: 5, path: "/admin", component: Admin },
  { id: 6, path: "/admin/product", component: Products },
  { id: 7, path: "/admin/category", component: Categories },
  { id: 8, path: "/admin/user", component: Users },
  { id: 9, path: "/admin/order", component: Orders },
  { id: 10, path: "/category/:id", component: AllProducts },
  { id: 11, path: "/cart", component: Cart },
  { id: 12, path: "/search", component: Search },
  { id: 13, path: "/product/:id", component: Details }
];
