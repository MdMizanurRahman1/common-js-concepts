// 8 ways to get undefined
//1. variable that is not initialized/value will give undefined
let first;
//console.log(first);

//2. function with no return
function second(a, b) {
    const total = a + b;
}
const result = second();
//console.log(result);

//3. parameter that will not be passed will undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    //console.log(a, b, c, d);
}
third(2, 4, 7);

//4. property that does not exists on an object will give undefined
const fifth = { id: 2, name: 'balsal', age: 40 };
//console.log(fifth.age, fifth.salary);

//5. accessing array elements outside of the index range
const sixth = [23, 45, 56, 78, 89, 34];
//console.log(sixth[1], sixth[8]);




//null
const eight = null;
const data = { results: [], updated: null };

//console.log(typeof undefined);