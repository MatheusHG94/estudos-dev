export default function validaMaiorIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18; // retorna true se a data atual for maior que a data de nascimento + 18 anos
}
