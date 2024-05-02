function  validarFormulario(e){
   
    e.preventDefault();


    document.getElementById("nombreError").textContent = "";
    document.getElementById("apellidoError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passError").textContent = "";
    document.getElementById("passError2").textContent = "";
    document.getElementById("dateError").textContent = "";


    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;
    const nacimiento = document.getElementById("nacimiento").value;

let errores = false

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular para validar email
if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "El email no es válido.";
    errores = true;
}


if(nombre.trim()=== ""){
    document.getElementById("nombreError").textContent = "Debe introducir un Nombre";
    errores= true
}

if(apellido.trim()=== ""){
    document.getElementById("apellidoError").textContent = "Debe introducir un Apellido";
    errores= true
}

if (pass !== pass2) {
    document.getElementById("passError").textContent = "Las contraseñas no coinciden.";
    document.getElementById("passError2").textContent = "Las contraseñas no coinciden.";
    errores = true;
}

if (new Date(nacimiento) > new Date()) {
    document.getElementById("dateError").textContent = "La fecha de nacimiento no puede ser futura.";
    errores = true; }
    
   
if (!errores) {
        alert("Enviado con exito");
           }
}

document.getElementById("formulario").addEventListener("submit", validarFormulario, );







