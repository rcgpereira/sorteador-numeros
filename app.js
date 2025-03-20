
// Gera número aleatório
function gerarNumeroAleatorio(min, max){
    let numeroAleatorio = parseInt(Math.random() * max + 1);

    if(numeroAleatorio < min){
        gerarNumeroAleatorio(min, max);
        } else{
            console.log(numeroAleatorio);
            return(numeroAleatorio);
        }
    //Linha abaixo é a solução do w3schools
    //return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Altera classe do elemento para habilitar ou desabilitar os botões 'Sortear' e 'Reiniciar'
function alterarClasseElemento(id, remover, adicionar){
    let botao = document.getElementById(id);
    botao.classList.remove(remover);
    botao.classList.add(adicionar);
}

// Exibe na tela os números sorteados
function exibirNumeroSorteado(numeros){
    let numerosSorteados = numeros;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = numerosSorteados;    
}

// Funcionalidade do botão 'Reiniciar'
function reiniciar(){
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = 'nenhum até agora';
    alterarClasseElemento('btn-reiniciar', 'container__botao', 'container__botao-desabilitado');
    alterarClasseElemento('btn-sortear', 'container__botao-desabilitado', 'container__botao');
}

// Funcionalidade do botão 'Sortear'
function sortear(){
    let numerosSorteados = [];
    let numero;
    let auxiliar = 0;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de < ate && de + ate > quantidade){
        // Sorteia os números
        while(auxiliar < quantidade){
            numero = gerarNumeroAleatorio(de, ate);

            // Verificação para não incluir números repetidos
            if(!numerosSorteados.includes(numero)){
                numerosSorteados.push(numero);
                auxiliar++;
            }        
        }  
    
        // Exibe os números
        exibirNumeroSorteado(numerosSorteados);
        
        // Alterna o estado dos botões entre ativado e desativado
        alterarClasseElemento('btn-reiniciar', 'container__botao-desabilitado', 'container__botao');
        alterarClasseElemento('btn-sortear', 'container__botao', 'container__botao-desabilitado')
    } else{
        if(de > ate){
            alert(`Erro: O número mínimo não pode ser maior ou igual ao número máximo. \nmínimo = ${de}\nmáximo = ${ate}`);
        } else if(de + ate <= quantidade){
            alert(`Erro: A quantidade de números ${quantidade} não pode ser maior que o conjunto de elementos possíveis: ${de} a ${ate}`);
        }
        
        reiniciar();
    }
}