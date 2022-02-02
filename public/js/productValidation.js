window.addEventListener('load', function() {

    let formulario = document.querySelector('form.form-product-create')


    formulario.addEventListener('submit', function(e){

        let errors = [];

        //let admitted= ['.jpg','.jpeg','.png','.gif'];
        //FALTA VALIDACION IMAGENES

        
        let nombre = document.querySelector('input#nombre');
            if(nombre.value == ''){
                errors.push('Nombre obligatorio');
            } else if (nombre.value.length < 5) {
                errors.push('El nombre debe tener al menos 5 caracteres');
            }

        let precio = document.querySelector('input#precio');
            if(precio.value == ''){
                errors.push('Precio obligatorio');
            }

        let descripcion = document.querySelector('#descripcionProducto');
            if(descripcion.value == ''){
                errors.push('Descripción obligatoria');
            } else if (descripcion.value.length < 20) {               
                errors.push('Su descripción debe tener al menos 20 caracteres')
                }

            if (errors.length > 0) {
                e.preventDefault();

                let ulErrors = document.querySelector('div.errors ul');
                for(let i = 0 ; i < errors.length; i++) {
                    ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
                } 
            } else {}//alert('Completaste todos los campos correctamente')}
        
    })
})