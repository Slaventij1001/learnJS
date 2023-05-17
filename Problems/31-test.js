// функция-предикат определяет, является ли число num четным
const isEven = (num) => {
    return num % 2 === 0;
  }
   
  // функция увеличивает полученное число num на 10
  const increaseNum = (num) => {
    return num + 10;
  }
   
  const num = 6;
   
  const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
  Что будет находиться в переменной result после его выполнения?
  //через Bing спросить как реализовать через if. 