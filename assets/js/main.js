window.onpageshow = () => {
  if (event.persisted) {
      window.location.reload() 
  }
}

var mouseX = window.innerWidth/2,
    mouseY = window.innerHeight/2;

function is_local(link) {
  if (link.host == window.location.host) {
    return true;
  } else {
    return false;
  }
}

document.querySelectorAll('a').forEach(function(x) {
  const cursorEl = document.querySelector('#cursor');
  x.addEventListener('mouseover', function() {
    cursorEl.classList.add('active');
  });
  x.addEventListener('mouseleave', function() {
    cursorEl.classList.remove('active');
  });
  x.addEventListener('click', function() {
    console.log(x.host);
    if (is_local(x)) {
      event.preventDefault();
      document.querySelector('.loading-screen').classList.toggle('animated');
      setTimeout(function() {
        window.location = x.getAttribute('href');
      }, 1000);
    }
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

if (document.querySelector('.project')) {
  document.querySelectorAll('.project').forEach(function(x) {
    x.addEventListener('mouseenter', function() {
      document.querySelector(`#slide-${x.getAttribute('data-ref')}`).classList.add('active');
    });
    x.addEventListener('mouseleave', function() {
      document.querySelector(`#slide-${x.getAttribute('data-ref')}`).classList.replace('active', 'deactive');
      setTimeout(function() {
        document.querySelector(`#slide-${x.getAttribute('data-ref')}`).classList.remove('deactive')
      },600);
    });
  });
}

document.querySelectorAll('.mobile-menu').forEach(function(x) {
  x.addEventListener('click', function() {
    document.querySelector('.nav_links').classList.toggle('active');
  });
});

if (document.getElementById('project-brief-trigger')) {
  document.getElementById('project-brief-trigger').addEventListener('click', function() {
    document.getElementById('project-brief-trigger').classList.toggle('active');
    document.getElementById('project-brief').classList.toggle('active');
  });
}
