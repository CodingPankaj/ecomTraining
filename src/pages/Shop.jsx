import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import axios from "axios";

export const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setAllProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <section className="px-4 py-7">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
