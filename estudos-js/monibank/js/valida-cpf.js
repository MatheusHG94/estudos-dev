export default function validaCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, ""); // esse replace substitui o . e o - por ""
    validaNumerosRepetidos(cpf);

    console.log(validaNumerosRepetidos(cpf))
}

function validaNumerosRepetidos (cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf); // se o cpf estiver incluído em numerosRepetidos, retorna true
}
