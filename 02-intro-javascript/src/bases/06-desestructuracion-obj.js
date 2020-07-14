//Desestructuracion de objetos IMPORTANTE!
//Asignacion Desestructurante


const persona={
    nombre:'Daniel',
    edad:20,
    clave:'123Superman',
    rango:'Soldado'
};

const {nombre:nombre2,edad}=persona;

// console.log(nombre2);
// console.log(edad);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext=({nombre,edad,clave,rango='Marino'})=>{
    //console.log(clave,rango);
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:123.4234,
            lng:2222,
        }
    }
}

const personaje=useContext(persona);
const {nombreClave,anios,latlng:{lat,lng}}=personaje;
console.log(nombreClave,anios);
console.log(lat,lng);