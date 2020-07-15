import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de heroes',()=>{
    test('Debe retornar un heroe por id',()=>{
        const id=1;
        const heroe=getHeroeById(id);

        const heroeData=heroes.find(h=>h.id===id);

        expect(heroe).toEqual(heroeData);
        // console.log(heroe);
    });

    test('Debe retornar undefine si heroe no existe por id',()=>{
        const id=13;
        const heroe=getHeroeById(id);

        expect(heroe).toBe(undefined);
        // console.log(heroe);
    });

    test('Debe retornar un arreglo con los heroes de DC',()=>{
        const owner='DC';
        const heroes=getHeroesByOwner(owner);
        const arrDC=[
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];
        expect(heroes).toEqual(arrDC);
        // console.log(heroe);
    });

    test('Debe retornar un arreglo con los heroes de Marvel',()=>{
        const owner='Marvel';
        const heroes=getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        // console.log(heroe);
    });
})