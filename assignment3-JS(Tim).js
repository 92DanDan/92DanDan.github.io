let d = new Date();
alert("Today's date is"+ d);

window.alert("Welcome to BurgerKing website");

    function myFunction1(){
        alert("QQ:30****65,WeChat:Ni****23,WhatsApp:250*****82")
      }

function oneFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good BurgerKing Breakfast";
  } else if (time < 18) {
    greeting = "Good BurgerKing Lunch";
  } else {
    greeting = "Good BurgerKing Dinner";
  }
  document.getElementById("happy").innerHTML = greeting;
}
