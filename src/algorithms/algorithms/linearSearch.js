/**
 * Complejidad Temporal -> O( n + 3 ) → O(n)
 * Complejidad Espacial -> O( n + 1 ) → O(n)
 * Espacio Auxiliar -> O( n + 1 ) - O( n ) → O(1) | Total space complexity - input space
 */
function linearSearch(arreglo, clave) {  // Space complexity: O(n + 1) → O(n); n: an array with 'n' elements
  for (let indice = 0; indice < arreglo.length; indice++) { // Time complexity: O(n) | Space complexity: O(1)
    if (arreglo[indice] === clave) { // Time complexity: O(1) | S.C: None
      return indice; // Time complexity: O(1) | S.C: None
    }
  }
  return -1; // Time complexity: O(1)
}
