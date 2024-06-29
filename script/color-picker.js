const colorPickerX = document.getElementById('colorPickerX');
const displayBoxX = document.getElementById('displayBoxX');

const f_update = (() => { displayBoxX.textContent = colorPickerX.value; });

colorPickerX.addEventListener ('input', f_update, false);

f_update();
