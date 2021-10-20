function validarCorreo(correo){
  //  var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var expReg= /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/g;
    var esValido= expReg.test(correo);
    if(esValido==true){
        alert('Correo valido.');
    }else{
        alert('Correo no valido.');
    }
}
