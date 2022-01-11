window.addEventListener('load', function() {

    let formulario = document.querySelector('form.form-registro');

    formulario.addEventListener('submit', function(e){

        let errors = [];

        let nombre = document.querySelector('input#firstName');
            if(nombre.value == ''){
                errors.push('Nombre obligatorio');
            } else if (nombre.value.length < 2) {
                errors.push('Su nombre debe tener al menos 2 caracteres');
            }

        let apellido = document.querySelector('input#lastName');
            if(apellido.value == ''){
                errors.push('Apellido obligatorio');
            } else if(apellido.value.length < 2) {
                errors.push('Su apellido debe tener al menos 2 caracteres');
            }

        //let admitted= ['.jpg','.jpeg','.png','.gif'];
        //FALTA VALIDACION IMAGENES

        let email = document.querySelector('input#email');
            if(email.value == ''){
                errors.push('e-mail obligatorio');
            }

        let password = document.querySelector('input#password');
            if(password.value == ''){
                errors.push('Contraseña obligatoria');
            } else if (password.value.length < 8) {
                errors.push('Su contraseña debe tener al menos 8 caracteres');
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