import './App.css';
import Navbar from './components/Navbar/Navbar';
import Application from './components/Application/Application';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import CoursePage from './components/CoursePage/CoursePage';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:cod" element={<CoursePage />} /> 
      </Routes>
    </div>
  </>
  )
}

export default App;
