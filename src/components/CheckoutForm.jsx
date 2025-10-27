import { useNavigate } from "react-router-dom";

export default function CheckoutForm({ total, clearCart }) {
  const navigate = useNavigate(); 

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
      const res = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();
      console.log(data);

      clearCart();

      navigate("/order-status"); 
    } catch (err) {
      console.error(err);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md mt-8" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <input type="text" placeholder="Full Name" required className="border p-2 w-full mb-3 rounded" />
      <input type="email" placeholder="Email Address" required className="border p-2 w-full mb-3 rounded" />
      <input type="number" placeholder="Phone Number" required className="border p-2 w-full mb-3 rounded" />
      <input type="text" placeholder="Shipping Address" required className="border p-2 w-full mb-3 rounded" />
      <p className="text-right font-semibold mb-3">Total: ${total.toFixed(2)}</p>
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
        Place Order
      </button>
    </form>
  );
}
