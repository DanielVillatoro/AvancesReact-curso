// Funciones en JS

// const saludar=function(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2=(nombre)=>{
    return `Hola, ${nombre}`;
}

//Si solo hace un return 
const saludar3=(nombre)=>`Hola, ${nombre}`;
console.log(saludar3('Daniel'))

const getUser=()=>({
    uid:'ABCD12345',
    username:'Sir dakuv'
    });

const user=getUser();
console.log(user);

//Practica 
const getUsuarioActivo=(nombre)=>({
        uid:'XYZ987',
        username:nombre
    });

const usuarioActivo=getUsuarioActivo('Daniel');
console.log(usuarioActivo);