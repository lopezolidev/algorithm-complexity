function sum(n){
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

console.time('time')
sum(1000000);
console.timeEnd('time');
//console.time is less precise than performance.now()

// 1:
// time: 2.244ms

// 10:
// time: 2.66ms

// 100:
// time: 4.217ms

// 1000:
// time: 10.815ms

// 10000:
// time: 52.843ms

// 100000:
// time: 171.148ms

// 1000000:
// time: 1.239s