//Criando a função de flecha com frases aleatórias//
const falar = () => {
    //Vetor de frases//
    const frases = [
        "c'est son davion'ça","I live for the Applause","É sobre isso veyr","Quem é que manda??? YGONA!"
    ];
    //Criando uma variável para armazenar a div com id tagarela
    let tagarela = document.getElementById("tagarela");
    //Criando variável de controle para frases exibidas
    let indice=0;
    //Criando variável para número randômico entre 0 e 1
    let numero = Math.random()
    //Configurando número para a frase selecionada
    if(numero> 0.75)
        indice=3;
    else if(numero>0.50)
        indice = 2;
    else if(numero>0.25)
        indice = 1;
    //Escrevendo e exibindo as frases
    tagarela.innerHTML = frases[indice]
}