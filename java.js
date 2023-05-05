var idade;
var resultado;
var nome;

function fase(){
    idade = document.getElementById("idade").value;
    nome = document.getElementById("nome").value;
     resultado = document.getElementById("resultado");

    if(idade <= 0){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "</br>Ops... </br> Parece que você adicionou um valor incorreto...";
    } else if (idade <= 11) {
        document.getElementById("resultado").innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" + "<br/> Você é uma criança! Aproveite a infância!";
   } else if (idade > 11 && idade <=20){
       resultado = document.getElementById("resultado");
       resultado.innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" + "<br/> Você é um adolescente! Está ganhando novas responsabilidades!";
    } else if ( idade > 20 && idade <=64){
        resultado = document.getElementById("resultado");
       resultado.innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" + "<br/> Você é um adulto!";
   } else if (idade >= 65 && idade <= 110){
      resultado = document.getElementById("resultado");
     resultado.innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" + "<br/> Você é um idoso! Já possui bastante experiência!";
   } else if (idade >= 111 && idade <=200){
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "</br> Nossa " + nome +  "!!!! </br> Você está tão  velho(a) assim?? </br> Parabéns, ein!";
   } else if (idade >=201 && idade <= 1000){
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "</br> Ok... </br> Ai já é exagero... "
   } else if (idade >=1001){
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "</br> Adicione a sua idade verdadeira!"
   }


}
