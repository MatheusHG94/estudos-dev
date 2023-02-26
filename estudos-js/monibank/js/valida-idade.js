export default function validaMaiorIdade(campo) {
    const dataNascimento = new Date(campo.value);
    
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade'); // a função do setCustomValidity é informar à API de erros do JS que o erro customError terá valor true; a mensagem passada como parâmetro aqui não será imprimida na tela
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18; // retorna true se a data atual for maior que a data de nascimento + 18 anos
}
