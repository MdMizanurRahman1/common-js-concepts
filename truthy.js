//Truthy
//1. true
//2. any number (+ve, -ve) will be truthy other than 0
//3. any string other than empty string
//4.'0', 'false'
//5. {}, []


//Falsy
//1. false
//2.0
//3. '' (empty sring)
//4. undefined
//5. null


const x = 'false';
if (x) {
    console.log('value of x will be truthy')
}
else {
    console.log('value of x will be false')
};


//check falsy

const y = '';
if (!y) {
    console.log('check value is falsy')
}

//check truthy
const z = ' ';
if (!!z) {
    console.log('check value is truthy')
};