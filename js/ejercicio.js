// ejercicio 1

function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' caracteres';
}

let texto= document.getElementById('btn_identificar')
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