//  <===> Business Logic <===>

function beepBoop(number) {
  const numberArray = [];
  for (let i = 0; i <= number; i ++) {
    if (i.toString().includes(3)) {
      numberArray[i] = "Won't you be my neighbor?";
    }
    else if (i.toString().includes(2)) {
      numberArray[i] = "Boop!";
    }
    else if (i.toString().includes(1)){
      numberArray[i] = "Beep!";
    }
    else {
      numberArray[i] = i.toString();
    }
    // console.log(numberArray);
  }
}

//  <===> User Interface logic <===>

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const number = $("#input").val();
    const result = beepBoop(number);
    $("#output").text(parseInt(result))


    console.log(result)
  })
})

// Take beepBoop function and run it to display parsed string to user.