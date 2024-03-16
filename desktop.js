const canvas = document.getElementById("desktop");
const c = canvas.getContext("2d");
c.fillStyle="#bbbbbb";

// Variables
let isHolding = false;
let cursor = {
    x:0,
    y:0,
    lastx:0,
    lasty:0,
    held:false
};
let container =  {
    x:0,
    y:0,
    title:"",
    width:0,
    height:0,
    minimized:true,
    hovered:false,
    selected:false,
    open: function() {
        //drawContainer(this.x, this.y, this.width, this.height, this.title);
    },
    close: function() {
        // later lolol
    }
};
let icon = {
    x:0,
    y:0,
    image:"",
    hovered:false
}
// Event Listeners
window.addEventListener('mousemove', mousemove);
window.addEventListener("mousedown", mousedown);
window.addEventListener("mouseup", mouseup);

// Event Functions
function mousedown(event) {
    cursor.held = true;
    cursor.lastx = cursor.x;
    cursor.lasty = cursor.y;
}
function mouseup(event) {
    cursor.held = false;
    cursor.lastx = cursor.x;
    cursor.lasty = cursor.y;
}
function mousemove(event) {
    cursor.x = event.pageX;
    cursor.y = event.pageY;
    if(cursor.held) {
        cursor.x = event.pageX;
        cursor.y = event.pageY;
    }
}

requestAnimationFrame(draw);
function draw() {
    clear();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(cursor.held) {
        c.fillStyle = "#bbbbbb";
        c.fillRect(cursor.x, cursor.y, 300, 225);
    }
    else {
        c.fillStyle = "#a6a6a6";
        c.fillRect(cursor.lastx, cursor.lasty, 300, 225);
    }
    requestAnimationFrame(draw);
}
function clear() {
    c.fillStyle = "DarkCyan";
    c.fillRect(0,0,c.canvas.width, c.canvas.height);
}
