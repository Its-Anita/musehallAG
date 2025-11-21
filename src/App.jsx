import About from './Components/About';
import ArtGallery from './Components/ArtGallery';
import BestGallery from './Components/BestGallery';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Newin from './Components/Newin';
import Testimonials from './Components/Testimonials';
const App = () => {
  return (
    <>
    <div >
    <Hero />
    <About />
    <Newin />
    <BestGallery />
    <ArtGallery />
    <Testimonials />
    <CTA />
    <Footer />
    </div>
    </>
  )
}

export default App;
