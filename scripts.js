// Function to copy the script text to clipboard
function copyToClipboard() {
    const scriptText = document.getElementById("scriptText");
    scriptText.select();
    document.execCommand("copy");

    // Change button text to "Copied!" for 2 seconds
    const copyButton = document.querySelector('.copy-btn');
    copyButton.innerText = "Copied!";
    setTimeout(() => {
        copyButton.innerText = "Copy Script";
    }, 2000);
}
