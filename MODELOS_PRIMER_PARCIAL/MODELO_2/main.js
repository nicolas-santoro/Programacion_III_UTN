const dropdown = document.getElementById('dropdown');
const selected = document.getElementById('selected');
const optionsContainer = document.getElementById('options');
const options = optionsContainer.querySelectorAll('.dropdown-option');

// Abre/cierra el menú al hacer clic
selected.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

// Selecciona una opción y cierra el menú
options.forEach(option => {
  option.addEventListener('click', () => {
    selected.textContent = option.textContent;

    // Remover selección previa
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');

    dropdown.classList.remove('open');
  });
});

// Cierra el menú al hacer clic fuera
window.addEventListener('click', e => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});