import validaCPF from "./valida-cpf.js";
import validaMaiorIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); // blur é o evento que ocorre quando se tira o foco do campo, ou seja, quando clica fora
    campo.addEventListener("invalid", event => event.preventDefault()); // impede a exibição das mensagens de campo inválido padronizadas
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagemDeErro = "";
    campo.setCustomValidity('');
    
    if (campo.name == "cpf" && campo.value.length >= 11) {
        validaCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        validaMaiorIdade(campo);
    }

    //console.log(campo.validity); // mostra o status dos erros de validade dos campos de formulário

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagemDeErro = mensagens[campo.name][erro];
            console.log(mensagemDeErro);
        }
    })

    const elementoMensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        elementoMensagemErro.textContent = mensagemDeErro;
    } else {
        elementoMensagemErro.textContent = "";
    }
}
