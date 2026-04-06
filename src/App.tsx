import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { products as mockProducts, Product, } from "./data/products";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
import FilterButtons, { PriceFilter } from "./components/FilterButtons/FilterButtons";

function App() {
  const [search, setSearch] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [allProducts] = useState<Product[]>(mockProducts);

  const filteredProducts = allProducts
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => {
      if (priceFilter === "cheap") return p.price < 100;
      if (priceFilter === "medium") return p.price >= 100 && p.price <= 200;
      if (priceFilter === "expensive") return p.price > 200;
      return true;
    });

  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh" }}>
      <Menu search={search} onSearchChange={setSearch} />
      <Box px={4} py={3}>
        <FilterButtons active={priceFilter} onChange={setPriceFilter} />
        <ProductList
          products={filteredProducts}
          loading={loading}
          error={error}
        />
      </Box>
    </Box>
  );
}

export default App;