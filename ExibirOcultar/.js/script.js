const exibir = () => {
  let preguica = document.getElementById("preguica");
  let botao = document.getElementById("btnChave");

  if (botao.textContent == "Exibir") {
    //preguica.style.display = "block";
    preguica.style.opacity = 1;
    botao.textContent = "Ocultar";
  } else {
    //preguica.style.display = "none";
    preguica.style.opacity = 1;
    botao.textContent = "Exibir";
  }
};
