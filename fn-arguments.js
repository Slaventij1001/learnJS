function addNumbers(a, b) {
    return a + b;
  }
console.log(addNumbers(1, 3));

function stringLength(str) {
    return str.length;
  }
  console.log(stringLength('any'));

  function concatenateStrings(str1, str2) {
    return str1 + str2;
  }
  console.log(concatenateStrings('Ho', 'dor'));

  function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  let objectName={
    fieldExample: 'fieldExample 1',
    fieldExample2: true,
};
  console.log(getObjectKeys(objectName));

  function getObjectValues(obj) {
    return Object.values(obj);
  }
  let objectName2={
    fieldExample: 'Pool 1',
    fieldExample2: false,
};
  console.log(getObjectValues(objectName2));
  console.log(objectName.fieldExample2);
  console.log(objectName2.fieldExample);