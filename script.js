let numMin = document.getElementById("numero-minimo")

let numMax = document.getElementById("numero-maximo")


const botao = document.getElementById("sortear")
botao.addEventListener("click", function () {    

    let valorRandom = Math.random()


    let resultado = Math.floor(valorRandom * (Number(numMax.value) - Number(numMin.value) + 1)) + Number(numMin.value)

    console.log("Resultado Final: ", resultado)

    const span = document.getElementById("resultado")
    span.textContent = resultado
}) 