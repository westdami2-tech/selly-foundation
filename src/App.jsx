import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Programs from "./pages/Programs"
import GetInvolved from "./pages/GetInvolved"
import Donate from "./pages/Donate"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App