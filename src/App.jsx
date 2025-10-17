import { Route, Routes } from 'react-router-dom'
import Error from './components/Error/error'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import About from './pages/About/about'
import Property from './pages/Property/property'
import Home from './pages/Home/home'

export default function App() {
  return (
    <div>
      <Header /> {/* This shows the header on every page */}
      <main>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/*" element={<Property />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer /> {/* This shows the footer on every page */}
    </div>
  )
}
