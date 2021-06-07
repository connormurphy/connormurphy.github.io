const cursor = document.querySelector('#cursor');

document.querySelectorAll('a').forEach(function(x) {
  x.addEventListener('mouseover', function() {
    cursor.classList.add('active');
  });
  x.addEventListener('mouseleave', function() {
    cursor.classList.remove('active');
  })
});

const moveCursor = (e) =>{
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', moveCursor);