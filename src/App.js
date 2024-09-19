import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

const App = () => {

  return <>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/service' element={<Services />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<ErrorPage />} />

  </Routes>
  <Footer />
  </>
}

export default App;
