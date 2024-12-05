function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let diferenca = (ate - de);

    if(de > ate){
        alert('Verifique os números e tente novamente!')
        reiniciar();
    } else if (quantidade > (ate - de+1)) {
        alert (`Para sortear ${quantidade} números, precisa de uma gama maior de números (intervalo maior nos campos "Do número" e "Até o número")`)
        reiniciar();
        alterarStatusBotao();
    } else{
        
    let sorteados = [];
    let numero
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio (de,ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);

        }

        sorteados.push(numero);
    }
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
   alterrarStatusBotao();
}
}


function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
function alterrarStatusBotao(){
    let botao = document.getElementById ('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    botao = document.getElementById ('btn-reiniciar');
    botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    
}