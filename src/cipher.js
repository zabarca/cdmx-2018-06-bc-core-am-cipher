window.cipher = {

    encode: (offset, string) => {
    let result = "";
    let stringCapturado = string.toUpperCase(); //pasando string a mayusculas
    let offsetCapturado = parseInt(offset);//pasando el numero de espacioas a recorrer a type number
    for (let i = 0; (i<stringCapturado.length); i++) { //palabra de 0 hasta su largo
      let c = stringCapturado.charCodeAt(i); //palabra convertida a ascii
      console.log(c);
    //65 al 90 son sólo mayúsculas
    if  (65 <= c && c <=  90) {
      let completo = (c - 65 + offsetCapturado) % 26 + 65;
      console.log(completo);
      result += String.fromCharCode(completo);// se convierten a letra

    } else if (c === 32 || (c >= 33 || c <=64) || (c>=91 || c <=96 ) || (c>=123 || c <= 126)) {
    result += String.fromCharCode(c);
    }
  }
  return result;
},


    decode: (offset, string) => {
      let result = "";
      let stringCapturado = string.toUpperCase();
      let offsetCapturado = parseInt(offset);
      for (let i = 0; (i<stringCapturado.length); i++) {
        let c = stringCapturado.charCodeAt(i);
        console.log(c);

        if (65 <= c && c <= 90) {
          let completo1 = (c - 90 - offsetCapturado) % 26 + 90;
          //console.console.log(completo1);
          result += String.fromCharCode(completo1);

        }else if  (c === 32 || (c >= 33 || c <=64) || (c>=91 || c <=96 ) || (c>=123 || c <= 126)) {
            result += String.fromCharCode(c);
          }
        }
        return result;
      },









//   descifrar : () => {
//   let palabra2 = document.getElementById("frase").value;
//   let palabra3 = palabra2.toUpperCase();
//   let codigoPosicion= document.getElementById("pos").value;
//   for (let i = 0; (i< palabra3.length); i++){
//     let codificado = palabra3.charCodeAt(i);
//     console.log(codificado); //regresa el codigo ascii del valor inicial
//     result2 += String.fromCharCode(codificado);
//     console.log(result2);
//   }
//   return resultado2.innerHTML= "El mensaje secreto es " + (result2);
// }
//
//


};
