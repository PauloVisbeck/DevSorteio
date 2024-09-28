let numMin = document.getElementById("numero-minimo")
numMin.addEventListener("change", function () {
   console.log(numMin.value)
})


let numMax = document.getElementById("numero-maximo")
numMax.addEventListener("change", function () {
   console.log(numMax.value)

   // Verifica se o segundo número é maior
   if (Number(numMax.value) <= Number(numMin.value)) {
      alert("O segundo valor precisa ser maior do que o primeiro!")
      numMax.value = ""
      numMax.focus()
   }
})


const botao = document.getElementById("sortear")
botao.addEventListener("click", function () {
   // Testo novamente para garantir se o usuário não insistiu em um valor menor
   if (Number(numMax.value) <= Number(numMin.value)) {
      alert("O segundo valor precisa ser maior do que o primeiro!")
      numMax.value = ""
      numMax.focus()
      return
   }

   let valorRandom = Math.random()
   
   let resultado = Math.floor(valorRandom * (Number(numMax.value) - Number(numMin.value) + 1)) + Number(numMin.value)

   console.log("Resultado Final: ", resultado)

   const span = document.getElementById("resultado")
   span.textContent = resultado
})