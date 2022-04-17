function meuEscopo() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
    

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = document.querySelector('#buttonP');
        const altura = document.querySelector('#buttonA');
        
    }

    function calcularIMC(peso, altura) {
        return peso / (altura ** 2);
        
    }
    const formula = calcularIMC(90, 1.69);
    
    function identifiqueIMC() {
        if (formula < 18.5) {
            console.log('(Abaixo do peso)');
        }
        else if (formula >= 18.5 && formula < 25) {
            console.log('(Peso normal)');
        }
        else if (formula >= 25 && formula < 30) {
            console.log('(Sobrepeso)');
        }
        else if (formula >= 30 && formula < 35 ) {
            console.log('(Obesidade grau 1)');
        }
        else if (formula >= 35 && formula < 40) {
            console.log('(Obesidade grau 2)');
        }
        else if (formula >= 40) {
            console.log('(Obesidade grau 3)');
        }
        else {
            console.log('Dado inválido');
        }
        
    }
    const identificar = identifiqueIMC();
    form.addEventListener('submit', recebeEventoForm);
    console.log(formula);

    resultado.innerHTML += `O valor do seu IMC é ${formula} ${identificar} `
}
meuEscopo();
console.log('vapo');