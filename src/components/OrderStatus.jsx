export default function OrderStatus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto p-8 text-center rounded-xl shadow-lg bg-white border border-gold-300 transform transition duration-300 hover:scale-[1.01] hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-4 text-pink-700">Order Placed Successfully!</h1>
        <p className="text-xl mb-4 text-gray-700">Thank you for your purchase!</p>
        <p className="text-lg mb-6 text-gray-600">Your order is being prepared and will be shipped soon. You will receive an email confirmation shortly.</p>
        <a href="/" className="mt-6 inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-300 font-semibold text-lg transform hover:scale-105">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
