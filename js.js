let randNum = Math.floor(Math.random() * 10);
console.log(randNum);
function checkNum() {
  let num = document.getElementById("num").value;
  let result = document.getElementById("result");
  console.log(num);
  if (num == randNum) {
    result.textContent = "you guess the nunber correctly";
    console.log(" you  guess the number correctly");
  } else if (randNum < num) {
    console.log("the number you enter is > the correct number");
    result.textContent =
      "the number you enter is greater than the correct number";
  } else {
    console.log("the number you enter is < than the number you entre");
    result.textContent = "the number you enter is less than the correct number";
  }
}



