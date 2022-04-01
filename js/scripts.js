//  <===> Business Logic <===>

function beepBoop(number) {
  const numberArray = [];
  for (let i = 0; i <= number; i ++) {
    if (i.toString().includes(3)) {
      numberArray[i] = " Won't you be my neighbor?";
    }
    else if (i.toString().includes(2)) {
      numberArray[i] = " Boop!";
    }
    else if (i.toString().includes(1)) {
      numberArray[i] = " Beep!";
    }
    else {
      numberArray[i] = i.toString();
    } 
  }
  return numberArray;
}

//  <===> User Interface logic <===>

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#entry").val();
    $("p#output").text(beepBoop(userInput));
  })
})