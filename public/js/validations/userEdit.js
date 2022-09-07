
window.addEventListener ('load', function (){
    let form= document.querySelector ('.form');
    let inputName=document.getElementById ('name');
    let inputPhone=document.getElementById ('phone');
    let inputAvatar=document.getElementById ('avatar');
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let listErrors = document.querySelector(".errors")
    
    const arrayInputs =  [inputName, inputPhone,inputAvatar];
   
    form.addEventListener ('submit', function (e) {
    let errors = 0;
 
    if(!allowedExtensions.exec(inputAvatar.value)){
    errors ++;
    }

    arrayInputs.forEach(function(input) {
    if(input.name === "name" && input.value.length<4){
    errors++;
    }
    if(input.name === "phone" && input.value.length<4){
    errors++;
    }
            
     })

     if(errors == 0){
        form.submit();
         } else if (errors>0) {
         e.preventDefault ();
         listErrors.innerHTML += "Debes completar correctamente los campos a editar"; 
     }
 })

        inputAvatar.addEventListener ("change", function () {
        if(!allowedExtensions.exec(inputAvatar.value)){
        inputAvatar.nextElementSibling.innerHTML = 'Debes subir archivos con extensión .jpeg/.jpg/.png/.gif';
        } 
    }
   )
        arrayInputs.forEach(function(input) {
        input.addEventListener("blur", function() {
        
        if(input.name === "name" && input.value.length<4) {
        input.nextElementSibling.classList.add("is-invalid");
        input.nextElementSibling.innerHTML = 'El nombre debe contener al menos 4 caracteres'
        input.classList.remove("is-invalid")
        }
        if (input.name === "phone" && input.value.length<4) {
        input.nextElementSibling.classList.add("is-invalid");
        input.nextElementSibling.innerHTML = 'El teléfono debe contener al menos 4 caracteres'
        input.classList.remove("is-invalid")
        }


    })
    })
})

// if(input.name === "name" =="" && input.name === "phone" ==""){
 //   errors++;  
//}
/*if(input.value===""){
input.nextElementSibling.classList.add("is-invalid");
input.nextElementSibling.innerHTML = "Debes ingresar un " + input.dataset.nombre;
input.classList.remove("is-invalid")
        }*/

























