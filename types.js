//Javascript dynamic typed programming language

//js primitive type
const a = 35;
const b = 'samsu is not a good man at all';
const c = true;


//js non-primitive type. These data types are derived from the primitive data types and work as a reference. Therefore, they are also known as reference data types.
const ages = [23, 34, 56, 78, 58];
const student = { id: 23, class: 7 };


console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);
let name = Array.isArray(ages);
console.log(name);