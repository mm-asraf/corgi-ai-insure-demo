import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import ScrollToTop from "./components/utils/ScrollToTop";





function App() {


  return (

    <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/features" element={<Home />} />
          <Route path="/whychooseus" element={<Home />} />
          <Route path="/satisfaction" element={<Home />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  </Router>

    
 
  )
}

export default App
