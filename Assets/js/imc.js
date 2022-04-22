function meuEscopo() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
    

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = document.querySelector('.a');
        const altura = document.querySelector('.b');
        
        const pesoN = Number(peso.value);
        const alturaN = Number(altura.value);
        const imc = calcularIMC(pesoN, alturaN);
        const novoIMC = identifiqueIMC(imc);
        console.log(imc);
    }
    
    function calcularIMC(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
        
    }
    function identifiqueIMC(imc) {
        if (imc < 18.5) {
            console.log('(Abaixo do peso)');
        }
        else if (imc >= 18.5 && imc < 25) {
            console.log('(Peso normal)');
        }
        else if (imc >= 25 && imc < 30) {
            console.log('(Sobrepeso)');
        }
        else if (imc >= 30 && imc < 35 ) {
            console.log('(Obesidade grau 1)');
        }
        else if (imc >= 35 && imc < 40) {
            console.log('(Obesidade grau 2)');
        }
        else if (imc >= 40) {
            console.log('(Obesidade grau 3)');
        }
        else {
            console.log('Dado inválido');
        }
        
    }
    const identificar = identifiqueIMC();
    const novoIMC = calcularIMC();
    form.addEventListener('submit', recebeEventoForm);

    resultado.innerHTML += `O valor do seu IMC é ${novoIMC} ${identificar} `
}
meuEscopo();
console.log('tey');