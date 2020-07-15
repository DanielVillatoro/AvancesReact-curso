// import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";




// describe('Pruebas en 02-template-strings.js', () => {
//     test('getSaludo debe retornar hola y el parametro dado', () => {
//         const nombre='Daniel';
//         const saludo=getSaludo(nombre);

//         expect(saludo).toBe('Hola '+nombre);
//     })
// })


test('getSaludo debe retornar hola y el parametro dado', () => {
    const saludo=getSaludo();

    expect(saludo).toBe('Hola Pepe');
})