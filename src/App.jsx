import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Card from "../src/components/Card";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
    console.log(products[1]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <div className="page">
        {products.slice(page * 12 - 12, page * 12).map((product) => (
          <Card product={product} />
        ))}
      </div>
      <Pagination total={products.length} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
