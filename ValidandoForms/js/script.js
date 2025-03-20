//const validarDados = () =>{
    //Cria alertas na página ao clicar
    //alert("Alerta com ação de click!")
//}

const validarDados = () =>{
    let nome = frmExemplo.inNome.value;
    let idade = frmExemplo.inIdade.value;

    if(nome.trim()==""){
        alert("O campo de nome não pode estar vazio!")
        frm.Exemplo.inNome.focus();
        return false;
    }


    if(idade.trim()=="" || idade<0){
    alert("O campo idade não pode estar vazio ou negativo!")
    frmExemplo.inIdade.focus();
    return false;
    }

    if(nome.trim() !="" && idade.trim() != "" && idade>0){
        alert("Formulário enviado!")
        location.reload()
    }
};