function beepBoop(number) {
  const numberArray = [];
  for (let i = 0; i <= number; i ++) {
    if (i.toString().includes(1)) {
      numberArray[i] = "Beep!";
    }
    else {
      numberArray[i] = i.toString();
    }
    // numberArray.push(index.toString());
    console.log(numberArray);
  }
}