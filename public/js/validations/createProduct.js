window.addEventListener('load', function(){
    let form = document.querySelector('.newProduct__form');

    form.addEventListener('submit', function(e){
        let errors = [];
        let name = document.getElementById('name');

        if(name.value == ""){
            errors.push('Debes ingresar un nombre de producto');
        }else if(name.value.length < 5){
            errors.push('El nombre debe contener al menos 5 caracteres');
        }

        /*let category = document.getElementById('category');

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
        }*/

        


        if(errors.length > 0){
            e.preventDefault();

            let errorList = document.querySelector('.errorList');

            for(let i = 0; i < errors.length; i++){
                errorList.innerHTML += errors[i];
            }
        }
    })
})