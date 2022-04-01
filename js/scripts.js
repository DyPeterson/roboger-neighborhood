function beepBoop(number) {
  const numberArray = [];
  for (let index = 0; index <= number; index ++) {
    if (index === 1) {
      numberArray.push("Beep!")
    }
    numberArray.push(index.toString());
    console.log(numberArray);
  }
}