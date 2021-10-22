
document.getElementById("contacto__submit").addEventListener("click", function(event){
    event.preventDefault()
});
function validarCorreo(correo){
    var inputCorreo = correo;
   var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // var expReg= /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/g;
    var esValido= expReg.test(inputCorreo);
    const formulario = document.getElementById('formulario');
    let validoSi = `
    <p>valido!</p>
    `
    let validoNo = `
    <p>No valido!</p>
    `
    var mensaje = document.getElementById('mensaje__input')
    if(esValido==true){
        mensaje.className = "mensaje__input-valid mensaje__valido-si";
        mensaje.innerHTML = validoSi;
        formulario.reset()

        setTimeout(function(){
            mensaje.className = "mensaje__input-valid"
        },2000);
  
    }else{
        mensaje.className = "mensaje__input-valid mensaje__valido-no";
        mensaje.innerHTML = validoNo;
        formulario.reset();
        setTimeout(function(){
            mensaje.className = "mensaje__input-valid"
        },2000);
     }
 

}
