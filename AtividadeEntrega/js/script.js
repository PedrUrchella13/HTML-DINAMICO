const trocarImagem = () => {
  let imagem = document.getElementById("imagem");
  //   lampada.src = "img/acesa.jpg";

  const trocarImagem = [
    "/AtividadeEntrega/img/coxxta.jpg",
    "/AtividadeEntrega/img/raleria.jpg",
    "/AtividadeEntrega/img/vigner.jpg",
    "/AtividadeEntrega/img/wannessa.jpg",
  ];
  let indice = 0;
  let numero = Math.random();
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;
  else indice = 0;
  imagem.src = trocarImagem[indice];
};

const calcular = (operador) => {
  let valor1 = parseFloat(frmCalculadora.inValor1.value);
  let valor2 = parseFloat(frmCalculadora.inValor2.value);
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = valor1 + valor2
      break;

    case "-":
      resultado = valor1 - valor2
      break;

    case "*":
      resultado = valor1 * valor2
      break;

    case "/":
      resultado = valor1 / valor2
      break;
    default:
      break;
  }


  frmCalculadora.inResultado.value = resultado;

}