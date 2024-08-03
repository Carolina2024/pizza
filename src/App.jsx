import './App.css'
import NBar from './components/NBar'; /* se agrega */
import Home from './views/Home'; /* se agrega */
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';
import { Route, Routes } from "react-router-dom"; /* se agrega */
import PizzaProvider from "./context/PizzaContext"; /* se agrega */

function App() {

  return (
    <PizzaProvider>
      <div className="app">
        {/* SE AGREGA LAS RUTAS */}
        <NBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </PizzaProvider>
  );
}

export default App;
