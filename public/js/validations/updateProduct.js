window.addEventListener('load', function(){

    let form = document.querySelector('form');
    let fileInput = document.getElementById('imgProduct');
    let filePath = fileInput.value;
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    form.addEventListener('submit', function(e){
        e.preventDefault();


        /*Valida la extensión de imágenes ue sean jpg, png o gif*/
        if(!allowedExtensions.exec(filePath)){
            alert('Debes subir archivos con extensión .jpeg/.jpg/.png/.gif');
            fileInput.value = '';
            return false;
        }
    });
    
    
});

