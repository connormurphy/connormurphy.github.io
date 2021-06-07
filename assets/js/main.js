var mouseX = window.innerWidth/2,
    mouseY = window.innerHeight/2;

document.querySelectorAll('a').forEach(function(x) {
  const cursorEl = document.querySelector('#cursor');
  x.addEventListener('mouseover', function() {
    cursorEl.classList.add('active');
  });
  x.addEventListener('mouseleave', function() {
    cursorEl.classList.remove('active');
  });
});

var cursor = {
  el: document.querySelector('#cursor'),
  x: window.innerWidth/2,
  y: window.innerHeight/2,
  w: 48,
  h: 48,
  update: function() {
    l = this.x - this.w/2;
    t = this.y - this.h/2;
    this.el.style.transform = `translate3d(${l}px,${t}px,0)`;
  }
}

document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

setInterval(move,1000/60);

function move() {
  cursor.x = lerp (cursor.x, mouseX, 0.1);
  cursor.y = lerp (cursor.y, mouseY, 0.1);
  cursor.update();
}

function lerp (start, end, amt) {
  return (1-amt)*start+amt*end;
}
