import KeyFeatures from "../Features/KeyFeatures"
import ProductSection from "../Products/ProductSection"
import CustomerSatisfaction from "../Sections/CustomerSatisfaction"
import HeroSection from "../Sections/HeroSection"
import WhyChooseUs from "../Sections/WhyChooseUs"


const Home = () => {
  return (
   
   
   <div>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="products">
        <ProductSection />
      </div>
      <div id="features">
        <KeyFeatures />
      </div>
      <div id="whychooseus">
        <WhyChooseUs />
      </div>
      <div id="satisfaction">
        <CustomerSatisfaction />
      </div>
    </div>
  
  )
}

export default Home