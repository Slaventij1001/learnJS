// BEGIN (write your solution here)
const makeItFunny = (text, n) => {
    let i = 0;
    let result = '';
    while (i < text.length) {
      if ((i + 1) % n  === 0) { 
        result += text[i].toUpperCase()
        } else {
          result += text[i]
        } 
      i += 1;
    }
    return result 
  };
  console.log(makeItFunny('I NevEr LooK bAck', 3));
  // END
  
  //export default makeItFunny;