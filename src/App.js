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

function App() {
  return (
    <div className="App">
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
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
