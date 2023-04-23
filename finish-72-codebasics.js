// BEGIN (write your solution here)
const encrypt = (str) => { // 1 шаг определение функции параметры с типом данных
    console.log('аргумент: ', str);
    let result = ''; // 2 шаг переменная строки с пустым значением для подставления данных
    console.log('пустая переменная результата', result);
    for (let i = 0; i < str.length - 1; i += 1) { //3 шаг объявление цикла с иттерацией, сравнение
        console.log('текущий индекс', i);
        console.log('логическое условие', (i + 1) % 2);
      if ((i + 1) % 2 === 0) {
        result += str[i + 1]; //4 шаг выявление символов по чётной
        console.log('выявление нечётного символа', str[i + 1]);
      } else {
        result += str[i]; //5 по нечётной
        console.log('выявление чётного символа', str[i - 1]);
      }
    }
    return result //6 шаг вернуть результат
  };
  console.log(encrypt('attack'));
  // END
  
  //export default encrypt;