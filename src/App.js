import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Qualification from './components/Qualification/Qualification';
import Scrollup from './components/Scrollup/Scrollup';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Testimonial from './components/TestiMonial/Testimonial';

function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      {/* <Services/> */}
      <Projects/>
      <Qualification/>
      {/* <Testimonial/> */}
      <Contact/>
    </main>

    <Footer/>
    <Scrollup/>
    </>
  );
}

export default App;
