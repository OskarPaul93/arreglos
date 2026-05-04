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

        contenidoTabla+= "<td><button class='btn-eliminar'>Eliminar</button> </td><td> <button class='btn-mover'>➜</button></td>"

        contenidoTabla+= "</tr>";
    }

    tbody.innerHTML= contenidoTabla;
}