import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 py-12 px-4 sm:px-6 lg:px-8">

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-pink-700 text-center mb-6">Contact Us</h1>

        <p className="text-gray-700 text-lg text-center">
          Need help? We're happy to assist you!
          Reach out through our contact details below or find us on the map.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-pink-50 shadow-md rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-800 mb-2">Phone</h2>
            <p className="text-gray-600">+63 912 345 6789</p>
          </div>

          <div className="p-6 bg-pink-50 shadow-md rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600">tampusrosevene@gmail.com</p>
          </div>

          <div className="p-6 bg-pink-50 shadow-md rounded-lg text-center sm:col-span-2">
            <h2 className="font-bold text-xl text-gray-800 mb-2">Address</h2>
            <p className="text-gray-600">Pagadian City, Zamboanga del Sur, Philippines</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">Find Us On The Map</h2>

        <div className="rounded-xl overflow-hidden shadow-md h-96">
          <iframe
            title="pagadian-map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.502959044217!2d123.43797995!3d7.825682299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ada1bf2cd2bd%3A0x5f86bd26116c0da8!2sPagadian%20City%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1700000670000!5m2!1sen!2sph"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
