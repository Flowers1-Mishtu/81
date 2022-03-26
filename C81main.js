canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=5
ctx.rect(200, 150, 450, 250);
ctx.stroke();

color="blue";



canvas.addEventListener("mousedown", mymousedown );
function mymousedown(e){
    color = document.getElementById("color").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log(mouse_x, mouse_y);

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5
ctx.arc(mouse_x,mouse_y, 40, 0 , 2*Math.PI);
ctx.stroke();

}
function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle="grey";
    ctx.lineWidth=5
    ctx.rect(200, 150, 450, 250);
    ctx.stroke(); }


