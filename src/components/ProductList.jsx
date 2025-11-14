import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products.js"; 

export default function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 rounded-xl shadow-inner bg-gradient-to-br from-pink-50 to-rose-50">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          description={p.description}
          image={p.image}
          onAddToCart={() => addToCart(p.id)}
        />
      ))}
    </div>
  );
}
