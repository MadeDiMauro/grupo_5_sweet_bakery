
window.addEventListener ('load', function (){
    let form= document.querySelector ('.form')
    let inputName=document.getElementById ('name')
    let inputEmail=document.getElementById ('email')
    let inputPassword=document.getElementById ('password')
    let inputAvatar=document.getElementById ('avatar')
    let listErrors = document.querySelector(".errors")
    let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
     
    
   const arrayInputs =  [inputName, inputEmail, inputPassword];
  
   
    form.addEventListener ('submit', function (e) {
    let errors = 0;
    
    if(!allowedExtensions.exec(inputAvatar.value)){
    errors ++;
    }

        arrayInputs.forEach(function(input) {
            if(input.value == ""){
                errors++;
                
            }
            if(input.name === "name" && input.value.length<2){
                errors++;
            }
            if(!expression.test(input.value) && input.name === "email"){
                errors++;
            }
            if(input.name === "password" && input.value.length<8){
                errors++;
                
            }
           
        })

        if(errors == 0){
           form.submit();
            } else if (errors>0) {
            e.preventDefault ();
            listErrors.innerHTML += "Debes completar el formulario"; 
        }

    })
    inputAvatar.addEventListener ("change", function () {
        if(!allowedExtensions.exec(inputAvatar.value)){
            inputAvatar.nextElementSibling.classList.add("is-invalid");
            inputAvatar.nextElementSibling.innerHTML = 'Debes subir archivos con extensión .jpeg/.jpg/.png/.gif';
            inputAvatar.classList.remove("is-invalid")
        }

    })
        arrayInputs.forEach(function(input) {
        input.addEventListener("blur", function() {
        
                    if(input.value===""){
                    input.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    input.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un " + input.dataset.nombre;
                    input.classList.remove("is-invalid")
                    }
                   
                    if (input.name === "name" && input.value.length<2) {
                    input.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    input.nextElementSibling.nextElementSibling.innerHTML = 'Debes ingresar al menos dos caracteres'
                    input.classList.remove("is-invalid")
                    }
                    if (!expression.test(input.value) && input.name === "email") { //(valid==false) let valid=expression.test(email)
                    input.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    input.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un email válido";
                    input.classList.remove("is-invalid")
                    }
                    if (input.name === "password" && input.value.length<8){
                    input.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    input.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar al menos ocho caracteres";
                    input.classList.remove("is-invalid")
                    }               
                     /*if (input.value!==acceptedExtensions){
                    input.nextElementSibling.classList.add("is-invalid");
                    input.nextElementSibling.innerHTML = 'Debes ingresar' + acceptedExtensions;
                    input.remove("is-invalid")
                    }*/
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