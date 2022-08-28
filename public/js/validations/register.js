
    /*let listadoErrores = document.querySelector(".errores");*/
window.addEventListener ('load', function (){
    let form= document.querySelector ('form')
    let arrayInputs = Array.from(form.elements);
    let listErrors = document.querySelector(".errors");

    form.addEventListener ('submit', function (e) {
        e.preventDefault();

    /*let errors = 0;
    arrayInputs.forEach(function(input) {
    if(input.value == ""){
        errors++;
        listErrors.innerHTML += "<li>El campo "+ input.dataset.name +" no puede estar vacío</li>";
    } 
})
    })
})*/
    let errors=[]

    let inputName=document.querySelector ('#name')
    if (inputName.value=""){
        errors.push ('Debes ingresar un nombre');
    } else if (inputName.value.lenght>2) {
        errors.push ('Debes ingresar al menos dos caracteres')
    }

    /*let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let inputEmail=document.getElementById ('email')
    if (inputEmail.value=""){
        errors.push ('Debes ingresar un email');
    } else if ( !expression.test(email) ){
        errors.push ('Debes ingresar un email válido')
    }

    let inputPassword=document.getElementById ('password')
    if (inputPassword.value=""){
        errors.push ('Debes ingresar una contraseña')
    } else if (inputPassword.value>8) {
        errors.push ('Debes ingresar al menos ocho caracteres')
    }

    let inputAvatar=document.getElementById ('avatar')
    let acceptedExtensions = ['.jpg', '.png', '.gif'];
    if (inputAvatar.value!==acceptedExtensions) {
        errors.push ('Debes ingresar' + acceptedExtensions)
    }
*/
    if (errors.length>0) {
        e.preventDefault();
        let ulErrors=document.querySelector ('div.errors ul')
    
    for (let i=0; i<errors.length; i++) {
        ulErrors.innerHTML+= "<li>" + errors [i] + "</li>"

    }
}
    })
})

