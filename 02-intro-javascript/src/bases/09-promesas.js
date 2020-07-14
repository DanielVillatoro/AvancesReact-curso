import { getHeroeById } from './bases/08-imp-ex'
//Promesas

// const promesa=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //console.log('2 segundos despues')
//         //Importar el hereoes.js
//         const p1=getHeroeById(2);
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe');
//     },2000)
// });

// promesa.then((heroe)=>{
//     console.log('heroe',heroe)
// })
// .catch(err=>console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            }
            else {
                 reject('No se pudo encontrar el heroe');
                 }
        }, 2000)
    });
}

getHeroeByIdAsync(1)
    .then(console.log)//heroe => console.log('Heroe', heroe))
    .catch(console.warn)