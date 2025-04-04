// generatore numori

const playerNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber);
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);

// output

// messaggio

if (playerNumber > cpuNumber) {
  alert("hai vinto!!");
} else if (playerNumber < cpuNumber) {
  alert("hai perso!!");
} else if (cpuNumber == playerNumber) {
  alert("pareggiato!!");
}
