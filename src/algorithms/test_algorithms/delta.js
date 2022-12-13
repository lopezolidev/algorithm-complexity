const SPACEX_API = 'https://api.spacexdata.com/v3/launches';


async function algoritmoDelta(payloadId, payloadAPI) {
    let respuesta = await fetch(payloadAPI); // T.C O(1)
    let data = await respuesta.json(); // T.C O(1)
    let listaDePayloads = []; // T.C O(1)
    let longitudData = data.length; // T.C O(1)

    for (let i = 0; i < longitudData; i++) { // T.C O(n)
        let payloads = data[i].rocket; // T.C O(1)
        listaDePayloads.push(...payloads.second_stage['payloads']); // T.C O(1)
    }

    for (let i = 0; i < listaDePayloads.length; i++) { // T.C O(n)
        let localPayloadId = listaDePayloads[i].payload_id; // T.C O(1)
        if (localPayloadId == payloadId) { // T.C O(1)
            return true; // T.C O(1)
        } else {
            return false; // T.C O(1)
        }
    }
}

/*
 * Time Complexity: O(n + n + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1) → O(2n + 10) → O(n)  ← most efficient algorithm
 * 
 */