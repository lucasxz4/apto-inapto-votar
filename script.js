let btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    // Irei usar querySelector e getElementById para praticar ambas
    let idade = document.querySelector('#idade')
    // Converter para Number
    let idadePerson = Number(idade.value)
    // -----------------------------------------------------
    var resultado = document.querySelector('.valor')
    resultado.style.display = 'block'

    // VERIFICAÇÃO

    if (idadePerson < 16) {
        resultado.innerHTML = `Você não vota.`
    } else if (idadePerson < 18 || idadePerson >= 65) {
        resultado.innerHTML = `Voto opcional`
    } else {
        resultado.innerHTML = `Voto obrigatório!`
    }

})