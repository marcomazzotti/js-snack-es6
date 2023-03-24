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

const pesi = biciArray.map((item)=>{
  return item.peso;
})
let pesoMinimo = Math.min(...pesi);
let messaggio = document.getElementById("result");
const result = biciArray.filter((item)=>{
  if(pesoMinimo === item.peso){
    return item.nome;
  }
});
let[object] = result;
console.log(object);
let{nome, peso} = object;
messaggio.innerHTML =`La bici più leggera è ${nome} e pesa ${peso} kg.`;