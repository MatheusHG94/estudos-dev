const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function() { // função assíncrona pois precisa esperar a permissão do usuário
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false}); // solicita permissão (pop-up) para acessar video e/ou audio e pega o caminho para os devices do usuário

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo; // passando o caminho dos devices do usuário para o srcObject do video
})

botaoTirarFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); // captura a imagem da câmera passando a posição do elemento video

    imagemURL = canvas.toDataURL("image/jpeg"); // transforma a imagem do canvas em uma URL

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL; // passa a URL da imagem para o item do objeto cadastro

    console.log(converteRetorno)

    localStorage.setItem("cadastro", JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";
})
