function validarFormulario(){
    let nombre= document.getElementById('Nombres_Apellidos').value
    let email= document.getElementById('email').value
    let campo= document.getElementById('campo').value
    if (nombre==="" || email==="" || campo==="") {
        alert('Todos los campos son obligatorios.')
        return false;
    }    
    return true
}
