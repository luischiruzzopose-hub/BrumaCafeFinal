const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('.reservation-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = data.get('nombre');
  const telefono = data.get('telefono');
  const fecha = data.get('fecha');
  const hora = data.get('hora');
  const personas = data.get('personas');
  const mensaje = `Hola Bruma Café, quiero reservar una mesa.%0A%0ANombre: ${nombre}%0ATeléfono: ${telefono}%0AFecha: ${fecha}%0AHora: ${hora}%0APersonas: ${personas}`;
  window.open(`https://wa.me/59899123456?text=${mensaje}`, '_blank');
});
