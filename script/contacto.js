function myform(datos) {
  event.preventDefault();

  let formi = {
    nombre: datos.nombrect.value,
    apellido: datos.apellidoct.value,
    correo: datos.correoct.value,
    contrasena: datos.contrasenact.value,
  };
  console.log("formulario: ", formi);
}
