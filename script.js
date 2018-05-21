let canvas = document.getElementById("c");
canvas.width = canvas.height = 1000;
let ctx = canvas.getContext("2d");

const RAD = Math.PI/180;

let time = 0.0;
function render() {
  time += 0.01;
  let rotation = Math.sin(time/50);
  
  ctx.translate(c.width/2, 500)
  for(let i = 0; i < 1000; i++) {
    let size = 10000 / i;
    ctx.fillStyle = `rgba(${Math.cos(i)}, ${i%200}, ${i%100}, 0.5)`;
    
    ctx.rotate(rotation + RAD*50);
    ctx.beginPath();
    ctx.moveTo(-size/2, -size/2);
    ctx.lineTo(-size/2 + size, -size/2 + size);
    ctx.lineTo(-size/2 + size, -size/2 - size);
    ctx.fill();
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  requestAnimationFrame(render);
}

render();
