const c = document.getElementById("desktop").getContext("2d");
c.fillStyle="#bbbbbb"
c.width=window.innerWidth
c.height=window.innerHeight
window.addEventListener('mousemove', mousemove);
let cursor = {x:0, y:0}

// Create a function to track cursor position
function mousemove(event) {
    cursor.x=event.pageX;
    cursor.y=event.pageY;
    c.fillRect(cursor.x-10, cursor.y-10, cursor.x+250, cursor.y+150);
}

