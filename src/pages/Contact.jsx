import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon not showing
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Contact = () => {
  const position = [7.8285, 123.4475]; // Coordinates for Pagadian City, Zamboanga Del Sur, Philippines

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 mb-12 w-full">
        <h1 className="text-4xl font-extrabold text-center text-pink-700 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          We'd love to hear from you! Reach out to us through any of the methods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md">
            <i className="fas fa-envelope text-pink-600 text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
            <p className="text-gray-600">support@ecommerce.com</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md">
            <i className="fas fa-phone-alt text-pink-600 text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
            <p className="text-gray-600">+63 912 345 6789</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 w-full">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">Our Location</h2>
        <div className="h-96 w-full rounded-lg overflow-hidden border-4 border-gold-400">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Pagadian City, Zamboanga Del Sur, Philippines
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
