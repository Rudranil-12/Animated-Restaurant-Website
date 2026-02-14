import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Hotdessert from "./components/HotDessert/Hotdessert"
import Navbar from "./components/Navbar/Navbar"
import PopularRecipe from "./components/PopularRecipe/PopularRecipe"
import Testimonial from "./components/Testimonial/Testimonial"

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white2 text-dark'>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Hotdessert />
      <Banner />
      <PopularRecipe />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
