const SPACEX_API = 'https://api.spacexdata.com/v3/launches';

async function algoritmoAlfa(payloadId, payloadAPI) { //S: O(1 + 1) → O(2)
    let respuesta = await fetch(payloadAPI); //T: O(1) | S: O(1)
    let data = await respuesta.json(); // T: O(1) | S: O(n); 'n' it's an array
    for (let i = 0; i < data.length; i++) { // T: O(n) | S: O(1)
        let payloads = data[i].rocket.second_stage['payloads']; // T: O(1) | S: O(1)
        for (let j = 0; j < payloads.length; j++) { // T: O(n) | S: O(1)
            if (payloadId == payloads[j].payload_id) { // T: O(1) | S: none
                return true; // T: O(1) | S: none
            }
        }
    }
    return false; // T: O(1) | S: none
}

/* 
 * Time Complexity: O(n * n + 1 + 1 + 1 + 1 + 1 + 1) → O (n² + 6) → O(n²)
 * Space Complexity: O(n + 5) → O(n)
 * Auxiliar space: O( n + 5 ) - O(n + 4) → O(1)
*/