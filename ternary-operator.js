const abs = (number) => {
    return number >= 0 ? number : -number;
  };
  console.log(abs(-5));

  const convertText = (string) => {
    const result = 'lets';
    return string[0].toUpperCase() !== string[0] ? result : string
  }
  console.log(convertText('With'));
  console.log(convertText('you'));