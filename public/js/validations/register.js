
window.addEventListener ('load', function (){
    let form= document.querySelector ('.form')
    let inputName=document.querySelector ('name')
    let inputEmail=document.getElementById ('email')
    let inputPassword=document.getElementById ('password')
    let inputAvatar=document.getElementById ('avatar')

    const arrayInputs =  [inputName, inputEmail, inputPassword, inputAvatar];
  

    form.addEventListener ('submit', function (e) {
        e.preventDefault();
        
        arrayInputs.forEach(function(input) {
        input.addEventListener("blur", function() {
                    if(inputName.value === ""){
                    input.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    input.classList.add("is-invalid")
                    input.classList.remove("is-valid")
                    input.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un nombre";
                } else if  (inputName.value.lenght>2) {
                    input. nextElementSibling.nextElementSibling.innerHTML = 'Debes ingresar al menos dos caracteres'
                    input.classList.add("is-invalid")
                    input.classList.remove("is-valid")
                }
            })
        })
    })
})
/*
    if (inputName.value=""){
        errors.push ('Debes ingresar un nombre');
    } else if (inputName.value.lenght>2) {
        errors.push ('Debes ingresar al menos dos caracteres')
    }

    let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (inputEmail.value=""){
        errors.push ('Debes ingresar un email');
    } else if ( !expression.test(email) ){
        errors.push ('Debes ingresar un email válido')
    }

    
    if (inputPassword.value=""){
    errors.push ('Debes ingresar una contraseña')
    } else if (inputPassword.value>8) {
        errors.push ('Debes ingresar al menos ocho caracteres')
    }

    let acceptedExtensions = ['.jpg', '.png', '.gif'];
    if (inputAvatar.value!==acceptedExtensions) {
        errors.push ('Debes ingresar' + acceptedExtensions)
    }

    if (errors.length>0) {
        e.preventDefault();
        let ulErrors=document.querySelector ('div.errors ul')
    
    for (let i=0; i<errors.length; i++) {
        ulErrors.innerHTML+= "<li>" + errors [i] + "</li>"

    }
}*/
