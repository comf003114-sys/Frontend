import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { products as mockProducts } from "./data/products";
import type { Product } from "./data/products";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import type { PriceFilter } from "./components/FilterButtons/FilterButtons";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DishDetails from "./pages/DishDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [allProducts] = useState<Product[]>(mockProducts);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = allProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {
      if (priceFilter === "cheap") return p.price < 100;
      if (priceFilter === "medium") return p.price >= 100 && p.price <= 200;
      if (priceFilter === "expensive") return p.price > 200;
      return true;
    });

  const HomePage = () => (
    <Box>
      <Intro />
      <About />
      <Menu search={search} onSearchChange={setSearch} />
      <Box px={4} py={3}>
        <FilterButtons active={priceFilter} onChange={setPriceFilter} />
        <ProductList products={filteredProducts} loading={false} error={null} />
      </Box>
      <Footer />
    </Box>
  );

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh" }}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dishes/:id" element={<DishDetails />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;