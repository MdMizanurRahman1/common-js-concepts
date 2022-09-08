

function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }

}
const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());


function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();