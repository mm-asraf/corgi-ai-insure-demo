import KeyFeatures from "../Features/KeyFeatures"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ProductSection from "../Products/ProductSection"
import CustomerSatisfaction from "../Sections/CustomerSatisfaction"
import HeroSection from "../Sections/HeroSection"
import WhyChooseUs from "../Sections/WhyChooseUs"


const Home = () => {
  return (
    <div>
     <Header />
        <HeroSection />
        <ProductSection/>
        <KeyFeatures />
        <WhyChooseUs />
        <CustomerSatisfaction />
        <Footer />
    </div>
  )
}

export default Home