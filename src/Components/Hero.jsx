import Logo from '../assets/Images/logo.jpeg';
import heroBg from '../assets/Images/gallery.jpeg';

const Hero = () => {
  return (
    <section
      id='landingpage' className="relative bg-cover bg-center text-white shadow-lg h-[90vh] sm:h-[80vh] md:h-[90vh] "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
    <div className='relative w-full top-0 left-0 z-50 bg-transparent'>
    <div className="flex flex-col md:flex-row justify-between items-center">
            <div className='flex items-center gap-1'>
            <a href='#'>
                <img src={Logo} alt="Logo" className="h-12 w-12 m-4"/>
            </a>
            <h1 className="text-4xl font-bold p-4 text-black">The MuseHall</h1>
            </div>
            {/* Navbar */}
            <nav className=" p-4 text-gray-900 font-semibold">
              <ul className="flex space-x-4">
                <li><a href="#home" onClick={() => window.location.href = '#landingpage'}>Home</a></li>
                <li><a href="#about" onClick={() => window.location.href = '#about'} >About</a></li>
                <li><a href="#services" >Exhibitions</a></li>
                <li><a href="#artists" >Artists</a></li>
                <li><a href="#contact" onClick={() => window.location.href = '#contact'} >Contact</a></li>
              </ul>
            </nav>
    
          </div>
        </div>
    <div>
       <div className="relative container mx-auto text-center px-6 md:px-16 mt-20 md:mt-32">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Discover the Soul of Contemporary Art
        </h2>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-900 font-semibold mb-6">
          Dive into a sanctuary where curated masterpieces inspire, challenge, and captivate.
            <br/>
          We are more than a gallery, we are a destination for the discerning eye a place where art lovers and collectors find singular works of profound distinction that define culture and transform space.
        </p>

        <button className="bg-amber-700  px-10 py-3 rounded-full text-white font-semibold"
        onClick={() => window.location.href = '#allfeatures'}>
          Explore Gallery
        </button>
      </div>
        
        <div
        className="relative left-1/2 transform -translate-x-1/2 bottom-[-50px] 
                      bg-amber-700 text-black rounded-xl shadow-xl 
                      grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 
                      px-4 sm:px-6 md:px-12 mb-12 py-6 w-[95%] sm:w-[90%] md:w-[60%] text-center"
      >
        <div>
          <h3 className="text-3xl font-bold">15</h3>
          <p className="text-gray-900 text-sm">Years Curating</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-gray-900 text-sm">Featured Artists</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-gray-900 text-sm">Exhibitions Held</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">10k+</h3>
          <p className="text-gray-900 text-sm">Visitors Served</p>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Hero;
