const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// Toggle navigation event
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
})

// Open modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

// Close modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})

// Close modal on outside click
window.addEventListener('click', e => {
    e.target === modal ? modal.classList.remove('show-modal') : null;
})
