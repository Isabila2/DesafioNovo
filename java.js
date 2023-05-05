
var idade;
var resultado;
var nome;

function fase(){
    idade = document.getElementById("idade").value;
    nome = document.getElementById("nome").value;
     resultado = document.getElementById("resultado");

    if (idade <= 11) {
        document.getElementById("resultado").innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" + "<br/> Você é uma criança! Aproveite a infância!";
   } else if (idade > 11 && idade <=20){
       resultado = document.getElementById("resultado");
       resultado.innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" + "<br/> Você é um adolescente! Está ganhando novas responsabilidades!";
    } else if ( idade > 20 && idade <=64){
        resultado = document.getElementById("resultado");
       resultado.innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" + "<br/> Você é um adulto! Precisa arrumar um emprego!";
   } else if (idade > 65){
      resultado = document.getElementById("resultado");
     resultado.innerHTML = "<br/> Parabéns "+ nome + "!!<br/></br>" +  " Você tem " + idade + " anos!" +"<br/> Você é um idoso! Já possui bastante experiência!";
   }

   
}
