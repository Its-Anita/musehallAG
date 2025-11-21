import bestImage from '../assets/Images/bestgallery.jpeg';

const BestGallery = () => {
  return (
     <section className=" w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12">
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Acclaimed Works, Authentic Connections
        </h2>

        <p className="text-gray-900 max-w-md mx-auto md:mx-0 text-base sm:text-lg md:text-lg leading-relaxed">
            For us, every piece of art is a conversation, not just a commodity.
            We don't simply select art; we enter into a personal partnership with the artist, deeply understanding the soul and story behind their work. This genuine connection means that when you acquire a piece, you're getting far more than its form and materials. You're receiving a work chosen with sincere care and expert passion for its ability to transform your world. 
            Whether it's a piece of bold contemporary history or a portrait that speaks softly to your heart, we promise you art that truly moves you.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={bestImage}
          alt="Art Piece Showcase"
          className="rounded-2xl shadow-xl w-full max-w-md sm:max-w-md md:max-w-lg object-cover h-64 sm:h-80 md:h-96"
        />
      </div>

    </section>

  )
}

export default BestGallery;
