window.addEventListener("load", function () {
    let form = document.querySelector(".form")
    let inputUser = document.getElementById("email")
    let inputPassword = document.getElementById("password")
    let listErrors = document.querySelector(".errors")
    let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/


    const arrayInputs = [inputUser, inputPassword];

    console.log(inputUser);

    let errors = 0;
    form.addEventListener('submit', function (e) {


        arrayInputs.forEach(function (input) {
            if (input.value == "") {
                e.preventDefault();
                errors++;
                listErrors.innerHTML = "";
                listErrors.innerHTML += "<li>El formulario no puede estar incompleto</li>";
                listErrors.classList.add("is-invalid")

            }
        })

    })

    arrayInputs.forEach(function (input) {
        input.addEventListener("blur", function () {
            if (input.value === "") {
                input.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                input.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar tu " + input.dataset.nombre;
                input.classList.remove("is-invalid")
            } else {
                input.nextElementSibling.nextElementSibling.innerHTML = "";
            }
            
            if (input.name === "email" && !expression.test(input.value)) {
                input.nextElementSibling.nextElementSibling.classList.add("is-invalid");
                input.nextElementSibling.nextElementSibling.innerHTML = "Debes ingresar un email válido";
                input.classList.remove("is-valid")
            } 
        })
    })
})