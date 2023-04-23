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
//ejercicio 4
document.getElementById("verificar").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const materia = document.getElementById("materia").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 3.0) {
        document.getElementById("resultado").style.color = "green";
        document.getElementById("resultado").textContent = 'Felicitaciones '+nombre+', su nota es '+promedio.toFixed(2)+' pasaste la materia '+materia;
    } else {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").textContent = 'Lo siento '+nombre+', su nota es '+promedio.toFixed(2)+', perdiste la materia '+materia;
    }
});
//ejercicio 5
document.getElementById('btn_idNumPar')
.addEventListener('click', function () {
    let ingNumero = document.getElementById('ingNum').value;
    if (!ingNumero) {
        document.getElementById("parImpar").innerText = ("Debe rellenar los campos completos");
    } else {
        if(isNaN(ingNumero)||ingNumero%1!=0||ingNumero<0){
            document.getElementById("parImpar").innerHTML = (" Debe ingresar numeros enteros positivos");
        }else{
        if(ingNumero%2==0){
            document.getElementById("parImpar").innerHTML = ingNumero+" es par";
        }else{
            document.getElementById("parImpar").innerHTML = ingNumero+" es impar";
        }}
    }
});

//ejercicio 6
let texto = document.getElementById('textoVer');
let buscar = document.getElementById('buscar');

document.getElementById('btn_bus').addEventListener('click', function() {
  let textoValue = texto.value;
  let buscarValue = buscar.value;

  if (buscarValue != '') {
    let regex = new RegExp(buscarValue, 'gi');
    let resultado = textoValue.replace(regex, function (match) {
      return '<span class="resaltado">' + match + '</span>';
    });
    document.getElementById('identificado').innerHTML = resultado;
  } else {
    document.getElementById('identificado').innerHTML = textoValue;
  }
});


//ejercicio 7
document.getElementById('btn_divNum')
.addEventListener('click', function () {
    let num1 = document.getElementById('divNum').value;
    let num2 = document.getElementById('divNum2').value;
    if (!num1 || !num2) {
        document.getElementById("divResultado").innerText = ("Debe rellenar los campos completos");
    } else {
        if(num1%2!=0||num1<0){
            if(num1<0){
                document.getElementById("divResultado").innerHTML = num1+(" No es un numero entero");
            }if(num1%2!=0){
            document.getElementById("divResultado").innerHTML = num1+(" No es un numero entero");}
            if(num1%2!=0&&num1<0){
            document.getElementById("divResultado").innerHTML = num1+(" No es un numero entero positivo");}
            if(num2%2!=0||num2<0){
                if(num2<0){
                    document.getElementById("divResultado").innerHTML = num2+(" No es un numero positivo");
                }if(num2%2!=0){
                document.getElementById("divResultado").innerHTML = num2+(" No es un numero entero");}
                if(num2%2!=0&&num2<0){
                document.getElementById("divResultado").innerHTML = num2+(" No es un numero entero positivo");}
            }}
        else{
        if(num1%num2==0){
            document.getElementById("divResultado").innerHTML = num1+" es divisible entre "+ num2;
        }else{
            document.getElementById("divResultado").innerHTML = num1+" no es divisible entre "+ num2;
        }}
    }
});

//ejercicio 8
document.getElementById('btn_idNum')
.addEventListener('click', function recorrido() {
    let numero = document.getElementById('verNum').value;
    if (!numero) {
        document.getElementById("verNumero").innerText = ("Debe rellenar los campos completos");
    } else {
        let numerosRec='';
        let recorrer= numero.split(',');
        for(let numero of recorrer){
        if(isNaN(numero)||numero%1!=0){
            numerosRec+= "<br> "+numero+ " No es un numero entero";
        }else{
        if(numero%2==0){
            numerosRec+= "<br> "+numero+" es número par";
        }else{
            numerosRec+="<br> "+ numero+" es impar";
        }}
        }
        document.getElementById("verNumero").innerHTML = numerosRec;
    }
});

recorrido();