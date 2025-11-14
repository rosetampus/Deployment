import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

export default function CheckoutForm({ total, clearCart }) {
  const navigate = useNavigate(); 
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      name: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      address: form[3].value,
      total,
    };

    try {
      const res = await axios.post("https://ecommerce-backend-lxq0.onrender.com/api/order/createCheckout", orderData, {
        headers: { "Content-Type": "application/json" }
      });
      
      if(res.data.status === 'success'){
       setIsLoading(true)

        setTimeout(() => {
          navigate("/order-status"); 
          setIsLoading(false)
          clearCart();
        },3000)
      }

      
    } catch (err) {
      console.error(err);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <form className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl shadow-lg mt-8 border border-gold-300 transform transition duration-300 hover:scale-[1.01] hover:shadow-2xl" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-pink-700 mb-6 border-b pb-3 border-gold-200">Checkout</h2>
      <input type="text" placeholder="Full Name" required className="border border-gold-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-3 w-full mb-4 rounded-lg outline-none transition-all duration-200" />
      <input type="email" placeholder="Email Address" required className="border border-gold-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-3 w-full mb-4 rounded-lg outline-none transition-all duration-200" />
      <input type="number" placeholder="Phone Number" required className="border border-gold-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-3 w-full mb-4 rounded-lg outline-none transition-all duration-200" />
      <input type="text" placeholder="Shipping Address" required className="border border-gold-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-3 w-full mb-6 rounded-lg outline-none transition-all duration-200" />
      <p className="text-right font-bold text-xl text-pink-700 mb-6">Total: ${total.toFixed(2)}</p>
      <button type="submit" className="w-full cursor-pointer bg-pink-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors duration-300 font-semibold text-lg transform hover:scale-105" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  );
}
