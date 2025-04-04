const emailList = ["qui@gmail", "quo@gmail", "qua@gmail"];
console.log(emailList);

let emailInput = prompt("Inserisci la tua email");
let emailCheck = false;
for (let i = 0; i < emailList.length && emailCheck === false; i++) {
  if (emailInput === emailList[i]) {
    emailCheck = true;
  }
}

if (emailCheck === true) {
  alert("Benvenuto!");
} else if (emailCheck === false) {
  alert("email errata");
}
console.log(emailCheck);
console.log(emailInput);
