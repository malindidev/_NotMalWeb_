// Copy function
function copyToClipboard() {
  const scriptText = document.getElementById("script-text").textContent;
  navigator.clipboard.writeText(scriptText)
    .then(() => {
      alert("Script copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}

// Building block animation as you scroll
const buildAnimationContainer = document.getElementById('build-animation');

window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    // Show building blocks dynamically
    createBuildingBlocks(scrollPosition);
  }
});

// Create building blocks
function createBuildingBlocks(scrollPosition) {
  const blockCount = Math.min(Math.floor(scrollPosition / 50), 10);
  buildAnimationContainer.innerHTML = ''; // Clear previous blocks
  for (let i = 0; i < blockCount; i++) {
    const block = document.createElement('div');
    block.classList.add('building-block');
    buildAnimationContainer.appendChild(block);
  }
}

// Show hidden text and animations on scroll
const scriptContainer = document.getElementById("script-container");
const runningPlayer = document.getElementById("running-player");

window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    scriptContainer.classList.remove('hidden');
    runningPlayer.style.animation = "runPlayer 1s ease-in-out infinite";
  }
});

// Player running animation
const playerRunning = document.querySelector("#running-player img");
playerRunning.style.animation = "runPlayer 1s linear infinite";

// Keyframes for player running
document.styleSheets[0].insertRule(`
  @keyframes runPlayer {
    0% { transform: translateX(0); }
    100% { transform: translateX(300px); }
}`, 0);
