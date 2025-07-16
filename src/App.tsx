
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/home-page";
import RootLayout from "./components/layout";

function App() {
 

  return (
    <>
    <Router>
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </RootLayout>
    </Router>

      
    </>
  )
}

export default App
