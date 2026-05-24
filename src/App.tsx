import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import Favorites from "./pages/Favorites";
import AboutPage from "./pages/AboutPage";
import WinePage from "./pages/WinePage";
import WineDetails from "./pages/WineDetails";
import { getDishes } from "./api";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [apiError, setApiError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getDishes()
      .then((data) => {
        if (Array.isArray(data)) {
          const mapped: Product[] = data.map((d: any) => ({
            id: d.id,
            name: d.name,
            price: d.price,
            category: d.categoryId?.toString()  "main",
            image: d.imageUrl  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
            weight: 300,
            time_to_cook: 20,
          }));
          setAllProducts(mapped);
        }
      })
      .catch(() => setApiError("Не удалось загрузить меню"));
  }, []);

  const filteredProducts = allProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {
      if (priceFilter === "cheap") return p.price < 100;
      if (priceFilter === "medium") return p.price >= 100 && p.price <= 200;
      if (priceFilter === "expensive") return p.price > 200;
      return true;
    });

  const favoriteProducts = allProducts.filter((p) =>
    favorites.includes(p.id)
  );

  const HomePage = () => (
    <Box>
      <Intro />
      <About />
      <Menu search={search} onSearchChange={setSearch} />
      <FilterButtons active={priceFilter} onChange={setPriceFilter} />
      <ProductList
        products={filteredProducts}
        loading={false}
        error={apiError}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
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
            <Header favoritesCount={favorites.length} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dishes/:id" element={<DishDetails />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/favorites"
                element={
                  <Favorites
                    products={favoriteProducts}
                    onToggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/wine" element={<WinePage />} />
              <Route path="/wine/:id" element={<WineDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;