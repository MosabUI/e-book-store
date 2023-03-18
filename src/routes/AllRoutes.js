import {Routes,Route} from "react-router-dom"
import Cart from "../pages/cart/Cart"
import { DashboardPage } from "../pages/dashboard/DashboardPage"
import Home from "../pages/home/Home"
import { Login } from "../pages/Login"
import { OrderPage } from "../pages/order/OrderPage"
import ProductDetail from "../pages/ProductDetail"
import Products from "../pages/products/Products"
import Register from "../pages/Register"
import {PageNotFound} from "../pages/PageNotFound"
import {ProtectedRoute} from "./ProtectedRoute"

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute> } />
        <Route path="/orders" element={<ProtectedRoute><OrderPage /></ProtectedRoute> } />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute> } />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default AllRoutes