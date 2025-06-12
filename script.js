document.addEventListener("DOMContentLoaded", () => {
  console.log("Doom carregado");
  const audio = document.getElementById('musica');
  audio.play().then(() => {
    console.log("Musica começando...")
  });
})

function entrarSite() {
  document.querySelector('.entrada').style.display = 'none';
  document.querySelector('.conteudo').style.display = 'block';
}