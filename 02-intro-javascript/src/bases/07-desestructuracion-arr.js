//Desestructuracion de arreglos

const personajes=['Racoon','Aragon','Jojo'];

const [ , ,p3]=personajes;

console.log(p3);


const retornaArreglo=()=>{
    return ['ABC',123];
}

const arr=retornaArreglo();
const [letras,numeros]=arr;

console.log(letras,numeros);

//Practica

const useState=(valor)=>{
    return [valor,()=>{console.log('Hola Daniel')} ];
}

const arr2=useState('Pepe');
// console.log(arr2);

// arr2[1]();
const [nombre,setNombre]=arr2;
console.log(nombre);
setNombre();

