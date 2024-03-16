const canvas = document.getElementById("desktop");
const c = canvas.getContext("2d");
c.fillStyle="#bbbbbb";

// Variables
let isHolding = false;
let cursor = {
    x:0,
    y:0,
    lastX:0,
    lastY:0,
    held:false
};

// Event Listeners
window.addEventListener('mousemove', mousemove);
window.addEventListener("mousedown", mousedown);
window.addEventListener("mouseup", mouseup);

// Event Functions
function mousedown(event) {
    cursor.held = true;
}
function mouseup(event) {
    cursor.held = false;
}
function mousemove(event) {
    clear();
    cursor.x = event.pageX;
    cursor.y = event.pageY;
}

requestAnimationFrame(draw);
function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(cursor.held) {
        c.fillStyle = "#bbbbbb";
        c.fillRect(cursor.x, cursor.y, 300, 225);
    }
    requestAnimationFrame(draw);
}
function clear() {
    c.fillStyle = "DarkCyan";
    c.fillRect(0,0,c.canvas.width, c.canvas.height);
}
