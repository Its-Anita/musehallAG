import aboutImg from '../assets/Images/about.jpeg';

const About = () => {
  return (
    <section className=" w-full px-6 py-16 md:px-12 mt-16" id="about">
    <div className='container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
       {/* Left Side Image */}
        <img
          src={aboutImg}
          alt="Gallery Exhibit"
          className="rounded-xl shadow-xl object-cover w-full h-64 md:h-full sm:h-80"
        />

        {/* Right Side Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Curating Spaces That Radiate Soul, Warmth & Intention
          </h2>

          <p className="text-gray-900 mb-4 text-base md:text-lg leading-relaxed">
           Every piece in our collection is hand-selected for its ability to evoke emotion, spark curiosity, and create an atmosphere of timeless sophistication. 
           We curate art that does more than decorate, it enriches, transforms, and brings meaning to the spaces it inhabits.
          </p>

          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-xl text-gray-900 flex items-center gap-2 ">
                <span className="text-gray-400 text-xl">•</span> Trusted Curation, Enduring Value
              </h3>
              <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
              Our rigorous partnership with artists ensures exceptional quality and investment value. 
              We meticulously refine, enhance, and authenticate every piece, offering you a collection vetted for integrity and power. 
              Investing with us means acquiring art showcased in its most powerful, enduring, and authentic form.               
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-xl text-gray-900 flex items-center gap-2">
                <span className="text-gray-400 text-xl">•</span> The Art of Intentional Curation
              </h3>
              <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
                  We are dedicated partners to artists, transforming creative visions into unforgettable exhibitions.
                  Our team provides intentional curation and hands-on guidance, from artistic development through final presentation.
                  We ensure every piece is showcased with precision, delivering maximum clarity, authenticity, and emotional resonance.
              </p>
            </li>
          </ul>
        </div>

    </div>

    </section>
  )
}

export default About;

