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
import { UserAllOrderPage } from "./pages/user/UserAllOrderPage";
import { UserAllFavoritePage } from "./pages/user/UserAllFavoritePage";
import { UserAddressPage } from "./pages/user/UserAddressPage";
import { UserProfilePage } from "./pages/user/UserProfilePage";
import { UserEditAddressPage } from "./pages/user/UserEditAddressPage";
import { UserAddAddressPage } from "./pages/user/UserAddAddressPage";
import { UserEditProfilePage } from "./pages/user/UserEditProfilePage";

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
          <Route
            path="/admin/orderDetails/:id"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/addBrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addCategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addSubCategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addProducts" element={<AdminAddProductsPage />} />
          <Route path="/user/allOrder" element={<UserAllOrderPage />} />
          <Route path="/user/allFavorite" element={<UserAllFavoritePage />} />
          <Route path="/user/address" element={<UserAddressPage />} />
          <Route path="/user/editAddress" element={<UserEditAddressPage />} />
          <Route path="/user/addAddress" element={<UserAddAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/editProfile" element={<UserEditProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
