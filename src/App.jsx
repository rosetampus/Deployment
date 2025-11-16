import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import OrderStatus from "./components/OrderStatus"; 
import { products as productData } from "./data/products"; 
import axios from 'axios'
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


export default function App() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const cartRef = useRef(null);
  const [orders, setOrders] = useState([]);
  const shopRef = useRef(null);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => {
  const product = productData.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);

 if (existing) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);

      if (cart.length === 0) {
        setTimeout(() => {
          if (cartRef.current) {
            cartRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 0);
      }
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item).filter((item) => item.qty > 0));
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 0), 0);


  useEffect(() => {
    const getAllOrders = async () => {
      try{
        const result = await axios.get('https://ecommerce-backend-lxq0.onrender.com/api/order/orders')
        console.log("Fetched orders:", result)
        setOrders(result.data)
      } catch(error){
        if (error.response && error.response.status === 401) {
          console.warn("Authentication required to fetch orders (401 Unauthorized). Orders not loaded.");
          setOrders([]); // Clear orders if unauthorized
        } else {
          console.error("Error fetching orders:", error)
        }
      }
    }
    getAllOrders()
  },[])

  const handleShopScroll = () => {
    if (shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Navbar onShopClick={handleShopScroll} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-6xl mx-auto p-6">
              <header className="flex justify-between items-center mb-6 border-b pb-4 bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-pink-700">Where flowers meet feelings</h1>
                <div>
                  <button className="bg-gold-500 text-white px-4 py-2 rounded-md hover:bg-gold-600 transition">
                    Cart ({cart.reduce((sum, item) => sum + (item.qty || 0), 0)})
                  </button>
                </div>
              </header>

              <div ref={shopRef} id="products" className="py-8">
                <h2 className="text-4xl font-extrabold text-center text-pink-700 mb-8">Our Products</h2>
                <ProductList addToCart={addToCart} />
              </div>

              <div className="my-10" />

              <Cart ref={cartRef} cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} total={total} />

              {cart.length > 0 && <CheckoutForm total={total} clearCart={clearCart} />}
            </div>
          }
        />

        <Route path="/order-status" element={<OrderStatus />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
