/**
 * Complejidad Temporal -> O(n * n + 9 ) → O(n²)
 * Complejidad Espacial -> O( n + 5 ) → O(n)
 * Espacio Auxiliar -> O( n + 5 ) - O( n ) → O(5) → O(1) |  Total space complexity - input space
 */
function selectionSort(arreglo) { // Space complexity: O(n); array with 'n' elements in memory

  let longitud = arreglo.length; // Time complexity: O(1) | Space complexity: O(1)

  for (let i = 0; i < longitud; i++) { // Time complexity: O(n) | Space complexity: O(1)
    
    let minimo = i; // Time complexity: O(1) | Space complexity: O(1)

    for (let j = i + 1; j < longitud; j++) { // Time complexity: O(n) | Space complexity: O(1)
      if (arreglo[j] < arreglo[minimo]) { // Time complexity: O(1) | Space complexity: none
        minimo = j; // Time complexity: O(1) | Space complexity: none
      }
    }
    if (minimo != i) { // Time complexity: O(1) | Space complexity: none
      let temporal = arreglo[i]; // Time complexity: O(1) | Space complexity: O(1)
      arreglo[i] = arreglo[minimo]; // Time complexity: O(1) | Space complexity: none
      arreglo[minimo] = temporal; // Time complexity: O(1) | Space complexity: none
    }
  }
  return arreglo; // Time complexity: O(1) | Space complexity: none
}
