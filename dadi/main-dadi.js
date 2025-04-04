const playerNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber);
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);

const winMessage = alert("hai vinto!!");
const lostMessage = alert("hai perso!!");
const drawMessage = alert("pareggio!!");
for (let i = 0; playerNumber < 0 && cpuNumber < 0; i++);
{
  if (playerNumber > cpuNumber) {
    console.log(winMessage);
  }
  if (cpuNumber < playerNumber) {
    console.log(lost);
  } else {
    console.log(drawMessage);
  }
}
