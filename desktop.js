const c = document.getElementById("desktop").getContext("2d");
c.fillStyle="#bbbbbb"
//c.fillRect(100,100,1000,800);
//let mouse;
window.addEventListener('mousemove', mousemove);
// Create a function to track cursor position
function trackCursorPosition(event) {
    let posX = event.clientX;
    let posY = event.clientY;
    c.width=window.innerWidth;
    c.height=window.innerHeight;
    c.fillRect(posX, posY, posX+800, posY+900);
}

// Add event listener to track cursor movement
document.addEventListener("mousemove", trackCursorPosition);

// Periodically check cursor position every 500 milliseconds (adjust as needed)
setInterval(trackCursorPosition, 100);
