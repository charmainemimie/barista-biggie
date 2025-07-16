
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/home-page";
import RootLayout from "./components/layout";
import AboutPage from "./pages/about-page";
import ScrollToTop from "./components/scroll-to-top";
import ExperiencePage from "./pages/experience-page";
import PortfolioPage from "./pages/portfolio-page";
import SkillsPage from "./pages/skills-page";
import ContactPage from "./pages/contact-page";
function App() {
 

  return (
    <>
    
    <Router>
    <RootLayout>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </RootLayout>
    </Router>

      
    </>
  )
}

export default App
