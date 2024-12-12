// Function to copy the script to clipboard
function copyToClipboard() {
  const scriptText = document.getElementById("script-text").textContent;
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = scriptText;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Change button text to "Copied!" and revert after 2 seconds
  const copyButton = document.getElementById("copyButton");
  copyButton.classList.add("copied");
  setTimeout(() => {
    copyButton.classList.remove("copied");
  }, 2000);

  alert('Script copied to clipboard!');
}

// Scroll animation to reveal blocks
window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY;
  
  // Trigger building blocks animation as you scroll down
  if (scrollPosition > 300) {
    createBuildingBlocks();
  }
  
  // Show the running player when scrolling past certain point
  if (scrollPosition > 500) {
    document.getElementById("running-player").style.display = "block";
  } else {
    document.getElementById("running-player").style.display = "none";
  }

  // Show the script copy button when scrolling further
  if (scrollPosition > 700) {
    document.getElementById("script-container").style.display = "block";
  }
});

// Dynamically create blocks as you scroll
function createBuildingBlocks() {
  const blockContainer = document.getElementById("building-blocks");
  for (let i = 0; i < 5; i++) {
    let block = document.createElement("div");
    block.classList.add("building-block");
    blockContainer.appendChild(block);
  }
}
