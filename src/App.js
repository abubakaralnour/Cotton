import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './component/head/Head';
import Home from './component/Navebar/Home';
import Contact from './component/Navebar/Contact';
import About from './component/Navebar/About';
import MainMidele from './component/Middle/MainMidele';
import Footer from './component/Footer';
import Fixed from './component/Fixed';

function App() {
  return (
    <div className="App" dir="rtl">
      
        <Head /> 
        <MainMidele/>
        <Fixed/>
        <Footer/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
