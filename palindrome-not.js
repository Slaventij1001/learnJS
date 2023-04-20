// Функция reverse() написана нами специально для наших упражнений
// В ней используются механики, которые еще не изучались
const reverse = (s) => s.split('').reverse().join('');

// BEGIN (write your solution here)
const isPalindrome = (text) => {
  const mirrorText = reverse(text.toLowerCase());
  return mirrorText == text.toLowerCase();
}

const isNotPalindrome = (text2) => {
  return !isPalindrome(text2);
}
// END

export default isNotPalindrome;
/*
Разобрать каждую строку
Последовательность действий
Взаимосвязь

*/