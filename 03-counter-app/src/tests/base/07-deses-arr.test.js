import { retornaArreglo } from "../../base/07-deses-arr";



describe('Pruebas en desestructuracion',()=>{
    test('Debe retornar un string y un numero',()=>{
        const [letras,numeros]=retornaArreglo();//['ABC',123]

        // expect(arr).toEqual(['ABC',123]);
        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
    })
})