import React from 'react';
// import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />',()=>{
    // test('Debe de mostrar el mensaje saludo "Hola, Daniel"', () => {
    //     const saludo='Hola, Daniel';
    //     const {getByText}=render(<PrimeraApp saludo={saludo}/>)
        
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo='Hola, Daniel';
        const wrapper=shallow(<PrimeraApp saludo={saludo}/>);
        //toMatchSnapshot: 
        expect(wrapper).toMatchSnapshot();
    })
    

    
})