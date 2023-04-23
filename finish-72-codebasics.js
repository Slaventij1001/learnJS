// BEGIN (write your solution here)
const encrypt = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      if ((i + 1) % 2 === 0) {
        result += str[i + 1]; //чётная
      } else {
        result += str[i - 1]; //нечётная
      }
    }
    return result 
  };
  console.log(str('attack'));
  // END
  
  //export default encrypt;