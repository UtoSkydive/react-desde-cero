 import React from 'react';
 
// import logo from './logo.svg';
// import './App.css';
import './styles/style.scss';
import Curso from './curso'

const App=()=> (
  <>
      <div className="main-banner img-container " id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://images.homedepot-static.com/productImages/2d70e887-cf79-4442-b01e-d39ab39dd953/svn/montague-metal-products-house-letters-numbers-shn-60-64_1000.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>


 
<div className="ed-grid m-grid-3">
    <Curso />
    <Curso />
    <Curso />

</div>






  
</>

)





export default App;
//reglas

// Toda etiqueta debe cerrarse
// los componentes deben devolver un solo elemento padre (componente cosnt app)
// apoyarse de los frgments cuando necesito devolver dos elemntos
// fragment o <> hijos</>
// img siempre se cierra
// class pasa a ser className
// for pasa a ser htmlfor