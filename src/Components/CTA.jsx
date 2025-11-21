import ctaOverlay from '../assets/Images/ctaimg.jpeg';

const CTA = () => {
  return (
    <section className="relative w-full bg-amber-700">

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Left Side Empty */}
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={ctaOverlay}
            alt="Art Overlay"
            className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-xl shadow-xl object-cover"
          />
        </div>
        {/* Right Side Text */}
        <div className="md:w-1/2 text-center md:text-left text-gray-900">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-sm">
            Become a Patron of the Arts
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white leading-relaxed">
            Join our exclusive circle to access new exhibitions, artist previews, 
            and limited edition releases. Immerse yourself in creativity curated 
            for true art enthusiasts.
          </p>

          {/* Input + Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-72 text-gray-900 bg-white focus:outline-semibold focus:ring-2 focus:ring-gray-700"
            />
            <button
              className="bg-black px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none
                         font-semibold text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}

export default CTA;
