import React from "react";

const ProductCard = ({ name, price, description, image, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-gold-500 font-bold text-xl mt-2">${price}</p>

        <button
          onClick={onAddToCart}
          className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors duration-300 transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

