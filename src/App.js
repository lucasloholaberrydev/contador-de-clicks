
import './App.css';
import logo from './imagenes/logo.png'; 
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = ()=>{
    setNumClicks(0);
  }


  return (
    <div className="App">
     <div className='contador-logo-contenedor'>
        <img
        className='contador-logo'
        src={logo}
        alt='Logo de Contador' />
     </div>
     <div className='contenedor-principal'>
      <Contador numClicks={numClicks} />
       <Boton 
       texto= 'Click'
       esBotonDeClick={true}
       manejarClick={manejarClick}/>
       <Boton
       texto='reiniciar'
       esBotonDeClick={false}
       manejarClick={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
