document.getElementById("llamar").addEventListener("click",function(){
  let offset = document.getElementById("pos").value;
  let string = document.getElementById("frase").value;

  let resultado = cipher.encode(offset,string);

  document.getElementById("resultado").innerHTML = resultado;
})

document.getElementById("llamar1").addEventListener("click",function(){
  let position = document.getElementById("pos").value;
  let palabra = document.getElementById("frase").value;

  let resultado = cipher.decode(position,palabra);

  document.getElementById("resultado").innerHTML = resultado;
})
