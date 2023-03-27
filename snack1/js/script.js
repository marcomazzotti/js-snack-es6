const biciArray = [
  {
    nome: "Alfa",
    peso: 1
  },
  {
    nome: "Beta",
    peso: 3
  },
  {
    nome: "Gamma",
    peso: 5
  },
  {
    nome: "Delta",
    peso: 0.5
  }
]

let lightest = biciArray[0];
biciArray.forEach((element) => {
  if(element.peso < lightest.peso) {
    lightest = element;
  }
});

console.log(lightest);
let messaggio = document.getElementById("result");
messaggio.innerHTML =`La bici più leggera è ${lightest.nome} e pesa ${lightest.peso} kg.`;