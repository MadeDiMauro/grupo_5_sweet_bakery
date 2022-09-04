
window.addEventListener ('load', function (){
    let form= document.querySelector ('.form')
    let inputName=document.getElementById ('name')
    let inputEmail=document.getElementById ('email')
    let inputPassword=document.getElementById ('password')
    let inputAvatar=document.getElementById ('avatar')
    let listErrors = document.querySelector(".errors")
    let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let acceptedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
     
    
   const arrayInputs =  [inputName, inputEmail, inputPassword, inputAvatar];
  
   
    form.addEventListener ('submit', function (e) {
        
    e.preventDefault();
    let errors = [];
        arrayInputs.forEach(function(input) {
            if(input.value == ""){
                errors++;
                listErrors.innerHTML += "<li>El campo "+ input.dataset.nombre + " no puede estar vacío</li>";
            }
        })

    })
    
    arrayInputs.forEach(function(inputs) {
        inputs.addEventListener("blur", function() {
        
                    if(inputName.value===""){
                    inputName.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputName.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un nombre";
                    inputName.classList.remove("is-invalid")
                    } else if (inputName.value.length<2) {
                    inputName.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputName.nextElementSibling.nextElementSibling.innerHTML = 'Debes ingresar al menos dos caracteres'
                    inputName.classList.remove("is-invalid")
                    }
                    if (inputEmail.value==""){
                    inputEmail.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputEmail.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un email";
                    inputEmail.classList.remove("is-invalid")
                    } else if (!expression.test(email)) { //(valid==false) let valid=expression.test(email)
                    inputEmail.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputEmail.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un email válido";
                    inputEmail.classList.remove("is-invalid")
                    }
                    if (inputPassword.value=""){ //no me lee este
                    inputPassword.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputPassword.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar una contraseña";
                    inputPassword.classList.remove("is-invalid")
                    } else if (inputPassword.value<8){
                    inputPassword.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputPassword.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar al menos ocho caracteres";
                    inputPassword.classList.remove("is-invalid")
                                    
                    if (inputAvatar.value!==acceptedExtensions){
                    inputAvatar.nextElementSibling.classList.add("is-invalid");
                    inputAvatar.nextElementSibling.innerHTML = 'Debes ingresar' + acceptedExtensions;
                    inputAvatar.remove("is-invalid")
                    } else if (inputAvatar.value="") {
                    inputAvatar.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputAvatar.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar una imagen";
                    inputAvatar.classList.remove("is-invalid")
                    }
                }
            })          
    })

})

/*
    if (errors.length>0) {
        e.preventDefault();
        let ulErrors=document.querySelector ('div.errors ul')
    
    for (let i=0; i<errors.length; i++) {
        ulErrors.innerHTML+= "<li>" + ulErrors [i] + "</li>"

    }
}
*/