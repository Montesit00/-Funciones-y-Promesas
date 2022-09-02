//README
// ## Consignas
// 1. Copiar las funciones en un archivo JavaScript.
// 2. Simplificar la composición de los strings.
// 3. Simplificar escritura de los objetos literales.
// 4. Transformar las funciones básicas en funciones flecha.
// 5. Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop.

// let saludar = (nombre) => {
//     return `Hola ${nombre}`;
// }

// // Mostrar el resultado por consola
// console.log(saludar('Monte'))

// let multiplicar = (a, b) => {
//     return a * b;
// }

// // Mostrar el resultado por consola
// console.log(multiplicar(3,15))

// const crearAlumno = (nombre, apellido, edad, materias) => {
//     const alumno = {
//         nombre,
//         apellido,
//         edad,
//         materias,
//     }

//     return alumno;
// }

// // Mostrar el resultado por consola.
// console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']));

// let devolverFecha = (dia,mes,año) => {
//     return `Hoy es ${dia}/${mes}/${año}`;
// }

// // Mostrar el resultado por consola.
// console.log(devolverFecha('10','09','2022'));



//FUNCIONES - FETCH

// > 1. Transformar todas las funciones declarativas en funciones flecha.

// > 2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

// > 3. Simplificar el código de las funciones.

// > 4. Transformar la función **funcionCuatro()** en una función asíncrona con la palabra reservada __async__ e implementarla junto con **await**.

    // Promesa almacenada en una constante
// const promesa = new Promise((resolve, reject)=>{
//     if( 10 === 11){
//         resolve('Los valores son iguales');
//     } else {
//         reject('Los valores son distintos')
//     }
// });
// promesa
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

//     // Promesa dentro en una función.
// const promesaDos= (provincia)=>{
// const promesa = new Promise( (resolve, reject)=> {        
//         if('Formosa' === provincia){
//             resolve('Usted está ubicado en Formosa');
//         } else {
//             reject('Error al realizar la consulta')
//         }
//     });
//     return promesa;
// }
// promesaDos("Formosa")
//     .then(msj => console.log(msj))
//     .catch(err => console.log(err))

// const promesaTres = (valorBooleano) => {
//     return new Promise( (resolve,reject)=> {
//         ( true === valorBooleano )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos');
//     })        
// }

// promesaTres(false)
//     .then(msj => console.log(msj))
//     .catch(err => console.log(err))

// const promesaCuatro = (arguments) => {
        
//     return new Promise((resolve,reject) => {
//         ( true === arguments )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })                
// }
        
// promesaCuatro()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

//PROMESAS - FETCH
    // > 1. Transformar todas las funciones declarativas en funciones flecha.

    // > 2. Transformar las funciones en asíncronas con la palabra __async__.
    
    // > 3. Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.
    
    // > 4. Luego de realizar el método fetch, implementar el método ".json()" sobre los datos obtenidos.
    
    // >5. Implementar **await** sobre todos los procesos asíncronos como consultas a la base de datos, conversión de formato json, etc.
    
    // > 6. Selecconar las funciones _*retrasar*_, _*obtenerPcias*_, _*obtenerDptos*_, _*obtenerLocalidades*_, luego cortarlas y pegarlas en el archivo funciones-exportadas que se encuentra en la carpeta _*libs*_.
    
    // > 7. Utilizar la palabra reservada **export** para exportar las funciones y que puedan ser utilizadas desde el archivo __app.js__. Pueden exportarlas una por una o como un solo objeto.
    
    // > 8. Implementar bloques try catch para el manejo de errores. 
    
    
    const retrasar = milisegundos => new Promise(resolve =>setTimeout(resolve, milisegundos));
    
// Función que retorna los datos de provincias
const obtenerPcias = async () => {
    await retrasar(1800);
            try {
                const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias?nombre=Sgo. del Estero');
                return  await consulta.json();
            } catch (error) {
                console.log(error)
            }    
    }
obtenerPcias();

// Función que retorna los datos de departamentos
const obtenerDptos= async () => {
    await retrasar(1391);
        try {
            const consulta = await fetch('https://apis.datos.gob.ar/georef/api/ubicacion?lat=-27.2741&lon=-66.7529'); 
            return await consulta.json();
        }catch (error) {
            console.log(error)
        }
}
obtenerDptos();

// Función que retorna los datos de localidades
const obtenerLocalidades = async () => {
    await retrasar(900);
        try{
            const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre');
            return await consulta.json()
        } catch (error) {
            console.log(error)
        }
}
obtenerLocalidades();

// Funcion para obtener todos los datos
const consultarDatos = async () => {
    try{
        const provincias = await obtenerPcias();
        const dptos = await obtenerDptos();
        const localidades = await obtenerLocalidades();

        console.log(provincias);
        console.log(dptos);
        console.log(localidades);
    } catch (error){
        console.log(error);
    }
}
consultarDatos();
