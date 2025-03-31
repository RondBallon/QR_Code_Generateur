let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrTexte");

function generateQR() {
  if (qrText.value.length > 0) { // on vérifie si le champ n'est pas vide
    qrImage.src = 
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(qrText.value); // on encode le texte pour éviter les erreurs d'URL
    imgBox.classList.add("show-img"); // on ajoute la classe show-img pour afficher l'image
  } else {
    qrText.classList.add("error"); // on ajoute la classe error si le champ est vide
    setTimeout(() => { // on enlève la classe error après 1 seconde
      qrText.classList.remove("error"); // on enlève la classe error après 1 seconde
    }, 1000);
  }
}
