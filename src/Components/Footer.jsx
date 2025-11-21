import { FaInstagram, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";
import Logo from '../assets/Images/logo.jpeg';
const Footer = () => {
  return (
   <footer className="bg-amber-900 text-black">
      <div className="max-w-6xl mx-auto px-4 lg:px-12 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-300 pb-6 gap-4">

        <div className='flex items-center gap-1'>
           <a href='#'>
                <img src={Logo} alt="Logo" className="h-12 w-12 m-4"/>
            </a>
          <h1 className="text-2xl font-bold text-center sm:text-left">ArtHouse Gallery</h1>
        </div>
          {/* Social Icons */}
          <div id="contact" className="flex space-x-4 sm:space-x-6 text-xl justify-center sm:justify-start">
            <FaInstagram  />
            <FaTwitter  />
            <FaPinterest />
            <FaLinkedin  />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-sm text-center sm:text-left">
          {/* Exhibitions */}
          <div>
            <h3 className="font-bold mb-4">Exhibitions</h3>
            <ul className="space-y-2">
              {["Upcoming", "Current", "Past", "Virtual"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Artists */}
          <div>
            <h3 className="font-bold mb-4">Artists</h3>
            <ul className="space-y-2">
              {["Featured", "Emerging", "Collaborations", "Submit Work"].map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {["Our Story", "Press", "Careers", "Contact"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-bold mb-4">Visit</h3>
            <ul className="space-y-2">
              {["Location", "Hours", "Guided Tours", "Events"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm border-t border-gray-300 pt-6 text-black">
          © The MuseHall Gallery {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
    </footer>

  )
}

export default Footer
