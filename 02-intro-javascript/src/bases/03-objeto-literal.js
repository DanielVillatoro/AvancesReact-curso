//Cuando aparece en consola el {} quiere decir que es un objeto literal
//Se pueden anidar objetos, variables, funciones...
const persona={
    nombre:'Daniel',
    apellido:'Villatoro',
    edad:20,
    direccion:{
        ciudad:'Guapiles',
        zip:123321,
        lat:23.213,
        lng:23.221
    }
};

//console.table({persona});
console.log(persona);
//Falso positivo, ya que estoy copiando y igualando la direccion de memoria, nunca asignar de esta forma.
const persona2={...persona}; //... copia la estructura del objeto.
persona2.nombre='Pepe';
console.log(persona2);
