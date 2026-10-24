import { Routes, Route } from "react-router-dom";

import Navbaar from "./Component/Navbaar";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import AllCategory from "./Component/AllCategory";
import Footer from "./Pages/footer";
import AllProduct from "./Pages/AllProduct";
import Login from "./Pages/login";

const App = () => {
  return (
    <>
      <Navbaar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category" element={<Category />} />

<Route path="/all-categories" element={<AllCategory />} />

        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>

      <Footer />
      </>

  );
};

export default App;