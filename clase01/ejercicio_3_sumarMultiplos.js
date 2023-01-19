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
console.log(sumarMultiplos(1));
console.log(sumarMultiplos(2));
console.log(sumarMultiplos(3));
console.log(sumarMultiplos(6));
console.log(sumarMultiplos(10));
