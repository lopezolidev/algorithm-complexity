//Each compiler assigns a different size in memory to variables, be them strings, integers, booleans, arrays, etc...
// However, a way to measure space complexity in a given algorithm, we can look it up through the number of variables initialized and used inside the studied function

function count(n){
    for (let i = 0; i< n; i++){
        console.log(i)
    }
    //function count recieves a number "n" and generates a variable 'i' that will be the iterator.
}

function repeatArray(arr){
    let repeated_arr = [...arr];
    return repeated_arr;
    //this function recieves an array (which occupies some space in memory different than a string, integers or other elements), and generates another array which is a copy (using propagation operator) that will be returned
}

function convertToString(arr){
    let result = arr.map(el => el.toString());
    return result;
    //recieving an array and generating an array of strings from elements of recieved array. This result is an evidence of how different the compiler stores numbers or other elements from strings
}

function generateMatrix(value){
    let x = new Array(value);
    //x → array of 'value' slots

    for(let i = 0; i < value; i++){
        x[i] = new Array(value).fill(i);
        //on each position inside x's array, a new array will be generated of 'value' slots and filled with the value of 'i' on each iteration
    }
    return x;
}

console.log(generateMatrix(5));
// [
//     [ 0, 0, 0, 0, 0 ],
//     [ 1, 1, 1, 1, 1 ],
//     [ 2, 2, 2, 2, 2 ],
//     [ 3, 3, 3, 3, 3 ],
//     [ 4, 4, 4, 4, 4 ]
//   ]