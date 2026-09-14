import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Trabajos from "./components/Trabajos";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <SobreNosotros />
        <Trabajos />
        <PorQueElegirnos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
