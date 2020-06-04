var numeroCPU = 0;
var numeroUsuario = 0

numeroCPU = Math.floor((Math.random() *10) + 1);

do {
 numeroUsuario = parseInt(prompt('Adivina el número entero que estoy pensando del 1 al 10'))
  if(numeroUsuario == numeroCPU){
  alert('¡HAZ HACERTADO!');
 }
  else{
    if(numeroCPU < numeroUsuario){
      alert('el número es más pequeño');
    }
    else{
      alert('el número es mayor');
    }
  }

} while (numeroCPU != numeroUsuario);
