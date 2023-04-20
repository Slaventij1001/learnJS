const printNumbers = (initialNumber) => {
    // BEGIN (write your solution here)
    let i = initialNumber;
  
    while (i => 1) {
      console.log(i);
      i = i - 1;
    }
    console.log('finished!');
  };
  
  // BEGIN (write your solution here)
const multiplyNumbersFromRange = (start, finish) =>{
  let i = start;
  let result = 1;

  while (i <= finish) { 
    result = result * i; 
    i = i + 1;
}
  return result;
};

const joinNumbersFromRange = (start, end) => {
  let result = '';
  let i = start;

  while (start <= end) {
    result = `${result}${start++}`;
  
  }

  return result;
};
// END

export default joinNumbersFromRange;
 //Пример с разбором ниже

 function joinNumbersFromRange(charStart, charEnd){
  let result = ''; // изначально результат вывода пустой
  let i = charStart; // пусть счётчику будет присуждён начальный символ строки
  
  while (i <= charEnd) { // пока счётчик не дошёл до конечного символа строки,
  result = `${result}${i}`; // => то результату присваиваю конкатенацию результата и счётчика
  i++; // увеличиваю счётчик на один
  }
  
  return result; // возвращаю результат в случае, когда последняя итерация цикла завершена
  };