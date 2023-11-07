const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const docView = document.getElementById("doc-view");
const iconImage = document.getElementById("icon-image");
const fileNameElement = document.getElementById("file-name");

inputFile.addEventListener("change", function() {
    const file = inputFile.files[0];
    if (file) {
        if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            // Lorsque l'utilisateur a sélectionné un fichier valide
            const reader = new FileReader();

            reader.onload = function(e) {
                iconImage.style.display = "none"; // Masque l'icône
                docView.style.display = "block"; // Affiche la vue du document

                fileNameElement.textContent = file.name;
            };

            reader.readAsDataURL(file);
        } else {
            // Fichier invalide
            alert("Invalid file format. Please select a valid Excel file.");
            inputFile.value = ""; // Réinitialise l'input file
        }
    }
});




