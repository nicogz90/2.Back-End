/* función que reciba como parámetro un número natural (entero positivo) 
y retorne la suma de todos los números múltiplos de 3 o 5, 
que sean menores al número recibido por parámetro. */

function sumarMultiplos(numero) {
  let suma = 0;

  for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }

  return suma;
}

// TESTS:
console.log("1 >> ", sumarMultiplos(1));
console.log("2 >> ", sumarMultiplos(2));
console.log("3 >> ", sumarMultiplos(3));
console.log("6 >> ", sumarMultiplos(6));
console.log("10 >> ", sumarMultiplos(10));
