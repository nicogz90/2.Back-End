/* función que reciba como parámetro un array de números enteros (positivos y/o negativos) 
y retorna el número del array que aparezca un número impar de veces.
Siempre se recibirá un array con un sólo número con esas características. */

/* Resuelto de 4 formas distintas. */

const numeros = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

/****************************************************************************/

// VERSIÓN 1:

function encontrarImpar_v1(numeros) {
  const cantOcurrencias = {};

  numeros.forEach((item) => {
    if (cantOcurrencias[item] === undefined) {
      cantOcurrencias[item] = 0;
    }
    cantOcurrencias[item]++;
  });

  for (const num in cantOcurrencias) {
    if (cantOcurrencias[num] % 2 === 1) {
      return num;
    }
  }
}

console.log("v1 = ", encontrarImpar_v1(numeros));

/****************************************************************************/

// VERSIÓN 2:

function encontrarImpar_v2(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    let cantOcurrencias = 0;
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        cantOcurrencias++;
      }
    }
    if (cantOcurrencias % 2 !== 0) {
      return numeros[i];
    }
  }
}

console.log("v2 = ", encontrarImpar_v2(numeros));

/****************************************************************************/

// VERSIÓN 3:

function encontrarImpar_v3(numeros) {
  if (numeros.length === 1) return numeros[0];

  numeros.sort();

  let count = 1;
  let lastItem = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (lastItem === numeros[i]) {
      count++;
    } else if (count % 2 === 1) {
      return numeros[i];
    } else {
      count = 1;
    }
    lastItem = numeros[i];
  }
  return numeros[numeros.length - 1];
}

console.log("v3 = ", encontrarImpar_v3(numeros));

/****************************************************************************/

// VERSIÓN 4:

function encontrarImpar_v4(numeros) {
  const numbersObjects = [];

  numeros.forEach((item) => {
    let numObj = numbersObjects.find((obj) => {
      return obj.value === item;
    });

    if (numObj) {
      numObj.count = numObj.count + 1;
    } else {
      numObj = {
        value: item,
        count: 1,
      };
    }

    numbersObjects.push(numObj);
  });

  const result = numbersObjects.find((obj) => {
    return obj.count % 2 === 1;
  });

  return result.value;
}

console.log("v4 = ", encontrarImpar_v4(numeros));

/****************************************************************************/
