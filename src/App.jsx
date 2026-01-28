import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import "./index.css"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App

