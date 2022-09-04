
window.addEventListener ('load', function (){
    let form= document.querySelector ('.form');
    let acceptedExtensions = ['.jpg', '.png', '.gif'];
    inputName=document.getElementById ('name');
    inputPhone=document.getElementById ('phone');
    inputAvatar=document.getElementById ('avatar');


    const arrayInputs=[inputName,inputPhone,inputAvatar];
  
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let errors = [];
        let name = document.getElementById('name');
        if(name.value == ""){
            errors.push('Debes ingresar un nombre de Usuario');
        }else if(name.value.length < 4){
            errors.push('El nombre debe contener al menos 4 caracteres');
        }
        if (phone.value =="") {
            errors.push ('Debes ingresar un teléfono');
        } else if (phone.value.length<2) {
            errors.push ('El teléfono debe contener al menos 2 caracteres')
        }
    
        if (avatar.value!==acceptedExtensions) {
            errors.push ('Debes ingresar una imagen' + acceptedExtensions) //no me funciona
        }
        
           if(errors.length > 0){
            e.preventDefault();
            let errorList = document.querySelector('.errorList');
            for(let i = 0; i < errors.length; i++){
             errorList.innerHTML += "<li>"+ errors[i] + "</li>";
            }
        }
    })

    arrayInputs.forEach(function(inputs) {
        inputs.addEventListener("blur", function() {
        
        if(inputName.value==""){
        inputName.nextElementSibling.classList.add("is-invalid");
        inputName.nextElementSibling.innerHTML = 'Debes ingresar un nombre de Usuario';
        inputName.classList.remove("is-invalid")
        } else if (inputName.value.length<4) {
        inputName.nextElementSibling.classList.add("is-invalid");
        inputName.nextElementSibling.innerHTML = 'El nombre debe contener al menos 4 caracteres'
        inputName.classList.remove("is-invalid")
        }
    
        if(inputPhone.value==""){
        inputPhone.nextElementSibling.classList.add("is-invalid");
        inputPhone.nextElementSibling.innerHTML = 'Debes ingresar un teléfono';
        inputName.classList.remove("is-invalid")
        } else if (inputPhone.value.length<2) {
        inputPhone.nextElementSibling.classList.add("is-invalid");
        inputPhone.nextElementSibling.innerHTML = 'El teléfono debe contener al menos 2 caracteres'
        inputPhone.classList.remove("is-invalid")
        }

        if (inputAvatar.value!==acceptedExtensions){
        inputAvatar.nextElementSibling.classList.add("is-invalid"); //no me funciona//
        inputAvatar.nextElementSibling.innerHTML = 'Debes ingresar' + acceptedExtensions;
        inputAvatar.remove("is-invalid")
        } 
        })
        })
        })
    
  




























