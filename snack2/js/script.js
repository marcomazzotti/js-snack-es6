const squadreArray = [
    {
      nome: "Alfa",
      punti: Math.floor((Math.random() * 10) + 1),
      falliSubiti: Math.floor((Math.random() * 10) + 1)
  },
  {
      nome: 'Beta',
      punti: Math.floor((Math.random() * 20) + 1),
      falliSubiti: Math.floor((Math.random() * 10) + 1)
  },
  {
      nome: 'Gamma',
      punti: Math.floor((Math.random() * 30) + 1),
      falliSubiti: Math.floor((Math.random() * 10) + 1)
  },
  {
      nome: 'Delta',
      punti: Math.floor((Math.random() * 40) + 1),
      falliSubiti: Math.floor((Math.random() * 10) + 1)
  }
  ];

const input = prompt("Inserisci il nome della tua squadra");
squadreArray.push(
  {
    nome: input,
    punti: Math.floor((Math.random() * 50) + 1),
    falliSubiti: Math.floor((Math.random() * 10) + 1)
  }
);

const nuovoArray = squadreArray.map((item)=>{
  return item.nome +"falli subiti:" +item.falliSubiti;
});
console.log(nuovoArray);

const messaggio = document.getElementById('result');
for(let i = 0; i < nuovoArray.length; i++){
    let teamList = `<li>${nuovoArray[i]}</li>`;
    messaggio.innerHTML += teamList;
}