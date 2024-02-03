//Variable o dato de tipo primitivo

let intentos = 0; // Contador de numero de intentos

//Variable o dato de tipo objeto (wrapped)
//este objeto tiene ciertos metodos que definira su comportamiento

/* Aqui agarramos la etiqueta h1 del html y la asignamos a la variable
titulo lo cual converitra el h1 en un objeto y asi poder emplear
metodos en la variable 'Titulo' y modificar de esta manera el h1
*/

//let parrafot = document.querySelector('p');
//parrafot.innerHTML = 'Escoje un numero del 1 al 10'


/* JavaScrypt posee eventos, de esta manera hacemos funcionales los botones
para mostrar algo e agrandar algo de texto al acercar el cursos

Creando evento de botones
Primero lo identificamos en html como button class
y adelante de la declaracion buscamos el evento que queramos en html osea onclick, despues
esperara un argumento para realizar una accion por lo que crearemos una funcion
llamada intento de usuario
*/
let numeroSecreto = 0;
let listaNumerosSorteados = []; // Creando lista
let numeroMaximo = 10;

//Automatizando aqui estableciomos dos parametros
//el elemento html y el texto que queremos cambiar
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //El h1 lo capturamos y lo traemos a la variable Titulo
    elementoHTML.innerHTML = texto;
    return;
    //Con esta funcion redujimos a la mitad nuestro codigo
}


//Delacarando funcion, solo para realizar una accion y encapsulandola en llaves
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        // Console.log(numeroScreto); para depurar y ver las variables
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ) ? 'vez' : 'veces'}`) //`` para template string, ? operador ternario para comparar (if) : (else)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }; //El triple igual es para validar el tipo de valor y tipo de dato

    return; //Es una buena practica retornar algo
}

function limpiarCaja(){ /////
    document.querySelector('#valorUsuario').value = '';

    //let valorCaja = document.querySelector ('#valorUsuario'); //Id del input
    //valorCaja.value = '';
}



function generarNumeroSecreto(){
    let NumeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;


    console.log(NumeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else{
        //if para no repetir un numero en la lista
        //Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(NumeroGenerado)){
            //El metodo includes barre y verifica si algo ya existe
            return generarNumeroSecreto();
            //recursividad llamar una funcion para no tener que hacer 1000 funciones
            //y realizar un ciclo, pero la recurvisidad tiene que tener fin
        }else {
            //Guardando el numero generado si esta en la lista
            listaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //limpiar mensaje de intervalo de numeros
    //generar el numero aleatorio
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();


//Ctrl F para buscar algo en el codigo(finder)