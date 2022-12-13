/**
 * Complejidad Temporal -> O( n * n + 6 ) → O(n²)
 * Complejidad Espacial -> O( n + 4 ) → O(n)
 * Espacio Auxiliar -> O( n + 4 ) - O ( n ) → O(4) → O(1) | Total space complexity - input space
 */
function bubbleSort(arreglo) { // Space complexity: O(n); array with 'n' elements
  let longitud = arreglo.length; // Time complexity: O(1) | Space complexity: O(1)
  for (let i = 0; i < longitud; i++) { // Time complexity: O(n) | Space complexity: O(1)
    for (let j = 0; j < longitud; j++) { // Time complexity: O(n) | Space complexity: O(1)
      if (arreglo[j] > arreglo[j + 1]) { // Time complexity: O(1) | Space complexity: none
        let temporal = arreglo[j]; // Time complexity: O(1) | Space complexity: O(1)
        arreglo[j] = arreglo[j + 1]; // Time complexity: O(1) | Space complexity: none
        arreglo[j + 1] = temporal; //  Time complexity: O(1) | Space complexity: none
      }
    }
  }
  return arreglo; // Time complexity: O(1) | Space complexity: none
}
