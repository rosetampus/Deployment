import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex md:items-center transform transition duration-500 hover:scale-105">
        <div className="md:flex-shrink-0">
          <img className="h-56 w-full object-cover md:w-56" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTI2MDJ8MHwxfHNlYXJjaHw1fHxlY29tbWVyY2UlMjBhYm91dHxlbnwwfHx8fDE3MDAwMDAwMDB8MA&ixlib=rb-4.0.3&q=80&w=400" alt="About Us Image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-pink-600 font-semibold">About Us</div>
          <h1 className="mt-2 text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Welcome to our e-commerce platform! We are dedicated to providing you with the best online shopping experience, offering a wide range of high-quality products at competitive prices. Our journey began with a passion for bringing convenience and joy to our customers' lives through seamless online retail.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            We believe in strong customer relationships, exceptional service, and continuous improvement. Our team works tirelessly to curate the latest trends and ensure every product meets our stringent quality standards. From fashion to electronics, home goods to unique gifts, we strive to be your one-stop shop for all your needs.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-pink-600">Our Mission</h2>
            <p className="mt-2 text-gray-600">To deliver unparalleled value and a delightful shopping experience to every customer, every time.</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-pink-600">Our Vision</h2>
            <p className="mt-2 text-gray-600">To be the leading e-commerce platform recognized for its innovation, customer satisfaction, and commitment to quality.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Our Values & Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md">
            <i className="fas fa-gem text-gold-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Quality Products</h3>
            <p className="text-gray-600 mt-2">We handpick every item, ensuring the highest standards of quality and durability for our customers.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md">
            <i className="fas fa-hands-helping text-gold-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Exceptional Service</h3>
            <p className="text-gray-600 mt-2">Our dedicated support team is always ready to assist you, ensuring a smooth and pleasant shopping journey.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md">
            <i className="fas fa-shield-alt text-gold-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Secure Shopping</h3>
            <p className="text-gray-600 mt-2">Shop with confidence knowing your data and transactions are protected with top-tier security measures.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md">
            <i className="fas fa-truck text-gold-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">We strive to deliver your purchases quickly and efficiently, right to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
