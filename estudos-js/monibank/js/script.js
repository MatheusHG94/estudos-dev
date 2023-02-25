import validaCPF from "./valida-cpf.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); // blur é o evento que ocorre quando se tira o foco do campo, ou seja, quando clica fora
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        validaCPF(campo);
    }
}
