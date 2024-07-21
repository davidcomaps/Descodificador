function criptografar() {
    const textarea = document.querySelector('#container__input__text');
    let texto = textarea.value;

    if (!texto.match(/^[a-z\s]*$/) || texto === "") {
        alert("Apenas letras minúsculas e sem acento são permitidas.");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoCriptografado);
    //document.querySelector('#container__input__text').value = '';
}

function descriptografar() {
    const textarea = document.querySelector('#container__input__text');
    let textoCriptografado = textarea.value;

    if (!textoCriptografado.match(/^[a-z\s]*$/) || textoCriptografado === "") {
        alert("Apenas letras minúsculas e sem acento são permitidas.");
        return;
    }

    let textoOriginal = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoOriginal);
    //document.querySelector('#container__input__text').value = '';
}

function mostrarResultado(texto) {
    document.querySelector('#container__output__empty').classList.add('hidden');
    document.querySelector('#container__output__empty__image').classList.add('hidden');
    document.querySelector('#container__output__empty__message').classList.add('hidden');
    document.querySelector('#container__output__empyt__message__strong').classList.add('hidden');
    document.querySelector('#container__output__empyt__message__text').classList.add('hidden');

    const outputControl = document.querySelector('#container__output__control');
    const result = document.querySelector('#container__output__control__result');
    const copyButton = document.querySelector('#container__output__control__button__copy');

    result.textContent = texto;
    result.classList.remove('hidden');
    copyButton.classList.remove('hidden');
}


function copiar() {
    const result = document.querySelector('#container__output__control__result');
    navigator.clipboard.writeText(result.textContent).then(() => {
    
        document.querySelector('#container__input__text').value = '';
        result.textContent = '';
        result.classList.add('hidden');
        document.querySelector('#container__output__control__button__copy').classList.add('hidden');

        document.querySelector('#container__output__empty').classList.remove('hidden');
        document.querySelector('#container__output__empty__image').classList.remove('hidden');
        document.querySelector('#container__output__empty__message').classList.remove('hidden');
        document.querySelector('#container__output__empyt__message__strong').classList.remove('hidden');
        document.querySelector('#container__output__empyt__message__text').classList.remove('hidden');
    }, () => {
        alert("Falha ao copiar o texto");
    });
}