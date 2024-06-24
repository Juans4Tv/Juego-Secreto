//seleccionar una parte del html document.querySelector('h1');
let titulo= document.querySelector('h1');
let parrafo= document.querySelector('p');
let numeroSorteado=[];

//llena datos titulo.innerHTML
titulo.innerHTML= 'Juego Del Numero Secreto'
parrafo.innerHTML='indica un numero del 1 al 10'

//numeros aleatorios
function NumeroAleatorio(rangMaximo){
    let loco = parseInt(Math.random()* parseInt(rangMaximo))+1;

  if(numeroSorteado.length == rangMaximo){
    llenartexto('p','todos los numeros fueron sorteados');



 }else{
    if(numeroSorteado.includes(loco)){
        /*Siempre que genere un número existente en la lista, entra en la recursividad,
¿no? Que es llamarse a sí misma para generar un número aleatorio.Y eso es lo importante de la recursividad,
es poder reutilizar la funcionalidad que ya tenemos hecha. Porque si no, nos crea un problema
complejo muy grande que es tener que crear N funciones para poder cumplir con nuestro objetivo.*/
        return NumeroAleatorio(rangMaximo);

    }else{
        numeroSorteado.push(loco);
        return loco
    }
  }
}

//funcion de textos para porcesos mas rapidos
function llenartexto(seleccion,texto){
let info= document.querySelector(seleccion);
info.innerHTML= texto;
}

llenartexto("h1","Juego Del Numero Secreto ");
let random= NumeroAleatorio(10);
let contador= 1;



//crear funciones
function intentos(){
    //forma de extraer la informacion del usuario por medio de un get y un identificador 
    let numeroDeUsuario = parseInt(document.getElementById('numeroUser').value);
    //verifica el que tipo de variable es
    //console.log(typeof(numeroDeUsuario));
 
    console.log(contador);

    if(numeroDeUsuario == random){
        llenartexto("p",`acertaste el numero en ${contador}  ${(contador==1)? 'vez':'veces'}`);
            //desabilita algun atributo
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{
        if(numeroDeUsuario>random){
            llenartexto("p","el numero secreto es menor");
        }else{
            llenartexto("p","el numero secreto es mayor");
        }
        contador++
        limpiarCaja();
    } 
    return;
}
function condicionesIniciales(){
    llenartexto("h1","Juego Del Numero Secreto ");
    llenartexto("p","indica un numero del 1 al 10");
    random= NumeroAleatorio(10);
    contador= 1;
}

function finDelJuego(){
    //limpiar la caja de los numeros de los usuarios
    limpiarCaja();
    //inicia nuevamente las condicionas que teniamos
    condicionesIniciales();
    //añade un atributo
    document.getElementById(`reiniciar`).setAttribute('disabled',true);

}

function limpiarCaja(){
    //limpia las cajas
    document.getElementById('numeroUser').value='';
}