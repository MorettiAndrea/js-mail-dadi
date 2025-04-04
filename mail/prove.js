const emailList = ["qui@gmail", "quo@gmail", "qua@gmail"];
console.log(emailList);

let emailInput = prompt("Inserisci la tua email");
let emailCheck = false;
for (let i = 0; i < emailList.length && emailCheck === false; i++) {
  if (emailInput === emailList[i]) {
    emailCheck = true;
  }
  console.log(emailCheck);
  if ((emailCheck = true)) {
    console.log("Benveuto");
  }
}

console.log(emailInput);
