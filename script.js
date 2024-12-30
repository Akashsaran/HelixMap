const fileButton = document.getElementById('fileButton');
const fileInput = document.getElementById('pdbFileInput');
const output = document.getElementById('pdbOutput');

fileButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            output.textContent = event.target.result;
        };

        reader.onerror = () => {
            //output.textContent = 'Error reading file.';
        };

        reader.readAsText(file);
    } else {
        //output.textContent = 'Please select a PDB file to load.';
    }
});