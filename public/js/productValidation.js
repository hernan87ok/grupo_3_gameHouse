window.addEventListener('load', function() {

    let formulario = document.querySelector('form.form-product-create')


    formulario.addEventListener('submit', function(e){

        let errors = [];

        //let imagen = document.querySelector('#imagenProducto');
        //if(imagen.value == ''){
        //    errors.push('')
        //}
        let nombre = document.querySelector('input#nombre');
            if(nombre.value == ''){
                errors.push('Campo obligatorio');
            } else if (nombre.value.length < 5) {
                errors.push('Debe tener al menos 5 caracteres');
            }

        let precio = document.querySelector('input#precio');
            if(precio.value == ''){
                errors.push('Campo obligatorio');
            }

            e.preventDefault();

        let descripcion = document.querySelector('#descripcionProducto');
            if(descripcion.value == ''){
                errors.push('Campo obligatorio');
            } else if (descripcion.value.length < 20) {               
                errors.push('Debés tener al menos 20 caracteres')
                }

            if (errors.length > 0) {
                e.preventDefault();

                let ulErrors = document.querySelector('div.errors ul');
                for(let i = 0 ; i < errors.length; i++) {
                    ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
                } 
            } else {alert('Completaste todos los campos correctamente')}
        
    })
})