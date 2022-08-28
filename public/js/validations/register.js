window.addEventListener ('load', function (){
    let form= document.querySelector ('form')
    let inputName=document.getElementById ('name')
    let inputEmail=document.getElementById ('email')
    let inputPassword=document.getElementById ('password')
    let inputAvatar=document.getElementById ('avatar')
    /*let listadoErrores = document.querySelector(".errores");*/
    let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];
    let errores=[]


    if(errores.length > 0){
        e.preventDefault();

    if (inputName.value=""){
        errores.push ('Debes ingresar un nombre');
    } else if (inputNombre.value.lenght>2) {
        errores.push ('Debes ingresar al menos dos caracteres')
    }

    if (inputEmail.value=""){
        errores.push ('Debes ingresar un email');
    }
    
    if ( !expression.test(email) ){
        errores.push ('Debes ingresar un email válido')
    }

    if (inputPassword.value=""){
        errores.push ('Debes ingresar una contraseña')
    } else if (inputPassword.value>8) {
        errores.push ('Debes ingresar al menos ocho caracteres')

    }

    if (inputAvatar.value!==acceptedExtensions) {
        errores.push ('Debes ingresar' + acceptedExtensions)
    }
    
}
    

})
