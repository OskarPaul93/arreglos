let edadesIzquierdo= []; // asi se crea un arreglo
let edadesDerecho=[];

function agregarEdad(){

        let edad =parseInt(document.getElementById("edad").value);
    if (!isNaN(edad)){
        edadesIzquierdo.push(edad);

    }else {
        alert ("Ingresa un valor valido");
    }
    pintarArregloIzquierdo();
}

function eliminarIzquierdo(indice){
    edadesIzquierdo.splice(indice,1);
    pintarArregloIzquierdo();
}

function pintarArregloIzquierdo (){
    let tbody=document.getElementById("tablaIzquierda");
    let contenidoTabla="";
    let edadRecuperada;

    for (let i=0; i<edadesIzquierdo.length; i++){
        edadRecuperada=edadesIzquierdo[i];
        contenidoTabla+= "<tr>";
        contenidoTabla+= "<td>" + edadRecuperada + "</td>";
        //contenidoTabla+= "<td>" + <button class="btn-eliminar">Eliminar</button> + "</td>";
        //contenidoTabla+= "<td>" + <button class="btn-mover">➜</button> + "</td>";

        contenidoTabla+= "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")' >Eliminar</button> </td>" +
        "<td><button class='btn-mover' onclick='moverHaciaDerecha (" + i + ")' >➜</button></td>"
        
        contenidoTabla+= "</tr>";
    }

    tbody.innerHTML= contenidoTabla;
}


function pintarArregloDerecha(){
    let tbody = document.getElementById("tablaDerecha");
    let contenidoTabla = "";

    for (let i = 0; i < edadesDerecho.length; i++){
        let edadRecuperada = edadesDerecho[i];

        contenidoTabla += "<tr>";
        contenidoTabla += "<td><button class= 'btn-mover'onclick='moverHaciaIzquierda(" + i + ")'>⬅</button></td>";
        contenidoTabla += "<td>" + edadRecuperada + "</td>";
        contenidoTabla += "<td><button class= 'btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button></td>";
        contenidoTabla += "</tr>";
    }

    tbody.innerHTML = contenidoTabla;
}

function eliminarDerecho(indice){
    edadesDerecho.splice(indice, 1);
    pintarArregloDerecha();
}


function moverHaciaDerecha(indice){
    let edad = edadesIzquierdo[indice];

    edadesDerecho.push(edad);
    edadesIzquierdo.splice(indice, 1);

    pintarArregloIzquierdo();
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice){
    let edad = edadesDerecho[indice];

    edadesIzquierdo.push(edad);
    edadesDerecho.splice(indice, 1);

    pintarArregloDerecha();
    pintarArregloIzquierdo();
}