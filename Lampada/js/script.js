var lampada = document.getElementById("lampada")

const verde = () =>{
    lampada.style.backgroundColor = "green";
};
const vermelho = () =>{
    lampada.style.backgroundColor = "red";
};const azul = () =>{
    lampada.style.backgroundColor = "blue";
};const amarelo = () =>{
    lampada.style.backgroundColor = "yellow";
};const apagar = () =>{
    lampada.style.backgroundColor = "white";
};

const luzSimples = (cor) => {
    lampada.style.backgroundColor = cor
}