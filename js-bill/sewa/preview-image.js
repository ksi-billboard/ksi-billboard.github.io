document.getElementById("content").addEventListener("change", function() {
    var input = this;
    var preview = document.getElementById('imagePreview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Menampilkan gambar di bawahnya
            preview.innerHTML = '<img src="' + e.target.result + '" alt="Preview Gambar" style="max-width: 300px; max-height: 300px;">';
        };

        reader.readAsDataURL(input.files[0]);
    }
});