/* componentes importados */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Productos from './components/Productos';
import Footer from './components/Footer';
import Marker  from './components/Marke';
import Brid from './components/Brid';
import PopPup from './components/PopPup';
import Team from './components/Team';
import Dash from './components/Dash';


// App.js





function App() {
  return (
    
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Productos />} />
      <Route path="/dash" element={<Dash />} /> {/* Ruta del dashboard */}
    </Routes>
    <Footer />
  </Router>
  );
}

export default App
