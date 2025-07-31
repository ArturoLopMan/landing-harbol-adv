// Galería dinámica
const galeria = [
  'https://via.placeholder.com/400x300?text=Proyecto+1',
  'https://via.placeholder.com/400x300?text=Proyecto+2',
  'https://via.placeholder.com/400x300?text=Proyecto+3'
];

const galeriaContainer = document.getElementById('galeria');

galeria.forEach(img => {
  const div = document.createElement('div');
  div.className = 'galeria-img-wrapper';
  div.innerHTML = `<img src="${img}" class="galeria-img" alt="Proyecto">`;
  galeriaContainer.appendChild(div);
});

// Formulario (simulación de envío)
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulario enviado. ¡Gracias por contactarnos!');
});
