process.stdin.resume();
process.stdin.setEncoding('utf8');

const player1 = ["Papel", "Piedra", "Tijera"];
const jug1 = Math.floor(Math.random() * player1.length);
console.log("Jugador 1 sacó:  "+player1[jug1]);
const player2 = ["Papel", "Piedra", "Tijera"];
const jug2 = Math.floor(Math.random() * player2.length);
console.log("Jugador 2 sacó:  "+player2[jug2]);

if(jug1==jug2){
    
   console.log("Es un empate")
}
else if(jug1==["0"] && jug2==["1"] || jug1==["1"] && jug2==["2"]|| jug1==["2"] && jug2==["0"]){
    
    console.log("GANA jugador 1 gana a jugador 2 " );
}else{
    console.log("GANA jugador 2 gana a jugador 1 " );
}


