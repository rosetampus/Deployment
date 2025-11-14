import React, { forwardRef } from "react";

const Cart = forwardRef(({ cart, updateQty, removeFromCart, total }, ref) => {
  if (!cart.length) return null;

  return (
    <div ref={ref} className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl shadow-lg border border-gold-300 transform transition duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-pink-700 mb-6 border-b pb-3 border-gold-200">Shopping Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b border-pink-100 py-4 last:border-b-0"
        >
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
            <p className="text-gray-600 text-base mt-1">
              ${item.price ? item.price.toFixed(2) : "0.00"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQty(item.id, -1)}
              className="px-3 py-1 bg-gold-200 text-pink-800 rounded-full hover:bg-gold-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              −
            </button>
            <span className="text-gray-800 font-medium text-lg">{item.qty}</span>
            <button
              onClick={() => updateQty(item.id, 1)}
              className="px-3 py-1 bg-gold-200 text-pink-800 rounded-full hover:bg-gold-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-rose-600 text-sm hover:text-rose-800 transition-colors duration-200 font-medium"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-8 pt-4 border-t border-gold-300 text-xl font-bold text-pink-700">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
});

export default Cart;
