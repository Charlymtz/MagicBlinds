import './App.css';
import Header from '../src/components/header';
import Productos from './components/Productos';
import Footer from './components/Footer';
import Marker  from './components/Marke';
import Testimonials from './components/Testimonials';
import Brid from './components/Brid';
import PopPup from './components/PopPup';
import Team from './components/Team';


function App() {
  return (
    <div>
      <Header />
      <section/>
      <Brid/>
      <section/>
      <Marker/>
      <section/>
      <Productos/>
      <section/>
      <Testimonials/>
      <section/>
      <PopPup/>
      <section/>
      <Team/>
      <section/>
      <Footer/>
    </div>
  );
}

export default App;
