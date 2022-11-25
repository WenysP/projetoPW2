'use strict'
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Navegue para a Diversão!') {
    button.value = 'Stop machine';
    paragraph.textContent = 'Tente de novo!';
  } else {
    button.value = 'Continue!';
    paragraph.textContent = 'Divirta-se';
  }
}
$().button('toggle')

$('.alert').alert();
.alert-link;