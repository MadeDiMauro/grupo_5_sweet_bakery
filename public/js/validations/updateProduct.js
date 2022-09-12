window.addEventListener('load', function(){
    let form = document.querySelector('.newProduct_form');
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let inputAvatar=document.getElementById ('imgProduct');
    let ban = false;
    
    inputAvatar.addEventListener ("change", function () {
        if(!allowedExtensions.exec(inputAvatar.value)){
            ban = true;
        }else{
            ban = false;
        }
    })

    form.addEventListener('submit', function(e){
        let errors = [];
        let name = document.getElementById('name');

        if(name.value == ""){
            errors.push('Debes ingresar un nombre de producto');
        }else if(name.value.length < 5){
            errors.push('El nombre debe contener al menos 5 caracteres');
        }

        let category = document.getElementById('category');

        if(category.value == ""){
            errors.push('Debes seleccionar una categoría');
        }

        let price = document.getElementById('price');

        if(price.value == ""){
            errors.push('Debes ingresar el precio del producto');
        }

        let description = document.querySelector('textarea');

        if(description.value.length < 20){
            errors.push('La descripción debe contener al menos 20 caracteres');
        }

        if(ban == true) {
            errors.push('Debes subir archivos con extensión .jpeg/.jpg/.png/.gif');
        }
               

        if(errors.length > 0){
            e.preventDefault();
            console.log(errors);
            let errorList = document.querySelector('.errorList');

            errorList.innerHTML = "";
            for(let i = 0; i < errors.length; i++){
                errorList.innerHTML += '<li>' + errors[i] + '</li>';
            }
        }
    })
})
