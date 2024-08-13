import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonBlanco from './components/buttons/ButtonBlanco.jsx';
import CrearPartida from './components/pagesComponents/CrearPartida.jsx';
import './App.css'
import "./styles/fondo.css"
import "./styles/textoStandar.css"
import NombrarPartida from './components/inputs/NombrarPartida.jsx';

function App() {

  return (
    <>
      <Router>
      <div className="App textoStandar">
        <h1>Bienvenido a mi aplicación</h1>
        <ButtonBlanco texto="Crear partida" clase="button-blanco" link="/CrearPartida" />
        <Routes>
          <Route path="/CrearPartida" element={<CrearPartida />} />
        </Routes>
        <NombrarPartida texto="Nombra la partida" />
      </div>
      </Router>
    </>
  )
}

export default App
