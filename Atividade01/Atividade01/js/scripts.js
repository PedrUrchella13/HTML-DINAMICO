const ligar = () => {
  let lampada = document.getElementById("lampada");
  //   lampada.src = "img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};
/*---------------------------2----------------------------*/
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");

  if (qtdImagem <= 0)
    alert("O campo quantidade não pode estar nulo ou negativo!");
  else {
    for (let index = 1; index <= qtdImagem; index++) {
      canvas.innerHTML +=
        "<img src='/AtividadeEntrega/img/raleria.jpg' alt=''>";
    }
  }
};
/*---------------------------3----------------------------*/
function validaForm() {
  const mensagemErro = document.getElementById("mensagem-erro");
  mensagemErro.style.display = "none";
  mensagemErro.innerHTML = "";

  let erros = [];

  function validarCampo(id, mensagem, tipo = "text") {
    const campo = document.getElementById(id);
    if (!campo.value.trim()) {
      erros.push(mensagem);
    } else if (tipo === "string" && campo.value.trim().length < 5) {
      erros.push(`${mensagem} Deve conter pelo menos 5 caracteres.`);
    } else if (tipo === "number" && parseFloat(campo.value) <= 0) {
      erros.push(`${mensagem} Deve ser um número positivo.`);
    }
  }

  validarCampo(
    "inCli",
    "O campo Nome do cliente não pode estar vazio!",
    "string"
  );
  validarCampo("inFone", "O campo Telefone não pode estar vazio!");
  validarCampo("inMail", "O campo E-mail não pode estar vazio!");
  validarCampo(
    "inProd",
    "O campo Nome do produto não pode estar vazio!",
    "string"
  );
  validarCampo("inQtd", "O campo Quantidade não pode estar vazio!", "number");
  validarCampo(
    "inVal",
    "O campo Valor unitário não pode estar vazio!",
    "number"
  );

  if (erros.length > 0) {
    mensagemErro.innerHTML = erros.join("<br>");
    mensagemErro.style.display = "block";
  } else {
    alert("Formulário enviado com sucesso!");
    document.getElementById("frmRegistro").submit();
  }
}
/*--------------------4----------------------*/
const calcular = () => {
  let valPedido = inValorPedido.value;
  let perDesconto = 0;
  let valDesconto = 0;
  let valFinalPedido = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
  } else if (valPedido >= 1500) {
    perDesconto = 1.0;
  } else if (valPedido >= 1000) {
    perDesconto = 0.8
  } else if (valPedido >= 500) {
    perDesconto = 0.5
  } else {
    perDesconto = 0;
  }

  valDesconto = (valPedido * perDesconto) / 100;
  valFinalPedido = valPedido - valDesconto;
  inPercDesc.value = perDesconto;
  inValDesc.value = valDesconto.toFixed(2);
  inValFinal.value = valFinalPedido.toFixed(2);
};

