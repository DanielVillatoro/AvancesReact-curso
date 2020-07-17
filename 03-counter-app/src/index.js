import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'

const divRoot=document.querySelector('#root');

//ESTANDAR <PrimeraApp />
//ReactDOM.render(<PrimeraApp saludo='Hola Daniel'/>,divRoot);

ReactDOM.render(<CounterApp />,divRoot);
// ReactDOM.render(<PrimeraApp saludo='Hola, Daniel'/>,divRoot);

