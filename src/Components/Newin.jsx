import new1 from '../assets/Images/newin.jpeg';
import new2 from '../assets/Images/newin1.jpeg';
import new3 from '../assets/Images/newin2.jpeg';
import new4 from '../assets/Images/newin3.jpeg';  

const Newin = () => {
    
    const artworkTitles = [
        "The Gilded Cage",
        "Echoes of Tomorrow",
        "Infinite Horizon",
        "Silent Dialogue"
    ];

    return (
        <section className=" flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-16 ">
            
            {/* TEXT */}
            <div className="md:w-1/3 text-center md:text-left space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Discover Our Latest Curated Works
                </h2>

                <p className="text-gray-900 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed">
                    We invite you to discover our premier new arrivals, representing significant recent works by both established masters and emerging talents. 
                    This selection showcases pieces chosen for their defining artistic voice and their capacity to introduce compelling narratives and singular distinction to your private collection or space.
                </p>

                <button className="bg-amber-700 px-8 py-3 rounded-full text-white font-semibold shadow-md">
                    Explore New Art
                </button>
            </div>

            {/* IMAGES */}
            <div className="md:w-2/3 mt-12 md:mt-0 flex justify-center items-center gap-4 w-full h-auto flex-wrap sm:flex-nowrap">
                
                <div className="w-1/2 sm:w-1/4 relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-xl   group">
                    <img
                        src={new1}
                        alt="New Art 1"
                        className="w-full h-full object-cover border border-neutral-200 "
                    />
                    <div className="absolute inset-0 flex items-end p-2 ">
                        <p className="text-white text-xs sm:text-sm font-semibold ">
                            {artworkTitles[0]}
                        </p>
                    </div>
                </div>
                
                <div className="w-1/2 sm:w-1/4 relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-xl shadow-lg group">
                    <img
                        src={new2}
                        alt="New Art 2"
                        className="w-full h-full object-cover border border-neutral-200 "
                    />
                    <div className="absolute inset-0 flex items-end p-2">
                        <p className="text-white text-xs sm:text-sm font-semibold ">
                            {artworkTitles[1]}
                        </p>
                    </div>
                </div>
                
                <div className="w-1/2 sm:w-1/4 relative h-48 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-lg group">
                    <img
                        src={new3}
                        alt="New Art 3"
                        className="w-full h-full object-cover border border-neutral-200"
                    />
                    <div className="absolute inset-0 flex items-end p-2 ">
                        <p className="text-white text-xs sm:text-sm font-semibold ">
                            {artworkTitles[2]}
                        </p>
                    </div>
                </div>
                
                <div className="w-1/2 sm:w-1/4 relative h-48 sm:h-64 md:h-72 rounded-xl overflow-hidden  group">
                    <img
                        src={new4}
                        alt="New Art 4"
                        className="w-full h-full object-cover border border-neutral-200"
                    />
                    <div className="absolute inset-0 flex items-end p-2 ">
                        <p className="text-amber-700 text-xs sm:text-sm font-semibold ">
                            {artworkTitles[3]}
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Newin;