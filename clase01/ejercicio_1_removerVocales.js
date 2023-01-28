/* Resuelto de 2 formas distintas.
 * Notar que ambas versiones no quitan las vocales que tengan acentos.*/

/****************************************************************************/

// VERSIÓN 1:

function removerVocales(str) {
  let strArray = [...str];
  const vowels = [..."aeiouAEIOU"];

  strArray = strArray.filter((letter) => {
    return !vowels.includes(letter);
  });

  return strArray.join("");
}

console.log("v1 >> ", removerVocales("Hola MundO!!"));

/****************************************************************************/

// VERSIÓN 2 (RegEx: Regular expressions)

function removerVocales_v2(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log("v2 >> ", removerVocales_v2("Hola MundO!!"));

/****************************************************************************/
