import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonBlanco from './components/buttons/ButtonBlanco.jsx';
import CrearPartida from './components/pagesComponents/CrearPartida.jsx';
import './App.css'
import "./styles/fondo.css"
import "./styles/textoStandar.css"
import NombrarPartida from './components/inputs/NombrarPartida.jsx';
import RadioButtons from './components/radioButtons/RadioButtons.jsx';

function App() {

  return (
    <>
      <Router>
      <div className="App textoStandar">
        <h1></h1>
        <ButtonBlanco texto="Crear partida" clase="button-blanco" link="/CrearPartida" />
        <Routes>
          <Route path="/CrearPartida" element={<CrearPartida />} />
        </Routes>
        <NombrarPartida texto="Nombra la partida" />
        <div className="contenedor">
          <RadioButtons texto={"Jugador"} id={"id"}></RadioButtons>
          <RadioButtons texto={"Espectador"} id={"id"}></RadioButtons>
        </div>
      </div>
      </Router>
    </>
  )
}

export default App
