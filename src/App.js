import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './component/Loading';

// Lazy loaded components
const Head = lazy(() => import('./component/head/Head'));
const Home = lazy(() => import('./component/Navebar/Home'));
const Contact = lazy(() => import('./component/Navebar/Contact'));
const About = lazy(() => import('./component/Navebar/About'));
const MainMidele = lazy(() => import('./component/Middle/MainMidele'));
const Footer = lazy(() => import('./component/Footer'));
const Fixed = lazy(() => import('./component/Fixed'));

function App() {
  return (
    <div className="App" dir="rtl">
      <Suspense fallback={<Loading/>}>
        <Head />
        <MainMidele />
        <Fixed />
        <Footer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
