import React, { forwardRef } from "react";

const Cart = forwardRef(({ cart, updateQty, removeFromCart, total }, ref) => {
  if (!cart.length) return null;

  return (
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-500">
              ${item.price ? item.price.toFixed(2) : "0.00"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQty(item.id, -1)}
              className="px-2 bg-gray-200 rounded"
            >
              −
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => updateQty(item.id, 1)}
              className="px-2 bg-gray-200 rounded"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-5 text-lg font-semibold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
});

export default Cart;
