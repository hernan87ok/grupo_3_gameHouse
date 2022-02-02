window.addEventListener('load', function() {

    let formulario = document.querySelector('form.form-login');

    formulario.addEventListener('submit', function(e){

        let errors = [];

        //FALTA EMAIL VÁLIDO

        let email = document.querySelector('input#username');
            if(email.value == ''){
                errors.push('e-mail obligatorio');
            }

        let password = document.querySelector('input#password');
            if(password.value == ''){
                errors.push('Contraseña obligatoria');
            }

        if (errors.length > 0) {
            e.preventDefault();

            let ulErrors = document.querySelector('div.errors ul');
            for(let i = 0 ; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
            } 
        } else {} //alert('Completaste todos los campos correctamente')}
    
    })
})