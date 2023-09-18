import { BrowserRouter as Router } from "react-router-dom"
import { Routes,Route } from "react-router"

//pages
import Calculator from "./pages/Calculator"
import Snapdocs from "./pages/Snapdocs"

//navbar
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Calculator/>}/>
        <Route exact path="/snapdocs" element={<Snapdocs/>}/>
      </Routes>
    </Router>
  )
}

export default App
