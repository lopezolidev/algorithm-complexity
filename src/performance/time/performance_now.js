const { performance } = require("node:perf_hooks");

function sum(n){
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

let start_time = performance.now();
sum(1000000);
let finish_time = performance.now();

let total_time = finish_time - start_time;

console.log(`${total_time}ms`); //measuring total time to execute this algorithm

//with "5":
//2.5699320007115602ms

//with "10":
//2.7687710002064705ms

//"20":
//2.9437630008906126ms

//"40":
//3.3116050008684397ms

//"1000":
//11.845705000683665ms

//"10000":
//51.902550000697374ms

//"100000":
//165.14597700163722ms

//"1000000":
//1276.9391339998692ms