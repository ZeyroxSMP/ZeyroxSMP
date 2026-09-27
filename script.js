function copyIP() {
    const ip = "velofun.mcsh.io";

    navigator.clipboard.writeText(ip);

    const message = document.getElementById("copyMessage");

    message.textContent = "✓ IP copied!";

    setTimeout(function () {
        message.textContent = "";
    }, 2500);
}
