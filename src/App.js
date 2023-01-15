import './styles/Navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Experience from './pages/Experience.js'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import './App.css'
import ProjectDisplay from './pages/ProjectDisplay.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
