let altura = 0;
let comprimento = 0;
let vidas = 1;

function ajustaPalcoJogo() {
    altura = window.innerHeight
    comprimento = window.innerWidth
    console.log(`O comprimento da tela é ${comprimento}, a altura é ${altura}`)
}

ajustaPalcoJogo()

function posicaoRandom() {
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if(vidas > 3) {
            window.location.href = "game_over.html"
        }else {
            document.getElementById(`v${vidas}`).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * comprimento) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(`a posicao da tela é ${posicaoX}, a altura é ${posicaoY}`)

    let mosquito = document.createElement("img")
    mosquito.src = './imagens/mosca.png'
    mosquito.className = tamanhoRandom() + " " + ladoRandom()
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick =  function(){
        this.remove()
    }
}

function tamanhoRandom() {
    let classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return "mosquito-1"
        case 1:
            return "mosquito-2"
        case 2:
            return "mosquito-3"
    }
}

function ladoRandom() {
    let classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}