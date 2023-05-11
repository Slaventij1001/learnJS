const DEFAULT_STARS_AMOUNT = 4;
const STAR_SYMBOL = "*";
const DEFAULT_STRING_LENGTH = 16;
const SYMBOL_FOR_CUT = 12;

const getHiddenCard = (string, starsAmount = DEFAULT_STARS_AMOUNT) => {
  const card =
    STAR_SYMBOL.repeat(starsAmount) +
    string.slice(SYMBOL_FOR_CUT, DEFAULT_STRING_LENGTH);
  const test1 = string.slice(0, 7);
  const test2 = string.slice(3, 10);
  const test3 = string.slice(9, 16);
  console.log(test1);
  console.log(test2);
  console.log(test3);
  return card;
};

console.log(getHiddenCard("1234567890101112"));
console.log(getHiddenCard("1234123412341234"));
console.log(getHiddenCard("1234123412344321"));
console.log(getHiddenCard("1234123412344321", 2));
console.log(getHiddenCard("1234123412341234", 12));
