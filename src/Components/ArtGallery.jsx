import React, { useState } from 'react';
import artwork1 from '../assets/Images/eternal_bloom.jpeg';
import artwork2 from '../assets/Images/whispering_shadows.jpeg';
import artwork3 from '../assets/Images/golden_horizon.jpeg';
import artwork4 from '../assets/Images/mystic_forest.jpeg';
import artwork5 from '../assets/Images/silent_echoes.jpeg';
import artwork6 from '../assets/Images/urban_rhythm.jpeg';
import artwork7 from '../assets/Images/celestial_dreams.jpeg';
import artwork8 from '../assets/Images/abstract_serenity.jpeg';

const ArtGallery = () => {
  const [modalArt, setModalArt] = useState(null);
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });

  const artPieces = [
    { img: artwork1, name: "Eternal Bloom", price: "$800", beforePrice: "$1000" },
    { img: artwork2, name: "Whispering Shadows", price: "$950", beforePrice: "$1200" },
    { img: artwork3, name: "Golden Horizon", price: "$700", beforePrice: "$900" },
    { img: artwork4, name: "Mystic Forest", price: "$1100", beforePrice: "$1400" },
    { img: artwork5, name: "Silent Echoes", price: "$650", beforePrice: "$850" },
    { img: artwork6, name: "Urban Rhythm", price: "$780", beforePrice: "$1000" },
    { img: artwork7, name: "Celestial Dreams", price: "$1200", beforePrice: "$1500" },
    { img: artwork8, name: "Abstract Serenity", price: "$900", beforePrice: "$1100" },
  ];

  const openModal = (art) => setModalArt(art);
  const closeModal = () => {
    setModalArt(null);
    setFormData({ name: '', address: '', payment: '', email: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your Order has been Placed Successfully.`);
    closeModal();
  };

  return (
    <section id="allfeatures" className=" py-16 px-6 md:px-16 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Artworks</h2>
      <p className="text-gray-900 text-base sm:text-lg max-w-xl mx-auto mb-10">
        Discover curated pieces that inspire, provoke, and transform spaces. Each artwork tells its own unique story.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {artPieces.map((art, i) => (
          <div key={i} className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 p-4 flex flex-col items-center">
            <img
              src={art.img}
              alt={art.name}
              className="w-full h-48 sm:h-56 md:h-48 object-cover rounded-xl mb-3 sm:mb-4"
            />
            <button
              onClick={() => openModal(art)}
              className="absolute bottom-2 right-2 bg-amber-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-yellow-500 shadow-md"
            >+</button>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{art.name}</h3>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-gray-800 font-bold">{art.price}</span>
              <span className="text-gray-400 line-through">{art.beforePrice}</span>
            </div>
          </div>
        ))}
      </div>

      {modalArt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-11/12 sm:w-96">
            <h2 className="text-xl font-bold mb-4">{modalArt.name} - Order Form</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Your Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="number"
                placeholder="Payment Method"
                value={formData.payment}
                onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button type="button" onClick={closeModal} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-500">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtGallery;
