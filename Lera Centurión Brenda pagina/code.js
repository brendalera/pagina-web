//Botón

let button = document.getElementById("botón");
let isBlack = false;

button.addEventListener("click", function(){
    if(isBlack === true){
     document.body.style.background = 'beige';
     document.body.style.color = "black"
     button.innerHTML = 'Modo oscuro'
     isBlack = false
   } else {
     document.body.style.background = "black";
     document.body.style.color = 'white';
     button.innerHTML = 'Modo claro'
     isBlack = true
   }
});


//Login

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username=== 'agustina' && password==='123' ){
        var url = "alumno.html?usuario=" + username;
        window.location.href = url;
    }
    else if (username=== 'rodrigo' && password==='123' ){
        var url = "docente.html?usuario=" + username;
        window.location.href = url;
    }
    else {
        alert("Usuario incorrecto");
    }
});

