import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(elemento,lugardonde insertar elemento);
// SE TRAE EL DIV CON CLASE ROORT DE PUBLIC/index.HTML

// const elemento=React.createElement(componente,propiedades,hijos)
// SE CREA EL ELEMENTO
// const elemento=React.createElement("h1",{className:"saludo"},"hola mundo")
// SE RENDERIZA EN EL DOM

const root=document.getElementById("root");
ReactDOM.render(<App />,root);



