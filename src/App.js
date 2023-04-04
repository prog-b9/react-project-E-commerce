import { Navbar } from "./components/home/Navbar";
import { Footer } from "./components/home/Footer";
import { HomePage } from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { AllCategoryPage } from "./pages/category/AllCategoryPage";
import { AllBrandPage } from "./pages/brand/AllBrandPage";
import { ShopProductsPage } from "./pages/Products/ShopProductsPage";
import { ProductsDetailsPage } from "./pages/Products/ProductsDetailsPage";
import { CartPage } from "./pages/cart/CartPage";
import { PaymentChoosePage } from "./pages/payment/PaymentChoosePage";
import { AdminAllProductsPage } from "./pages/admin/AdminAllProductsPage";
import { AdminAllOrderPage } from "./pages/admin/AdminAllOrderPage";
import { AdminAddBrandPage } from "./pages/admin/AdminAddBrandPage";
import { AdminAddCategoryPage } from "./pages/admin/AdminAddCategoryPage";
import { AdminAddSubCategoryPage } from "./pages/admin/AdminAddSubCategoryPage";
import { AdminAddProductsPage } from "./pages/admin/AdminAddProductsPage";
import { AdminOrderDetailsPage } from "./pages/admin/AdminOrderDetailsPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route
            path="/allCategory"
            element={
              <AllCategoryPage title={"جميع التصنيفات"} btnTitle={false} />
            }
          />
          <Route
            path="/allBrand"
            element={<AllBrandPage title={"جميع الماركات"} btnTitle={false} />}
          />
          <Route
            path="/shopProducts"
            element={
              <ShopProductsPage title={"جميع المنتجات"} btnTitle={false} />
            }
          />
          <Route
            path="/productsDetails/:id"
            element={<ProductsDetailsPage />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pay" element={<PaymentChoosePage />} />
          <Route path="/admin/allProducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allOrder" element={<AdminAllOrderPage />} />
          <Route path="/admin/orderDetails/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addBrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addCategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addSubCategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addProducts" element={<AdminAddProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
