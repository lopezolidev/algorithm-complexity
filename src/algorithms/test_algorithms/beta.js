const SPACEX_API = 'https://api.spacexdata.com/v3/launches';

async function algoritmoBeta(payloadId, payloadAPI) {
    let arreglosCoinciden = (arreglo1, arreglo2) => {
        if (arreglo1.length != arreglo2.length) { // T.C O(1)
            return false; // T.C O(1)
        }
        for (let i = 0; i < arreglo1.length; i++) { // T.C O(n)
            if (arreglo1[i] != arreglo2[i]) { // T.C O(1)
                return false; // T.C O(1)
            }
        }
        return true; // T.C O(1)
    };
    let respuesta = await fetch(payloadAPI); // T.C O(?)
    let data = await respuesta.json(); // T.C O(?)
    let payloadIdArray = payloadId.split('');  // T.C O(1)
    for (let i = 0; i < data.length; i++) { // T.C O(n)
        let payloads = data[i].rocket.second_stage.payloads; // T.C O(1)
        for (let j = 0; j < payloads.length; j++) { // T.C O(n)
            if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(''))) { // T.C O(1)
                return true; // T.C O(1)
            }
        }
    }
    return false; // T.C O(1)
} 

/*
 * Time Complexity: O(n * n + n + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1) → O(n² + n + 9) → O(n²)
 *
 *  
*/