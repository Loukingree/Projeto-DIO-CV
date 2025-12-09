var player;
var isPlaying = false;

// 1. Carrega a API do YouTube
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Cria o Player Invisível
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "mX9i51Ciaz0&list=PLLI-Mpksicvd8yVVJjjhpeIAzGxw7fsOV&", // ID do vídeo
    playerVars: {
      playsinline: 1,
      controls: 0,
      loop: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.setVolume(20);
}

// 3. Função do botão
function toggleMusic() {
  const btn = document.getElementById("music-btn");
  const icon = btn.querySelector("i");
  const text = btn.querySelector("span");

  if (isPlaying) {
    player.pauseVideo();
    icon.className = "fa fa-play";
    text.innerText = "Play Vibe";
    btn.style.opacity = "0.7";
    isPlaying = false;
  } else {
    player.playVideo();
    icon.className = "fa fa-pause";
    text.innerText = "Pause Vibe";
    btn.style.opacity = "1";
    isPlaying = true;
  }
}
