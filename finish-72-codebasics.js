  //Верное решение
  // BEGIN (write your solution here)
const encrypt = (str) => { // 1 шаг определение функции параметры с типом данных
  let result = ''; // 2 шаг переменная строки с пустым значением для подставления данных
  for (let i = 0; i < str.length; i += 1) { //3 шаг объявление цикла с иттерацией, сравнение
    if ((i + 1) % 2 === 0) {
      result += str[i - 1]; //4 шаг выявление символов по чётной
    } else {
      result += str[i + 1] || str[i]; //5 по нечётной
    }
  }
  return result //6 шаг вернуть результат
};
console.log(encrypt('attack'));
// END

//export default encrypt;