
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    let name = nameInput.value;
    name = name.trim();
    nameOutput.textContent = name ? name : 'Anonymous';
});