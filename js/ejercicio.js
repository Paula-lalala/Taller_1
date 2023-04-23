// ejercicio 1

function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' caracteres';
}

//ejercicio 2
document.getElementById('btn_identificar')
.addEventListener('click', function () {
    let verTexto = document.getElementById('verTexto').value;
    if (!verTexto) {
        document.getElementById("idTexto").innerText = ("Debe ingresar un valor");
    } else {
        if (!isNaN(verTexto)) {
            document.getElementById("idTexto").innerText = ("Es un numero");
        }else{
            document.getElementById("idTexto").innerText = ("Es un texto"); 
        }
    }
});

//ejercicio 3
document.getElementById('btn_idEdad')
.addEventListener('click', function () {
    let nombre = document.getElementById('verNom').value;
    let edad = document.getElementById('verEdad').value;
    if (!nombre || !edad) {
        document.getElementById("verEdadNom").innerText = ("Debe rellenar los campos completos");
    } else {
        if(edad<=0 || edad>=125){
            document.getElementById("verEdadNom").innerText = ("Hola "+nombre+", ingresaste una edad incorecta, vuelve a escribirla");
        }else{
        if (edad>=18) {
            document.getElementById("verEdadNom").innerText = ("Hola "+nombre+", eres mayor de edad");
        }else{
            document.getElementById("verEdadNom").innerText = ("Hola "+nombre+", eres menor de edad");
        }
    }
    }
});