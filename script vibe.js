/* --- SISTEMA DE MÚSICA VIBE (MP3) --- */

let isMusicPlaying = false; // Mudei o nome para evitar conflito com outros scripts
// Link direto para um MP3 Lofi (sem direitos autorais)
const vibeAudio = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
);

vibeAudio.volume = 0.3; // Volume 30%
vibeAudio.loop = true; // Repetir para sempre

function toggleMusic() {
  const btn = document.getElementById("music-btn");
  const icon = btn.querySelector("i");
  const text = btn.querySelector("span");

  if (isMusicPlaying) {
    vibeAudio.pause();
    icon.className = "fa fa-play"; // Muda ícone para Play
    text.innerText = "Play Vibe";
    btn.style.opacity = "0.7"; // Deixa meio transparente
    btn.style.backgroundColor = "#000050"; // Volta cor original
    btn.style.color = "#2BFDBE";
  } else {
    vibeAudio.play().catch((error) => console.log("Erro ao tocar: ", error));
    icon.className = "fa fa-pause"; // Muda ícone para Pause
    text.innerText = "Pause Vibe";
    btn.style.opacity = "1"; // Opacidade total

    // Opcional: Muda a cor do botão quando está tocando para indicar atividade
    btn.style.backgroundColor = "#2BFDBE";
    btn.style.color = "#000050";
  }

  // Inverte o estado (se estava tocando, para. Se estava parado, toca.)
  isMusicPlaying = !isMusicPlaying;
}
