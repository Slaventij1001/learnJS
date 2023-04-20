
let undefExample;
let typeOfUndef=typeof undefExample;
console.log(typeOfUndef);

let isSlavaAwareOfBoolean=!false;
console.log(isSlavaAwareOfBoolean);

let numberExample=34;
console.log('numberExample: ', numberExample);

let NaNExample= NaN;
console.log( {'NaNExample: ': NaNExample});

let stringExample1= 'Example 1';
console.log(stringExample1);
let stringExample2= "Example 2";
console.log(stringExample2);
let stringExample3= `Example ${numberExample}`;
console.log(stringExample3);

const objectExample={
    fieldExample: 'fieldExample 1',
    fieldExample2: true,
};
console.log(objectExample);

const objectExample2={
    fieldExample: 'fieldExample 2',
    fieldExample2: true,
    methodExample: (str)=>console.log(str),
    methodExample2: ()=>console.log(!objectExample2.fieldExample2)
};
objectExample2.methodExample(objectExample.fieldExample);
objectExample2.methodExample2();

let symbolExample= Symbol("redfoo");
console.log(symbolExample);

let nullExample= null;
console.log(nullExample);
console.log(typeof nullExample);

// TODO typeof function разобрать этот случай 