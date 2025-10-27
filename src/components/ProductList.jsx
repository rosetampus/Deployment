import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products.js"; 

export default function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
