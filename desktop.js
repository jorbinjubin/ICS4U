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
    held:false,
    within: function(x1, y1, x2, y2) {
        return x1 <= cursor.x && cursor.x <= x2 && y1 <= cursor.y && cursor.y <= y2;
    },
    withinHeld: function(x1, y1, x2, y2) {
        return cursor.within(x1,y1,x2,y2) && cursor.held;
    }
};
console.log("github.com/jorbinjubin/ICS4U");
let colors = {// Windows 95's original 16 color set according to https://lospec.com/palette-list/microsoft-vga
    blk:"#000000",
    dRed:"#800000",
    dGrn:"#008000",
    dYlw:"#808000",
    dBlu:"#000080",
    dPrl:"#800080",
    dCyn:"#008080",
    lGry:"#c0c0c0",
    gry:"#808080",
    red:"#ff0000",
    grn:"#00ff00",
    ylw:"#ffff00",
    blu:"#0000ff",
    mgt:"#ff00ff",
    cyn:"#00ffff",
    wht:"#ffffff"
}
const minimize = new Image(20,18);
const close = new Image(20,18);
const fullscreen = new Image(20,18);
const floating = new Image(20,18);

minimize.src="assets/minimize.png";
close.src="assets/close.png";
fullscreen.src="assets/maximize.png";
floating.src="assets/float.png";

class Container {
    constructor(x, y, width, height, title) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.title=title;

        this.selected=true;
        this.minimized=false;
        this.maximized=false;
    }

    draw(x, y, width, height) {
        c.fillStyle=colors.wht;
        c.fillRect(x-2,y-2, width+4, height+4);
        c.fillStyle=colors.blk;
        c.fillRect(x,y,width+2,height+2); //work on this later
        c.fillStyle=colors.lGry;
        c.fillRect(x, y, width, height);
        if(this.selected) {
            c.fillStyle=colors.dBlu;
        } else {
            c.fillStyle=colors.gry;
        }
        c.fillRect(x+3, y+3, width-6, 24);
        c.font="18px win9xfont";
        c.fillStyle=colors.wht;
        c.fillText(this.title, x+27, y+21);

        c.drawImage(close, x+width-3-24, y+6)
        if(this.maximized) c.drawImage(floating, x+width-3-48, y+6);
        else c.drawImage(fullscreen, x+width-3-48, y+6);
        c.drawImage(minimize, x+width-3-72, y+6);
    }
    maximize() {
        if(this.selected) this.maximized=true;
        else this.selected=true;
    }
    minimize() {
        if(this.selected) {
            this.minimized=true;
            this.maximized=false;
        }
        else this.selected=true;
    }
    close() {
        c.clearRect(this.x-2, this.y-2, this.width+4, this.height+4);
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
containers.push(new Container(150,200,800,500,"Test2"));
containers[0].selected=false;
function draw() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    clear();
    for(const b of containers){
        b.draw(b.x,b.y,b.width,b.height);
    }
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
function clear() {
    c.fillStyle = "DarkCyan";
    c.fillRect(0,0,c.canvas.width, c.canvas.height);
}
