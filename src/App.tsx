import LandingPage from './pages/landing-page'
import ContactPage from './pages/contact-page'
import PricingPage from './pages/pricing-page'
import GamesPage from './pages/games-page'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </Router>

      
    </>
  )
}

export default App
