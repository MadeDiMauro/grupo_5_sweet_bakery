window.addEventListener("load", function(){
    let form = document.querySelector(".form")
    let inputUser = document.getElementById ("email")
    let inputPassword = document.getElementById ("password")
    let listErrors = document.querySelector(".errors")
    let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    

    const arrayInputs = [inputUser, inputPassword];

    console.log(inputUser);

    let errors = 0;
    form.addEventListener ('submit', function (e) {
        
            
            arrayInputs.forEach(function(input) {
                if(input.value == ""){
                    e.preventDefault();                   
                    errors++;
                    listErrors.innerHTML += "<li>El campo "+ input.dataset.nombre + " no puede estar vacío</li>";
                    listErrors.classList.add("is-invalid")

                }
            })
    
        })

        arrayInputs.forEach(function(input){
            input.addEventListener("blur",function(){
                if (inputPassword.value==""){
                    inputPassword.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputPassword.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar tu contraseña";
                    inputPassword.classList.remove("is-valid")
                }
                if (inputUser.value==""){
                    inputUser.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputUser.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un email";
                    inputUser.classList.remove("is-valid")
                    } else if (!expression.test(email)) { 
                    inputUser.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                    inputUser.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un email válido";
                    inputUser.classList.remove("is-valid")
                    } 
            })
        })
})