
// /*

// Dentro de los navegadores tenemos 2 tipos de APIs:

// - APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript.

// - APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta.


// Ejemplos de APIs WEB

//     - DOM
//     - XMLHttpRequest: Peticiones al servidor
//     - fetch: API nos permite hacer peticiones al servidor
//     - sessionStorage
//     - localStorage


// FETCH API

// Asincronismo (cuando le pido al tortero una torta con mucho tiempo con anticipación)

// Sincronismo (Cuando le pido al tortero una torta para ahora mismo)

// JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo. 
//     - Single Thread
//     - Operaciones de entrada y salida
//     - Bloqueo
//     - No bloqueo


// Ejemplo de aeropuerto

// Pista de aterrizaje = hilo o thread
// Input = cuando un avion va aterrizar
// Output = cuando el avion tiene que despegar
// Manejador de eventos = la torre de control

// Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.

// */

// //Ejemplo de JavaScript sincromo
// console.log("Inicio Sincrono"); //1
// function dosSincronos(){
//     //funcion cuatroSincrono
//     console.log("Dos");
// }

// function unoSincrono(){
//     console.log("Uno"); //2
//     dosSincronos(); //3
//     console.log("Tres"); //4
// }

// unoSincrono();
// console.log("Fin de Sincrono"); //5

// //¿Cúal es la salida de este código?
// //Ejempllo de JS asincrono

// console.log("Inicio de asincromo"); //1
// function dos(){ //Se pone ene espera 2 segundos
// setTimeout(function(){
//     console.log("Dos"); //5
//     }, 2000);
// }
//     function uni (){
//         setTimeout(function(){
//             console.log("Uno");
//         }, 0); //4
//         dos ();
//         console.log("Tres"); //2
//  }
// uni();
// console.log("Fin de asincromo"); //3

// //Cúal es la salida de este código?: 3, 1 y 2

// /* 

// Ejemplos de tarea asincronas

// -Fetch a una URL para obtener un archivo JSON
// -Tareas programadas con setTimeout
// -Spotify, al momento de reproducir un .mp3

// Mecanismos asincronos en JAVASCRIPT

// Para controlar la asincronia en JS, podemos esar alguna de estos mecanismos:

//  -Collbacks
// -Promises
// -Async / Await

// Promesas (promises)

// Como su nombre lo indica, es algo que de principio no sabemos si se cumplira, por que pueden pasar muchas cosas. La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple, o no.

// Una promesa es el resultado de la operacion asincrona, este resultado es en forma de objeto el cual puede estar disponible AHORA o en el FUTURO. Aunque esta operacion puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

// Las promesas tienen 3 estados posibles:
//     - Pending: Estado inicial, cuando se crea la promesa. 
//     - Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)
//     - Rejected: Cuando la operacion asincrona falla (reject)

//     Nuestras promessas tiene algunos métodos:

//     - then (function resolve): Ejecuta la funcion resolve cuando la primesa se cumple
//     - catch (function reject): se ejecuta la funcion rechazado cuando la promesa no se cumple
//     -then (function resolve, function reject): Ejecutar las dos funciones resolve y reject
//     -finally(function end): Ejecutar la funcion end si se ccumple o no la promesa. 


//     Ejemplo de los archivos de felipe
//     -then (function archivosEnviados)
//     -coatch (function archivosNoEnviados)
//     - finally (function felipeNoCumples)



// */




// //Ejemplo de promesa para saber el nombre
// let nombre = "Felipe";

// const promesaNombre = new Promise((resolve, reject) => {
//     if (nombre !== "Felipe") reject("Error!!, El nombre no es Felipe");
//     resolve(nombre);
// }
// );
// console.log(promesaNombre);

// //Promesa de AMOR donde nos dejan en visto un ratito y luego nos aceptan la invitación
// //var promesaDeAmor = new Promise(function (resolve, reject){
// //    setTimeout(function(){
// //        resolve ("Si quiero salir contigo, te amo");
// //    },5000);
// //    });

// //    promesaDeAmor.then(function(valor){
// //        console.log(valor);
// //    });

// //    console.log(promesaDeAmor);

// //    var promesaDeAmor = new Promise(function (resolve, reject){
// //    setTimeout(function(){
// //        resolve ("Si quiero salir contigo, te amo");
// //    },5000);
// //    });

// //    promesaDeAmor.then(function(valor){
// //        console.log(valor);
// //    });

// //    console.log(promesaDeAmor);

//     //ejemplo de promesas para ir por unas tortas
// //Ejemplo de promesa para ir por unas tortas
// //let decision = "No";

// //const promesaTortas = new Promise((resolve, reject) => {
//  //   if (decision !== "Si") reject("No, no me gustas, no quiero ir contigo por tortas");
// //    resolve(decision);
// //}
// //);
// //console.log(promesaTortas);

// /*
// Fetch API

// Es el nombre de una API (nativa) para JS con la cual podemos realizar peticiones HTTP asincronas utilizando promesas, y de forma de utilizar una peticion fetch es sencillo, solo debemos llamar a fetch y pasarle por parametros una URL de la petición a realizar

// //const solicitud = fetch('la url que vamos a consultar')
// //Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa


// */

// fetch ('https://pokeapi.co/api/v2/pokemon/pikachu') //realizamos la peticion a la URL de la API Pokemon
//     .then(datos =>{ //cuando te conectes al servidor ejecutamos la siguiente función
//         return datos.json(); // traeme todos los pokemon, y cpmp se que los ttraes en texto, yo los convierto a formato JSON.
//     })
//     .then(info =>{ // cuando la promesa se resuelve, entonces ejecutamos está funcition. Usamos el método then para obtener la respuesta de la promesa y guardarla en una variable llamada info. Gracias a esta variable, puedo almacenar la info de mi pokemon y sacar de ahi los datos que necesite.
//         console.log("El nombre de nuestro Pokemon es: ",
//         info.name, " y su número es: ", info.id);
//     });

//     /*
//     Cuando hablamos de la API fetch
    
//     */
//    function fetchPokemon(id){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)// La petición a la url, donde usamos el parametro id para obtener la información del pokemon.
//     .then(respuesta => respuesta.json()) //imprimimos la respuesta en un formato .json
    
//     .then(dato => console.log(dato))// imprimimos la respuesta en consola

//    }
//    fetchPokemon(666);
// /*
// //Solicitud GET 
// fetch("https://fakestoreapi.com/products/10") //realizamos la peticion a una URL
// .then((datos) => {
//   //cuando la promesa es resuelta, entonces ejecutamos esta funcion
//   return datos.json(); //convertimos la respuesta a un formato JSON
// })
// .then((info) => {
//   //cuando la promesa es resuelta, entonces ejecutamos esta funcion. Estamos usando el metodo .then para obtener la respuesta de la promesa y guardarla en la variable info. Gracias a esto podre obtener la informacion que queremos.
//   console.log(
//     "El nombre de nuestro producto es:",
//     info.title,
//     " y su precio es: ",
//     info.price
//   ); //imprimimos el nombre del producto. esto es posible por que la respuesta ya esta en formato JSON, y podemos acceder a los datos directamente, especificando el nombre del campo que queremos.
// });
// */

//  //Solicitud POST para enviar informacion
//  fetch('https://fakestoreapi.com/products',{
//     method:"POST", //por default es GET, para cambiarlo debemos especificar el metodo
//     body:JSON.stringify(//como la informacion que voy a manejar es un objeto, necesito convertirlo a un texto (string)
    
//     //cuerpo de la solicitud    
//         {
//             title: 'Chettos Naranjas',
//             price: 3.0,
//             description: 'Deliciosos Chettos Naranjas',
//             image: 'https://i.pravatar.cc',
//             category: 'jewelery'
//         }
//     )
// })
//     .then(res=>res.json())
//     .then(json=>console.log(json))


// //Solicitud POST para enviar informacion
// fetch('https://fakestoreapi.com/products',{
// method:"POST", //por default es GET, para cambiarlo debemos especificar el metodo
// body:JSON.stringify(//como la informacion que voy a manejar es un objeto, necesito convertirlo a un texto (string)

// //cuerpo de la solicitud    
//     {
//         title: 'Cacahuates',
//         price: 3.0,
//         description: 'Deliciosos Cacahuates Saladitos',
//         image: 'https://i.pravatar.cc',
//         category: 'jewelery'
//     }
// )
// })
// .then(res=>res.json())
// .then(json=>console.log(json))


/* APIS DE ALMACENAMIENTO WEB


la API de almacenamiento web define dos mecanismos de almacenamiento que son muy importantes

- almacenamiento local
- almacenamiento de sesiones

Tanto el almacenamiento local como el de sesiones proporcionan una area privada para sus datos, esto quiere decir que otros sitios web no pueden acceder a esta informacion


Algunas caracteristicas que comparten el local y el session storage son:

    - La capacidad (5Mb a diferencia de los 4Kb de las cookies)
    - La informacion es almacenada en pares clave/valor, por lo que se puede usar como si fueran variables.
    - El almacenamiento web solo es accesible en el navegador, no se envia al servidor como lo hacen las cookies.
    
ALMACENAMIENTO LOCAL (LocalStorage)

La informacion almacenada con localStorage se guarda indefinidamente hasta que sea eliminada mediante codigo o bien borrada desde el navegador.

El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y puede almacenar mas datos. Por lo tanto, se puede utilizar en situaciones similares, tales como: almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.

La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones que acceder al sitio.


Como acedemos al almacenamiento?
windows.localStorage
windows.sessionStorage

*/
/*Guardar datos (localStorage.setItem(key,value)

La sintaxis para guardar datos en un localStorage es: localStorage.setItem(key, value);, donde key es la clave (o el identificador) y value es el valor que queremos guardar.
*/



// localStorage.setItem("Nombre","Ezequiel");
// localStorage.setItem("Apellido","Lagunes");
// localStorage.setItem("Edad", 25);
// localStorage.setItem("¿Es programador?", true);


// let recuperarNombre = localStorage.getItem("Nombre");
// console.log(recuperarNombre);

// let recuperarApellido = localStorage.getItem("Apellido");
// console.log(recuperarApellido);

// let recuperarEdad = localStorage.getItem("Edad");
// console.log(recuperarEdad);



// localStorage.setItem("Nombre2","Carlo");
// localStorage.setItem("Apellido2","Lagunes");
// localStorage.setItem("Edad2", 20);
// localStorage.setItem("¿Es programador?2", true);

// let recuperarNombre2 = localStorage.getItem("Nombre2");
// console.log(recuperarNombre2);

// let recuperarApellido2 = localStorage.getItem("Apellido2");
// console.log(recuperarApellido2);

// let recuperarEdad2 = localStorage.getItem("Edad2");
// console.log(recuperarEdad2);



// localStorage.setItem("Nombre3","Andrea");
// localStorage.setItem("Apellido3","Lagunes");
// localStorage.setItem("Edad3", 19);
// localStorage.setItem("¿Es programador?3", true);

// let recuperarNombre3 = localStorage.getItem("Nombre3");
// console.log(recuperarNombre3);

// let recuperarApellido3 = localStorage.getItem("Apellido3");
// console.log(recuperarApellido3);

// let recuperarEdad3 = localStorage.getItem("Edad3");
// console.log(recuperarEdad3);


// //Remover datos de LocalStorage (LocalStorage.removeItem(key))

// localStorage.removeItem("Nombre2");
// localStorage.removeItem("Apellido2");
// //Conocer el largo de nuestro almacenamiento (localStorage.length)
// let longitudLocalStorange = localStorage.length;
// console.log(longitudLocalStorange);

// //Limpiar datos del localStorage (local.storage.clear())
// localStorage.clear();

// //Agregar elementos con session 
// sessionStorage.setItem("Perrito", "Rocky");
// sessionStorage.setItem("Gatito", "Bigotes");
// sessionStorage.setItem("Nutria", "Hernesto");
// sessionStorage.setItem("Caracol", "Gary");
// sessionStorage.setItem("Conejito", "Griselo");

// let longitudLocalStorange = sessionStorage.length;
// console.log(longitudSessionStorange);

function guardarDatos(){

localStorage.nombre = document.getElementById("nombre").value; //guardar el valor de nombre en localStorage

localStorage.password = document.getElementById("password").value; //guardar el valor de password en localStorage

document.getElementById("datos").innerHTML =("Datos guardados correctamente"); //sobreescribiremos el contenido del parrafo por este nuevo mensaje

console.log(typeof localStorage.nombre);
console.log(typeof localStorage.password);
}

//si en ka kkave de mi localStorage y además en la llave password los datos son diferentes de undefined (significa que si tengo datos), voy a mostrar el mensjae con esa formación
function recuperarDatos(){

    if(localStorage.nombre != undefined && localStorage.password != undefined){
        document.getElementById("datos").innerHTML = 
        "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
    }else{
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";

    }
}
