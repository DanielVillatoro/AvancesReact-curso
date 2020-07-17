import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'


describe('Pruebas en el <CounterApp />',()=>{
    let wrapper=shallow(<CounterApp/>); //MEJOR ESTABLECERLO 2 VECES
    beforeEach(()=>{    //PARA CADA UNO
        wrapper=shallow(<CounterApp/>);
    })

    test('Debe de mostrar el valor por defecto de 100',()=>{
        const wrapper=shallow(<CounterApp value={100}/>);

        const counterText=wrapper.find('h2').text().trim();
        // console.log(counterText);
        expect(counterText).toBe('100');
    })

    test('Debe de incrementar con el boton de +1',()=>{

        // const btn1=wrapper.find('button').at(0);
        wrapper.find('button').at(0).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
        // console.log(btn1.html());
    })

    test('Debe de reducir con el boton de -1',()=>{

        // const btn1=wrapper.find('button').at(0);
        wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
        // console.log(btn1.html());
    })

    test('Debe de RESET con boton de reset -1',()=>{

        // const btn1=wrapper.find('button').at(0);
        wrapper.find('button').at(1).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('10');
        // console.log(btn1.html());
    })
})