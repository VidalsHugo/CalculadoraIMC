
const calcular = document.getElementById('calcular');


function imc(){

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const calculo = (peso / (Math.pow(altura, 2))).toFixed(1);
        let tipo = '';

        if(calculo <18.5){
            tipo = 'abaixo do peso';
        }else if(calculo <25){
            tipo = 'com peso ideal.';
        }else if(calculo <30){
            tipo = 'levemente acima do peso.';
        }else if(calculo <35){
            tipo = 'com obesidade grau I';
        }else if(calculo <40){
            tipo = 'com obesidade grau II.';
        }else if(calculo <45){
            tipo = 'com obesidade grau III.';
        }

        resultado.textContent = `${nome}, seu resultado IMC é ${calculo} e você está ${tipo}`

    }else{
        resultado.textContent = 'Preencha todos os campos !';
    }
}

calcular.addEventListener('click', imc);