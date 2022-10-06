// exportclass Utils {
    
// function controlRutas(gruops){
//     console.log(gruops)
//   //   let error = null;
//   let maxPeople = 0;
//   let tamanios = [];
// //   const llave = Object.keys(event);

//   //   error = llave != "groups" && "Error en el nombre del parametro.";

//   if (!error) {
//     const grupos = gruops.split(",");
//     let cantGrupos = grupos.length;

//     //se suman la cantidad de iteraciones a realizar (tamaño maximo de x)
//     grupos.forEach(function (numero) {
//       //   error =
//       //     (numero <= 0 || numero == "" || isNaN(numero)) &&
//       //     "Por favor validar los parametros, no se admiten valores negativos, nulos, 0(cero), letras o caracteres especiales.";
//       maxPeople += parseInt(numero);
//     });

//     if (!error) {
//       for (let x = 1; x <= maxPeople; x++) {
//         let continua = true;
//         let g = 1;
//         let indicador = true;
//         let indice = 0;
//         let cumple = true;
//         let validaCupo = 0;

//         while (continua && g <= cantGrupos) {
//           if (indicador) {
//             validaCupo = x - grupos[indice];
//           } else {
//             validaCupo = validaCupo - grupos[indice];
//           }
//           indicador = validaCupo > 0 ? false : true;

//           if (validaCupo < 0 || (validaCupo > 0 && g == cantGrupos)) {
//             continua = false;
//             cumple = false;
//           }
//           indice++;
//           g++;
//         }
//         if (cumple) {
//           tamanios.push(x);
//         }
//       }
//       tamanios = tamanios.join(",");
//     }
//   }

//   if (error) {
//     return { error };
//   } else {
//     return { sizes: tamanios };
//   }
// };
// }
// module.exports = Utils
// // ts = controlRutas;
