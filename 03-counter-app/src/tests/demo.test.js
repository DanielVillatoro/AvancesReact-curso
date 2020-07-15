
describe('Pruebas en el archivo demo.test.js', () => {
    test('Los strings deben ser iguales ', () => {
        // const isActive=true;
        const mensaje = 'Hola mundo';
        const mensaje2 = `Hola mundo`;
        expect(mensaje).toBe(mensaje2);//===
    })
})

