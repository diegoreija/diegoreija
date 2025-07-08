function showChapter(num) {
  // Ocultar todos los capítulos
  document.querySelectorAll('.chapter').forEach(el => el.style.display = 'none');
  // Mostrar el capítulo activo
  document.getElementById('chapter' + num).style.display = 'block';
   // Actualizar botones activos
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab')[num - 1].classList.add('active');
}

// --- JavaScript ---
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

