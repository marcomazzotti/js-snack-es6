const biciArray = [
  {
    nome: "Alfa",
    peso: 3
  },
  {
    nome: "Beta",
    peso: 9
  },
  {
    nome: "Gamma",
    peso: 15
  },
  {
    nome: "Delta",
    peso: 1.5
  }
]

let lightest = biciArray[0];
biciArray.forEach((element) => {
  if(element.peso < lightest.peso) {
    lightest = element;
  }
});

console.log(lightest);

const {nome, peso} = lightest
let messaggio = document.getElementById("result");
messaggio.innerHTML =`La bici più leggera è ${nome} e pesa ${peso} kg.`;