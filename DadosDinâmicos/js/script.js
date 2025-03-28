const atualizarDados = () => {
  //Criando uma variável para o tbody, ou o corpo da tabela
  let dados = document.getElementById("itens");
  //Zerando o tbody se houver ali dados
  dados.innerHTML = "";
  //Gerando novos conteúdos aleatórios
  for (let i = 0; i < 5; i++) {
    //Criando variável para um número aleatório
    let preco = Math.random() * 100;
    //Ciando variável para um elemento tr, os dados da tabela
    let elemento = "";
    //Criando listra de cor diferente para as linhas ímpares
    if (i % 2 != 0) elemento = "<tr class='listra'>";
    else elemento = "<tr>";
    //Inserindo os itens na linha (tr)
    elemento += `<td>Produto ${i} </td>
        <td>R$ ${preco.toFixed(2)} </td>`;
    dados.innerHTML += elemento;
  }
};
