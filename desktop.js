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
class Container {
    constructor(x, y, width, height, title) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.title=title;

        this.selected=true;
        this.minimized=false;
    }
    draw(x, y, width, height) {
        c.fillStyle="#eeeeee";
        c.fillRect(x-2,y-2, width+4, height+4);
        c.fillStyle="#bbbbbb"
        c.fillRect(x, y, width, height);
        if(this.selected) {
            c.fillStyle="#00008b";
        } else {
            c.fillStyle="#808080";
        }
        c.fillRect(x+3, y+3, width-6, 24);
        c.font="16px win9xfont";
        c.fillStyle="#fff";
        c.fillText(this.title, x+27, y+3);
    }
}

let icon = {
    x:0,
    y:0,
    image:"",
    hovered:false
};
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
let containers = [];
containers.push(new Container(50,100,800,500,"Test"));
function draw() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    clear();
    for(const b of containers){
        b.draw(50,100,800,500);
    }
    requestAnimationFrame(draw);
}
draw();
function clear() {
    c.fillStyle = "DarkCyan";
    c.fillRect(0,0,c.canvas.width, c.canvas.height);
}
