"use strict"

// on a 10 petite images à droite de notre gran,de image
// quand je clique sur une petite image elle apparait en grand et remplace la précedente
// j'ajoute aussi la référence à chaque image dans l'image*

//  je doit récuperer mes IMG 
//  objectif changer d'image au clique :


let smallImages = document.querySelectorAll('div img');

let bigImage = document.querySelector('.big-img');

console.log(smallImages);

console.log(bigImage);

smallImages.forEach(image =>{
    image.addEventListener('click',changeImage)
})
function changeImage()
{
    bigImage.style.backgroundImage = "url('"+this.src+"')"
    
};
