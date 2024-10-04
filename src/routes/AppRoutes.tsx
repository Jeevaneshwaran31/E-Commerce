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

function AppRoutes() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route index element={<Navigate to={"login"}></Navigate>} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<AppLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="products" element={<Product />} />
                <Route path="products/:productId" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </CartProvider>
    </>
  );
}

export default AppRoutes;
