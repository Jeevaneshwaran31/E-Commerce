import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import CartProvider from '../context/CartContext'
import ProductDetail from '../pages/ProductDetail'

function AppRoutes() {
    return (
        <>
            <CartProvider>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route index element={<Navigate to={'login'}></Navigate>} />
                    <Route path='/' element={<AppLayout />}>
                        <Route path='home' element={<Home />} />
                        <Route path='products' element={<Product />} />
                        <Route path='products/:productId' element={<ProductDetail />} />
                        <Route path='cart' element={<Cart />} />
                    </Route>
                </Routes>
            </CartProvider>
        </>
    )
}

export default AppRoutes