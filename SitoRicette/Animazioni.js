// Funzione per gestire l'effetto di apparizione e scomparsa delle immagini
        function toggleImages() {
            var image1 = document.getElementById("dynamicImage1");
            var image2 = document.getElementById("dynamicImage2");

            // Se l'immagine corrente è nascosta, mostra l'immagine, altrimenti nascondila
            image1.style.display = (image1.style.display === "none") ? "block" : "none";
            image2.style.display = (image2.style.display === "none") ? "block" : "none";

            // Ripeti la funzione dopo un certo intervallo di tempo (ad esempio, 1000 millisecondi o 1 secondo)
            setTimeout(toggleImages, 1000);
        }

        // Avvia la funzione quando il documento è completamente caricato
        document.addEventListener("DOMContentLoaded", function () {
            toggleImages();
        });