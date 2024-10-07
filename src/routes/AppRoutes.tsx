import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import CartProvider from "../context/CartContext";
import ProductDetail from "../pages/ProductDetail";
import AuthProvider from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Payment";
import { LOGIN } from "../constants/constants";
import { HOME } from "../constants/constants";
import { PRODUCTS } from "../constants/constants";
import { PRODUCT_ID } from "../constants/constants";
import { CART } from "../constants/constants";
import { PAYMENT } from "../constants/constants";

function AppRoutes() {
  return (
    <CartProvider>
      <AuthProvider>
        <Routes>
          <Route path={`${LOGIN}`} element={<Login />} />
          <Route index element={<Navigate to={`${LOGIN}`}></Navigate>} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<AppLayout />}>
              <Route path={`${HOME}`} element={<Home />} />
              <Route path={`${PRODUCTS}`} element={<Product />} />
              <Route path={`${PRODUCT_ID}`} element={<ProductDetail />} />
              <Route path={`${CART}`} element={<Cart />} />
              <Route path={`${CART}/${PAYMENT}`} element={<Payment />} />
            </Route>
            ``
          </Route>
        </Routes>
      </AuthProvider>
    </CartProvider>
  );
}

export default AppRoutes;
