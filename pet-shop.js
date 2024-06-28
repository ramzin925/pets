//login

function redirecionar(){
    window.location.href = "index.html"
}

//Perfil-Cuidador

const input = document.getElementById('foto-de-perfil');
const preview = document.getElementById('previa');

input.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            preview.style.display = 'block';
            preview.src = reader.result;
        }
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
        preview.src = '#';
    }
});