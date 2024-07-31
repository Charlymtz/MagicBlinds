/* componentes importados */
import './App.css';
import Header from './components/Header';
import Productos from './components/Productos';
import Footer from './components/Footer';
import Marker  from './components/Marke';
import Brid from './components/Brid';
import PopPup from './components/PopPup';
import Team from './components/Team';
import Dash from './components/Dash';

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'; // Componente con el formulario de login
import Dash from './Dash'; // Componente Dash

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/dash" component={Dash} />
      </Switch>
    </Router>
  );
}

